import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicios } from "@/data/servicios";

/** Listado de servicios en /servicios: cada tarjeta enlaza a la página del servicio. */
export default function Servicios() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Servicios de riego, jardinería y paisajismo | Riegomax"
        description="Sistemas de riego, jardinería, paisajismo, mantenimiento, bombas de agua, tableros eléctricos de riego, césped sintético e iluminación de jardines en zona oeste."
        path="/servicios"
      />

      <Header />

      <main>
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-[42px]">
              Nuestros servicios
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Trabajamos en Moreno y toda la zona oeste de la provincia de Buenos Aires. Elegí un
              servicio para conocer cómo trabajamos, con fotos y videos de trabajos reales.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {s.portada && (
                <img
                  src={s.portada}
                  alt={s.titulo}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={1200}
                  className="aspect-video w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-bold group-hover:text-primary">{s.titulo}</h2>
                <p className="mt-2 flex-1 text-muted-foreground">{s.resumen}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Ver servicio
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
