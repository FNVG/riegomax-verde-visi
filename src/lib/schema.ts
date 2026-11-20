import type { Articulo } from "@/data/blog";
import type { Servicio } from "@/data/servicios";

/**
 * Datos estructurados (Schema.org) en formato JSON-LD.
 * Le explican a Google, en un formato que entiende sin ambigüedad,
 * qué es Riegomax y qué contiene cada página.
 *
 * Solo incluyen datos que ya figuran en el sitio. Si algún dato cambia
 * (teléfono, horario, redes), hay que actualizarlo acá también.
 */

const SITE_URL = "https://www.riegomax.com.ar";

export const negocioLocal = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#negocio`,
  name: "Riegomax",
  description:
    "Sistemas de riego automático, jardinería, paisajismo, mantenimiento, bombas de agua, tableros eléctricos de riego, césped sintético e iluminación de jardines en Moreno y zona oeste de la provincia de Buenos Aires.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/preview.jpg`,
  telephone: "+54 9 11 5924-7748",
  email: "contacto@riegomax.com.ar",
  // Sin calle: es un negocio que va a domicilio del cliente, no un local a la calle
  address: {
    "@type": "PostalAddress",
    addressLocality: "Moreno",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Zona oeste, provincia de Buenos Aires",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/sistemaderiegomax/",
    "https://www.facebook.com/profile.php?id=61580732585868",
  ],
  knowsAbout: [
    "Sistemas de riego",
    "Riego automático",
    "Riego por goteo",
    "Jardinería",
    "Paisajismo",
    "Mantenimiento de jardines",
    "Instalación de bombas de agua",
    "Tableros eléctricos de riego",
    "Colocación de césped sintético",
    "Venta y colocación de luminarias de exterior",
  ],
};

const MESES: Record<string, string> = {
  enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06",
  julio: "07", agosto: "08", septiembre: "09", setiembre: "09", octubre: "10",
  noviembre: "11", diciembre: "12",
};

/**
 * Convierte "24 Julio 2026" en "2026-07-24T09:00:00-03:00".
 * Google pide fecha, hora y zona horaria; como el blog no guarda la hora,
 * se usa 9:00 en horario de Argentina (UTC-3). Si el formato no coincide, devuelve undefined.
 */
function fechaISO(fecha: string): string | undefined {
  const m = fecha.trim().match(/^(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})$/i);
  if (!m) return undefined;
  const mes = MESES[m[2].toLowerCase()];
  return mes ? `${m[3]}-${mes}-${m[1].padStart(2, "0")}T09:00:00-03:00` : undefined;
}

const absoluta = (url: string) => (url.startsWith("http") ? url : `${SITE_URL}${url}`);

export function articuloSchema(articulo: Articulo) {
  const url = `${SITE_URL}/blog/${articulo.slug}`;
  const fecha = fechaISO(articulo.fecha);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: articulo.titulo,
    description: articulo.seoDescription || articulo.descripcion,
    image: absoluta(articulo.imagen),
    url,
    mainEntityOfPage: url,
    inLanguage: "es-AR",
    ...(fecha && { datePublished: fecha }),
    author: { "@type": "Organization", name: "Riegomax", url: `${SITE_URL}/` },
    publisher: {
      "@type": "Organization",
      name: "Riegomax",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.jpeg` },
    },
  };
}

/** Datos estructurados de cada página de servicio (/servicios/<slug>). */
export function servicioSchema(servicio: Servicio) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servicio.titulo,
    serviceType: servicio.titulo,
    description: servicio.seoDescription,
    url: `${SITE_URL}/servicios/${servicio.slug}`,
    ...(servicio.portada && { image: absoluta(servicio.portada) }),
    provider: {
      "@type": "LocalBusiness",
      name: "Riegomax",
      url: `${SITE_URL}/`,
      telephone: negocioLocal.telephone,
      address: negocioLocal.address,
    },
    areaServed: negocioLocal.areaServed,
  };
}

/**
 * Migas de pan para Google (BreadcrumbList). Recibe las mismas migas que el componente
 * <Breadcrumbs> y la ruta de la página actual. Las migas que apuntan a una sección de la
 * home (/#productos) no son páginas propias, así que no se incluyen.
 */
export function breadcrumbSchema(items: { nombre: string; href?: string }[], rutaActual: string) {
  const validos = items.filter((m, i) => i === items.length - 1 || (m.href && !m.href.includes("#")));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: validos.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m.nombre,
      item: `${SITE_URL}${i === validos.length - 1 ? rutaActual : m.href}`,
    })),
  };
}
