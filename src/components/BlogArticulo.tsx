import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Info,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";

import { ArticleCard } from "./ArticleCard";

import {
  articulos,
  getArticulo,
  type Bloque,
} from "@/data/blog";


export default function BlogArticulo() {

  const { slug } = useParams();

  const articulo = getArticulo(slug || "");


  if (!articulo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Artículo no encontrado
        </h1>
      </div>
    );
  }
  const seoTitle = articulo.seoTitle || `${articulo.titulo} | RiegoMax`;

const seoDescription =
  articulo.seoDescription || articulo.descripcion;

const seoKeywords =
  articulo.palabrasClave?.join(", ") || "";

const canonicalUrl = `https://www.riegomax.com.ar/blog/${articulo.slug}`;


  const indice = articulo.contenido.filter(
    (b): b is Extract<Bloque, { tipo: "h2" }> =>
      b.tipo === "h2"
  );


  const relacionados = articulos
    .filter((a) => a.slug !== articulo.slug)
    .slice(0, 3);



  return (
    <div className="min-h-screen bg-background">

      <Helmet>
      <title>{seoTitle}</title>

      <meta
        name="description"
        content={seoDescription}
      />

      {seoKeywords && (
        <meta
          name="keywords"
          content={seoKeywords}
        />
      )}

      <link
        rel="canonical"
        href={canonicalUrl}
      />
    </Helmet>



      <main>

        <article>

          {/* Cabecera */}
          <header
            className="border-b border-border"
            style={{
              backgroundImage: "var(--gradient-hero)"
            }}
          >

            <div className="mx-auto max-w-3xl px-6 pt-14 pb-10">


              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
              >

                <ArrowLeft
                  className="size-4"
                  aria-hidden="true"
                />

                Volver al blog

              </Link>



              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">


                <span
                  className="rounded-md bg-primary-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-strong"
                >
                  {articulo.categoria}
                </span>



                <span
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >

                  <CalendarDays
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />

                  {articulo.fecha}

                </span>




                <span
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >

                  <Clock
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />

                  {articulo.lectura}

                </span>


              </div>




              <h1
                className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-[42px]"
              >
                {articulo.titulo}
              </h1>


            </div>

          </header>




          <img
            src={articulo.imagen}
            alt={articulo.titulo}
            width={1024}
            height={576}
            className="aspect-video w-full object-cover"
          />



          <div className="mx-auto max-w-3xl px-6 py-14">


            <p className="text-xl leading-relaxed text-foreground/90">
              {articulo.intro}
            </p>



            {indice.length > 1 && (

              <nav
                aria-label="Índice del artículo"
                className="mt-10 rounded-lg border border-border bg-surface p-6"
              >

                <h2
                  className="text-sm font-semibold uppercase tracking-wider"
                >
                  En este artículo
                </h2>



                <ol className="mt-4 space-y-2 text-sm">

                  {indice.map((bloque) => (

                    <li key={bloque.id}>

                      <a
                        href={`#${bloque.id}`}
                        className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        {bloque.texto}
                      </a>

                    </li>

                  ))}

                </ol>


              </nav>

            )}



            <div className="mt-12 space-y-7">


              {articulo.contenido.map(
                (bloque: Bloque, i: number) => {

                  switch (bloque.tipo) {

                    case "h2":

                      return (
                        <h2
                          key={i}
                          id={bloque.id}
                          className="scroll-mt-24 pt-4 text-2xl font-bold tracking-tight sm:text-3xl"
                        >
                          {bloque.texto}
                        </h2>
                      );


                    case "h3":

                      return (
                        <h3
                          key={i}
                          className="text-xl font-semibold tracking-tight"
                        >
                          {bloque.texto}
                        </h3>
                      );


                    case "parrafo":

                      return (
                        <p
                          key={i}
                          className="text-lg leading-[1.8] text-muted-foreground"
                        >
                          {bloque.texto}
                        </p>
                      );
                                          case "lista":

                      return (
                        <ul key={i} className="space-y-3">

                          {bloque.items.map((item) => (

                            <li
                              key={item}
                              className="flex gap-3 text-lg leading-relaxed text-muted-foreground"
                            >

                              <span
                                className="mt-2.5 size-2 shrink-0 rounded-full bg-primary"
                                aria-hidden="true"
                              />

                              {item}

                            </li>

                          ))}

                        </ul>
                      );



                    case "imagen":

                      return (
                        <figure
                          key={i}
                          className="pt-2"
                        >

                          <img
                            src={bloque.src}
                            alt={bloque.alt}
                            loading="lazy"
                            width={1024}
                            height={576}
                            className="aspect-video w-full rounded-lg border border-border object-cover shadow-soft"
                          />

                          <figcaption
                            className="mt-3 text-sm text-muted-foreground"
                          >
                            {bloque.alt}
                          </figcaption>

                        </figure>
                      );



                    case "tabla":

                      return (
                        <div
                          key={i}
                          className="overflow-x-auto rounded-lg border border-border shadow-soft"
                        >

                          <table
                            className="w-full min-w-[520px] border-collapse text-left text-sm"
                          >

                            <thead className="bg-surface">

                              <tr>

                                {bloque.encabezados.map((h) => (

                                  <th
                                    key={h}
                                    className="px-5 py-4 font-semibold uppercase tracking-wider text-muted-foreground"
                                  >
                                    {h}
                                  </th>

                                ))}

                              </tr>

                            </thead>



                            <tbody>

                              {bloque.filas.map((fila) => (

                                <tr
                                  key={fila.join()}
                                  className="border-t border-border"
                                >

                                  {fila.map((celda, ci) => (

                                    <td
                                      key={ci}
                                      className={
                                        ci === 0
                                          ? "px-5 py-4 font-semibold"
                                          : "px-5 py-4 text-muted-foreground"
                                      }
                                    >
                                      {celda}
                                    </td>

                                  ))}

                                </tr>

                              ))}

                            </tbody>


                          </table>

                        </div>
                      );



                    case "destacado": {

                      const esConsejo = bloque.variante === "consejo";

                      const Icono = esConsejo
                        ? Lightbulb
                        : TriangleAlert;


                      return (

                        <aside
                          key={i}
                          className={
                            esConsejo
                              ? "flex gap-4 rounded-lg border-l-4 border-primary bg-primary-soft/60 p-6"
                              : "flex gap-4 rounded-lg border-l-4 border-warning-foreground bg-warning-soft/70 p-6"
                          }
                        >

                          <Icono
                            className={
                              esConsejo
                                ? "mt-0.5 size-5 shrink-0 text-primary-strong"
                                : "mt-0.5 size-5 shrink-0 text-warning-foreground"
                            }
                            aria-hidden="true"
                          />


                          <div>

                            <p className="font-semibold">
                              {bloque.titulo}
                            </p>


                            <p className="mt-1.5 leading-relaxed text-muted-foreground">
                              {bloque.texto}
                            </p>


                          </div>


                        </aside>

                      );

                    }



                    case "enlaces":

                      return (

                        <aside
                          key={i}
                          className="rounded-lg border border-border bg-surface p-6"
                        >

                          <h3
                            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
                          >

                            <Info
                              className="size-4 shrink-0 text-secondary"
                              aria-hidden="true"
                            />

                            {bloque.titulo}

                          </h3>



                          <ul className="mt-4 space-y-4">


                            {bloque.items.map((item) => (

                              <li key={item.texto}>


                                <Link
                                  to="/"
                                  className="group inline-flex items-center gap-2 font-semibold text-secondary transition-colors duration-300 hover:text-primary"
                                >

                                  {item.texto}


                                  <ArrowRight
                                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden="true"
                                  />

                                </Link>



                                <p className="mt-1 text-sm text-muted-foreground">
                                  {item.detalle}
                                </p>


                              </li>

                            ))}


                          </ul>


                        </aside>

                      );



                    default:

                      return null;

                  }

                }

              )}


            </div>


          </div>


        </article>




        {/* CTA */}

        <section className="mx-auto max-w-6xl px-6 pb-16">

          <div
            className="rounded-2xl border border-border bg-surface p-8 text-center shadow-soft md:p-12"
          >

            <h2
              className="mx-auto max-w-2xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl"
            >
              ¿Necesitás ayuda para elegir el sistema de riego ideal?
              Nuestro equipo puede asesorarte.
            </h2>



            <div className="mt-8 flex flex-wrap justify-center gap-3">


              <Link
                to="/"
                className="inline-flex h-13 items-center rounded-lg bg-primary px-7 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-strong hover:shadow-lift"
              >
                Ver productos
              </Link>



              <Link
                to="/"
                className="inline-flex h-13 items-center rounded-lg border border-border bg-card px-7 text-base font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Contactanos
              </Link>


            </div>


          </div>


        </section>





        {/* Artículos relacionados */}

        <section className="mx-auto max-w-6xl px-6 pb-16">


          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Artículos relacionados
          </h2>



          <div
            className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          >

            {relacionados.map((a, i) => (

              <ArticleCard
                key={a.slug}
                articulo={a}
                index={i}
              />

            ))}

          </div>


        </section>



      </main>




    </div>
  );
}