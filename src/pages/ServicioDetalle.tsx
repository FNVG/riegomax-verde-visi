import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check } from "lucide-react";

import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ListaPreguntas from "@/components/ListaPreguntas";
import { getServicio, servicios, type Seccion } from "@/data/servicios";
import { breadcrumbSchema, faqSchema, servicioSchema } from "@/lib/schema";
import { preguntasFrecuentes } from "@/data/preguntas";

/**
 * Una sección de la página: texto a un lado y, si tiene, la foto o el video que ilustra
 * lo que se explica. En pantallas grandes la imagen alterna de lado para que la lectura
 * no sea monótona; en el celular va debajo del texto.
 */
function BloqueSeccion({ seccion, invertir }: { seccion: Seccion; invertir: boolean }) {
  const media = seccion.foto || seccion.video;

  return (
    <section className={media ? "grid items-start gap-8 md:grid-cols-5" : ""}>
      <div className={media ? `md:col-span-3 ${invertir ? "md:order-2" : ""}` : "max-w-3xl"}>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{seccion.titulo}</h2>

        <div className="mt-4 space-y-4">
          {seccion.parrafos.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        {seccion.lista && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {seccion.lista.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {seccion.enlace && (
          <Link
            to={seccion.enlace.href}
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-semibold text-primary hover:underline"
          >
            {seccion.enlace.texto}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>

      {media && (
        <div className={`space-y-6 md:col-span-2 ${invertir ? "md:order-1" : ""}`}>
          {seccion.foto && (
            <figure>
              <img
                src={seccion.foto.src}
                alt={seccion.foto.alt}
                loading="lazy"
                decoding="async"
                width={900}
                height={1200}
                className="aspect-[3/4] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">{seccion.foto.alt}</figcaption>
            </figure>
          )}

          {seccion.video && (
            <figure>
              {/* preload="none": el video no se descarga hasta que el visitante le da play */}
              <video
                src={seccion.video.src}
                poster={seccion.video.poster}
                controls
                muted
                playsInline
                preload="none"
                width={540}
                height={960}
                className="aspect-[9/16] w-full rounded-lg bg-black object-cover"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">{seccion.video.titulo}</figcaption>
            </figure>
          )}
        </div>
      )}
    </section>
  );
}

export default function ServicioDetalle() {
  const { slug } = useParams();
  const servicio = getServicio(slug || "");

  if (!servicio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        {/* Evita que Google indexe URLs de servicios que no existen */}
        <Helmet>
          <title>Servicio no encontrado | Riegomax</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-2xl font-bold">Servicio no encontrado</h1>
        <Link to="/servicios" className="font-semibold text-primary hover:underline">
          Ver todos los servicios
        </Link>
      </div>
    );
  }

  const otros = servicios.filter((s) => s.slug !== servicio.slug);
  const migas = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Servicios", href: "/servicios" },
    { nombre: servicio.titulo },
  ];
  const ruta = `/servicios/${servicio.slug}`;
  const preguntas = preguntasFrecuentes[servicio.slug] ?? [];
  // Las secciones con imagen alternan de lado; se cuentan solo esas
  let conMedia = 0;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={servicio.seoTitle}
        description={servicio.seoDescription}
        path={ruta}
        image={servicio.portada}
        jsonLd={[
          servicioSchema(servicio),
          breadcrumbSchema(migas, ruta),
          ...(preguntas.length > 0 ? [faqSchema(preguntas)] : []),
        ]}
      />

      <Header />

      <main>
        {/* Presentación */}
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-5xl px-6 pt-12 pb-10">
            <Breadcrumbs items={migas} />

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-[2.625rem]">
              {servicio.titulo}
            </h1>

            <div className="mt-5 max-w-3xl space-y-4">
              {servicio.intro.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-16 px-6 py-14">
          {servicio.secciones.map((seccion) => {
            const tieneMedia = Boolean(seccion.foto || seccion.video);
            const invertir = tieneMedia && conMedia++ % 2 === 1;
            return <BloqueSeccion key={seccion.titulo} seccion={seccion} invertir={invertir} />;
          })}

          {/* Preguntas frecuentes: preguntas reales que la gente le hace a Google sobre este servicio */}
          {preguntas.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
              <div className="mt-6">
                <ListaPreguntas preguntas={preguntas} />
              </div>
              <Link
                to="/preguntas-frecuentes"
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-semibold text-primary hover:underline"
              >
                Ver todas las preguntas frecuentes
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </section>
          )}

          {/* Otros servicios: enlaces internos entre páginas de servicio */}
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold tracking-tight">Otros servicios</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {otros.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="inline-flex min-h-[44px] items-center rounded-full border border-border bg-card px-5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
