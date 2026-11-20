/**
 * Título y descripción de las páginas fijas del sitio (las que no salen de una lista
 * de artículos, servicios o productos).
 *
 * Se usan en dos lugares, por eso están acá y no escritos dentro de cada página:
 *  - en cada página, con <Seo>, para el navegador y Google;
 *  - al armar el sitio (npm run build), para escribir el HTML propio de cada página
 *    (ver scripts/meta-por-pagina.ts). Así lo que ven WhatsApp, Facebook y otros
 *    buscadores coincide siempre con lo que muestra la página.
 */

export type MetaPagina = { title: string; description: string };

export const paginas = {
  inicio: {
    title: "Riego automático y jardinería en Moreno, zona oeste | Riegomax",
    description:
      "Instalación de riego automático, jardinería, paisajismo, césped sintético e iluminación de jardines en Moreno y zona oeste de Buenos Aires.",
  },
  servicios: {
    title: "Servicios de riego, jardinería y paisajismo | Riegomax",
    description:
      "Sistemas de riego, jardinería, paisajismo, mantenimiento, bombas de agua, tableros eléctricos de riego, césped sintético e iluminación de jardines en zona oeste.",
  },
  blog: {
    title: "Blog de riego y jardinería | Riegomax",
    description:
      "Guías y consejos sobre sistemas de riego, riego por goteo y aspersión, ahorro de agua y mantenimiento de jardines, escritos por el equipo de Riegomax.",
  },
  preguntas: {
    title: "Preguntas frecuentes sobre riego y jardinería | Riegomax",
    description:
      "Respuestas a las preguntas más buscadas sobre riego automático, césped sintético, grama bahiana, jardinería, bombas de agua e iluminación de jardines.",
  },
} satisfies Record<string, MetaPagina>;
