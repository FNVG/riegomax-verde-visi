import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Articulo } from "@/data/blog";

export function ArticleCard({ articulo, index = 0 }: { articulo: Articulo; index?: number }) {
  return (
    <article
      className="animate-rise group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <Link
  to={`/blog/${articulo.slug}`}
  className="block overflow-hidden"
  aria-label={articulo.titulo}
>
        <img
          src={articulo.imagen}
          alt={articulo.titulo}
          loading="lazy"
          width={1024}
          height={576}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="rounded-md bg-primary-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-strong">
            {articulo.categoria}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="size-3.5 shrink-0" aria-hidden="true" />
            {articulo.fecha}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5 shrink-0" aria-hidden="true" />
            {articulo.lectura}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-[22px] font-bold leading-snug tracking-tight">
          <Link
          to={`/blog/${articulo.slug}`}
          className="transition-colors duration-300 hover:text-primary"
        >
            {articulo.titulo}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted-foreground">
          {articulo.descripcion}
        </p>

       <Link
        to={`/blog/${articulo.slug}`}
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary-strong"
      >
          Leer artículo
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
