/**
 * HTML propio para cada página del sitio.
 *
 * Por qué existe: el sitio es una aplicación React. Sin este paso, el servidor entrega el
 * mismo index.html para todas las direcciones (con el título y la descripción del inicio),
 * y recién al ejecutarse el JavaScript cada página pone los suyos. Google ejecuta el
 * JavaScript, pero WhatsApp, Facebook y otros buscadores no: al compartir un artículo
 * mostraban el título del inicio, y no veían el canonical de ninguna página.
 *
 * Qué hace: al terminar `npm run build`, toma dist/index.html y escribe una copia por página
 * (dist/blog/<slug>.html, dist/servicios/<slug>.html, etc.) con su título, descripción,
 * canonical e imagen para compartir ya escritos. Vercel entrega esa copia (ver "cleanUrls"
 * en vercel.json) y después React sigue funcionando igual que antes.
 *
 * Los datos salen de los mismos archivos que usa el sitio (src/data/...), así que una página
 * nueva o un título cambiado se refleja solo en el próximo build: no hay que tocar este archivo.
 */
import fs from "node:fs";
import path from "node:path";
import { createServer, type Plugin } from "vite";

const SITE_URL = "https://www.riegomax.com.ar";
const IMAGEN_POR_DEFECTO = `${SITE_URL}/preview.jpg`;

type Meta = {
  ruta: string;
  title: string;
  description: string;
  imagen?: string;
  tipo?: "website" | "article";
};

const escapar = (texto: string) =>
  texto.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const absoluta = (url: string) => (url.startsWith("http") ? url : `${SITE_URL}${url}`);

/** Cambia el content="" de una etiqueta <meta name|property="clave">. */
function cambiarMeta(html: string, clave: string, valor: string) {
  const patron = new RegExp(`(<meta[^>]*(?:name|property)="${clave}"[^>]*content=")[^"]*(")`);
  if (!patron.test(html)) throw new Error(`[meta-por-pagina] index.html no tiene <meta ${clave}>`);
  return html.replace(patron, `$1${escapar(valor)}$2`);
}

function htmlDePagina(plantilla: string, meta: Meta) {
  const url = meta.ruta === "/" ? `${SITE_URL}/` : `${SITE_URL}${meta.ruta}`;
  const imagen = meta.imagen ? absoluta(meta.imagen) : IMAGEN_POR_DEFECTO;

  let html = plantilla.replace(/<title>[^<]*<\/title>/, `<title>${escapar(meta.title)}</title>`);
  html = cambiarMeta(html, "description", meta.description);
  html = cambiarMeta(html, "og:title", meta.title);
  html = cambiarMeta(html, "og:description", meta.description);
  html = cambiarMeta(html, "og:type", meta.tipo ?? "website");
  html = cambiarMeta(html, "og:image", imagen);
  html = cambiarMeta(html, "twitter:title", meta.title);
  html = cambiarMeta(html, "twitter:description", meta.description);
  html = cambiarMeta(html, "twitter:image", imagen);

  // El inicio (index.html) es también lo que Vercel entrega para direcciones que no existen
  // (las resuelve React, ej. /proyecto/1 o una página 404). Por eso no lleva canonical fijo:
  // si lo llevara, esas direcciones dirían "soy el inicio". El canonical del inicio lo pone React.
  if (meta.ruta === "/") return html;

  // data-rh="true": cuando React arranca, Helmet reemplaza estas etiquetas en vez de duplicarlas
  const extra =
    `    <link data-rh="true" rel="canonical" href="${escapar(url)}" />\n` +
    `    <meta data-rh="true" property="og:url" content="${escapar(url)}" />\n`;
  return html.replace("</head>", `${extra}  </head>`);
}

export function metaPorPagina(): Plugin {
  let raiz = process.cwd();
  let salida = "dist";

  return {
    name: "meta-por-pagina",
    apply: "build",
    configResolved(config) {
      raiz = config.root;
      salida = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      // Servidor de Vite sin abrir puertos: solo para leer los archivos de datos (TypeScript)
      const vite = await createServer({
        configFile: false,
        root: raiz,
        logLevel: "error",
        appType: "custom",
        server: { middlewareMode: true, hmr: false },
        optimizeDeps: { noDiscovery: true, include: [] },
        resolve: { alias: { "@": path.resolve(raiz, "src") } },
      });

      try {
        const [{ paginas }, { servicios }, { articulos }, { productos }] = await Promise.all([
          vite.ssrLoadModule("/src/data/paginas.ts"),
          vite.ssrLoadModule("/src/data/servicios.ts"),
          vite.ssrLoadModule("/src/data/blog.ts"),
          vite.ssrLoadModule("/src/data/productos.ts"),
        ]);

        // Las fotos del blog se importan desde src/assets: en el build quedan como
        // /assets/<nombre>-<código>.jpg. Se busca el archivo final por su nombre original.
        const assets = fs.readdirSync(path.join(salida, "assets"));
        const imagenFinal = (src?: string) => {
          if (!src || !src.startsWith("/src/")) return src;
          const { name, ext } = path.parse(src);
          const archivo = assets.find((a) => a.startsWith(`${name}-`) && a.endsWith(ext));
          return archivo ? `/assets/${archivo}` : undefined;
        };

        const metas: Meta[] = [
          { ruta: "/", ...paginas.inicio },
          { ruta: "/servicios", ...paginas.servicios },
          { ruta: "/blog", ...paginas.blog },
          { ruta: "/preguntas-frecuentes", ...paginas.preguntas },
          ...servicios.map((s: any) => ({
            ruta: `/servicios/${s.slug}`,
            title: s.seoTitle,
            description: s.seoDescription,
            imagen: s.portada,
          })),
          ...articulos.map((a: any) => ({
            ruta: `/blog/${a.slug}`,
            title: a.seoTitle || `${a.titulo} | Riegomax`,
            description: a.seoDescription || a.descripcion,
            imagen: imagenFinal(a.imagen),
            tipo: "article" as const,
          })),
          ...productos.map((p: any) => ({
            ruta: `/productos/${p.slug}`,
            title: p.seoTitle || `${p.nombre} | Riegomax`,
            description: p.descripcion,
            imagen: p.imagen,
          })),
        ];

        const plantilla = fs.readFileSync(path.join(salida, "index.html"), "utf-8");

        for (const meta of metas) {
          const archivo =
            meta.ruta === "/" ? "index.html" : `${meta.ruta.slice(1)}.html`;
          const destino = path.join(salida, archivo);
          fs.mkdirSync(path.dirname(destino), { recursive: true });
          fs.writeFileSync(destino, htmlDePagina(plantilla, meta));
        }

        console.log(`\n[meta-por-pagina] ${metas.length} páginas con su propio título y descripción.`);
      } finally {
        await vite.close();
      }
    },
  };
}
