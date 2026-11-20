import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export type Miga = {
  nombre: string;
  /** Ruta de la página. La última miga (la página actual) va sin ruta. */
  href?: string;
};

/**
 * Migas de pan: muestran dónde está el visitante (Inicio › Servicios › Césped sintético)
 * y le permiten volver a cualquier nivel con un clic.
 * Los mismos datos se usan en breadcrumbSchema() para que Google muestre esta ruta
 * en los resultados de búsqueda.
 */
const claseEnlace =
  "inline-flex min-h-[44px] items-center font-medium transition-colors hover:text-primary";

export default function Breadcrumbs({ items }: { items: Miga[] }) {
  return (
    <nav aria-label="Migas de pan">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const ultima = i === items.length - 1;
          return (
            <li key={item.nombre} className="flex items-center gap-1">
              {item.href && !ultima ? (
                item.href.includes("#") ? (
                  // Enlace a una sección de la home: <a> para que el navegador baje hasta ella
                  <a href={item.href} className={claseEnlace}>
                    {item.nombre}
                  </a>
                ) : (
                  <Link to={item.href} className={claseEnlace}>
                    {item.nombre}
                  </Link>
                )
              ) : (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.nombre}
                </span>
              )}
              {!ultima && <ChevronRight className="size-4 shrink-0" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
