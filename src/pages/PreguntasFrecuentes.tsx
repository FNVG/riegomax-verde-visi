import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ListaPreguntas from "@/components/ListaPreguntas";
import { servicios } from "@/data/servicios";
import { preguntasFrecuentes } from "@/data/preguntas";
import { breadcrumbSchema } from "@/lib/schema";
import { paginas } from "@/data/paginas";

const migas = [{ nombre: "Inicio", href: "/" }, { nombre: "Preguntas frecuentes" }];
const ruta = "/preguntas-frecuentes";

/**
 * Todas las preguntas frecuentes juntas, agrupadas por servicio.
 * No lleva datos estructurados FAQPage: ya los tienen las páginas de servicio, y Google
 * pide marcar cada pregunta en una sola página del sitio.
 */
export default function PreguntasFrecuentes() {
  const grupos = servicios
    .map((s) => ({ servicio: s, preguntas: preguntasFrecuentes[s.slug] ?? [] }))
    .filter((g) => g.preguntas.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={paginas.preguntas.title}
        description={paginas.preguntas.description}
        path={ruta}
        jsonLd={breadcrumbSchema(migas, ruta)}
      />

      <Header />

      <main>
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-4xl px-6 pt-10 pb-10">
            <Breadcrumbs items={migas} />
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-[2.625rem]">
              Preguntas frecuentes
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Las dudas más comunes sobre riego, césped, jardinería, bombas e iluminación, agrupadas
              por servicio. Tocá una pregunta para ver la respuesta.
            </p>

            {/* Índice: salta directo al servicio que le interesa al visitante */}
            <nav aria-label="Servicios" className="mt-6 flex flex-wrap gap-2">
              {grupos.map(({ servicio }) => (
                <a
                  key={servicio.slug}
                  href={`#${servicio.slug}`}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {servicio.titulo}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-14 px-6 py-14">
          {grupos.map(({ servicio, preguntas }) => (
            <section key={servicio.slug} id={servicio.slug} className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{servicio.titulo}</h2>
              <div className="mt-6">
                <ListaPreguntas preguntas={preguntas} />
              </div>
              <Link
                to={`/servicios/${servicio.slug}`}
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-semibold text-primary hover:underline"
              >
                Ver {servicio.titulo.toLowerCase()}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
