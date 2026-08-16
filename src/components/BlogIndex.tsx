
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import heroImg from "../assets/hero-riego.jpg";
import { ArticleCard } from "../components/ArticleCard";
import { articulos, categorias } from "@/data/blog";



const POR_PAGINA = 3;

export default function BlogIndex() {
  const [categoria, setCategoria] = useState<string>("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return articulos.filter((a) => {
      const coincideCategoria = categoria === "Todos" || a.categoria === categoria;
      const coincideTexto =
        q.length === 0 ||
        a.titulo.toLowerCase().includes(q) ||
        a.descripcion.toLowerCase().includes(q);
      return coincideCategoria && coincideTexto;
    });
  }, [categoria, busqueda]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  const paginaActual = Math.min(pagina, totalPaginas);
  const visibles = filtrados.slice((paginaActual - 1) * POR_PAGINA, paginaActual * POR_PAGINA);

  return (
    <div className="min-h-screen bg-background">
    

      <main>
        {/* Hero */}
        
        {/* Búsqueda */}
        <section className="mx-auto max-w-6xl px-6 pt-14">
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <label className="sr-only" htmlFor="buscar-articulos">
                Buscar artículos
              </label>
              <input
                id="buscar-articulos"
                type="search"
                value={busqueda}
                onChange={(event) => {
                  setBusqueda(event.target.value);
                  setPagina(1);
                }}
                placeholder="Buscar artículos..."
                className="h-14 w-full rounded-lg border border-border bg-card pl-12 pr-4 text-base shadow-soft outline-none transition-shadow duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </div>
            <button
              type="submit"
              className="h-14 shrink-0 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-strong hover:shadow-lift"
            >
              Buscar
            </button>
          </form>
        </section>

        {/* Categorías */}
        <section className="mx-auto max-w-6xl px-6 pt-8">
          <div className="scrollbar-none -mx-6 flex gap-3 overflow-x-auto px-6 pb-2">
            {categorias.map((cat) => {
              const activa = cat === categoria;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCategoria(cat);
                    setPagina(1);
                  }}
                  className={
                    activa
                      ? "shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300"
                      : "shrink-0 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Grid de artículos */}
        <section id="articulos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-14">
          <h2 className="sr-only">Artículos</h2>
          {visibles.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {visibles.map((articulo, i) => (
                <ArticleCard key={articulo.slug} articulo={articulo} index={i} />
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-border bg-surface p-10 text-center text-muted-foreground">
              No encontramos artículos para esa búsqueda. Probá con otra palabra o categoría.
            </p>
          )}

          {/* Paginación */}
          <nav
            aria-label="Paginación"
            className="mt-14 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              type="button"
              disabled={paginaActual === 1}
              onClick={() => setPagina(paginaActual - 1)}
              className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
            >
              Anterior
            </button>
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                aria-current={n === paginaActual ? "page" : undefined}
                onClick={() => setPagina(n)}
                className={
                  n === paginaActual
                    ? "size-11 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-all duration-300"
                    : "size-11 rounded-lg border border-border bg-card text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                }
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              disabled={paginaActual === totalPaginas}
              onClick={() => setPagina(paginaActual + 1)}
              className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
            >
              Siguiente
            </button>
          </nav>
        </section>

        <div id="newsletter" className="scroll-mt-24">
       
        </div>
      </main>

  
    </div>
  );
}
