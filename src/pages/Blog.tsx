import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import { paginas } from "@/data/paginas";

const migas = [{ nombre: "Inicio", href: "/" }, { nombre: "Blog" }];
import { ArticleCard } from "@/components/ArticleCard";
import { articulos } from "@/data/blog";

/**
 * Listado completo del blog en /blog.
 * Muestra TODOS los artículos como enlaces reales (<a href>), sin paginación por botones,
 * para que Google pueda llegar a cada uno siguiendo enlaces.
 */
export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={paginas.blog.title}
        description={paginas.blog.description}
        path="/blog"
        jsonLd={breadcrumbSchema(migas, "/blog")}
      />

      <Header />

      <main>
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-10">
            <Breadcrumbs items={migas} />
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-[2.625rem]">
              Blog de riego y jardinería
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Guías prácticas para elegir, instalar y mantener tu sistema de riego,
              ahorrar agua y cuidar tu jardín.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="sr-only">Todos los artículos</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {articulos.map((articulo, i) => (
              <ArticleCard key={articulo.slug} articulo={articulo} index={i} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
