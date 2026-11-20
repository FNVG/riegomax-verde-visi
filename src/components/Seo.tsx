import { Helmet } from "react-helmet-async";

// Dominio oficial: el mismo que está configurado como principal en Vercel.
// Si algún día cambia, se modifica solo acá.
const SITE_URL = "https://www.riegomax.com.ar";
const DEFAULT_IMAGE = `${SITE_URL}/preview.jpg`;

type SeoProps = {
  title: string;
  description: string;
  path: string; // ruta de la página, ej: "/blog/riego-por-goteo-vs-aspersion"
  image?: string; // ruta relativa ("/images/...") o URL absoluta
  type?: "website" | "article" | "product";
  keywords?: string[];
  jsonLd?: object; // datos estructurados de la página (ver src/lib/schema.ts)
};

// Convierte rutas relativas en absolutas, porque Google, WhatsApp y Facebook
// necesitan la URL completa para canonical y og:image.
const toAbsolute = (url: string) =>
  url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;

export default function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  jsonLd,
}: SeoProps) {
  const url = toAbsolute(path);
  const img = image ? toAbsolute(image) : DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type === "product" ? "website" : type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content="Riegomax" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
