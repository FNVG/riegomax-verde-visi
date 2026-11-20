import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Pregunta } from "@/data/preguntas";

/**
 * Lista desplegable de preguntas frecuentes.
 * Se usa en cada página de servicio y en /preguntas-frecuentes, así las preguntas
 * se escriben una sola vez (src/data/preguntas.ts) y se ven igual en los dos lugares.
 * <details> deja el texto en la página (Google lo lee) y el visitante abre solo la que le interesa.
 */
export default function ListaPreguntas({ preguntas }: { preguntas: Pregunta[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-card">
      {preguntas.map((p) => (
        <details key={p.pregunta} className="group px-5">
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-4">
            <h3 className="text-lg font-semibold">{p.pregunta}</h3>
            <ChevronDown
              className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="pb-5">
            <p className="text-base leading-relaxed text-muted-foreground">{p.respuesta}</p>
            {p.enlace && (
              <Link
                to={p.enlace.href}
                className="mt-3 inline-flex min-h-[44px] items-center gap-2 font-semibold text-primary hover:underline"
              >
                {p.enlace.texto}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
