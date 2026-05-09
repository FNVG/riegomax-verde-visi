import { useState } from "react";

/* =======================
   Tipos
======================= */

type ReelType = "Riego" | "Paisajismo" | "Jardinería";

type VideoReel = {
  id: number;
  src: string;
  title: string;
  tipo: ReelType;
};

/* =======================
   Data
======================= */

const reels: VideoReel[] = [
    {
    id: 1,
    src: "/videos/video1.mp4",
    tipo: "Riego",
    title:
      "Instalación de sistema de riego automático por aspersión",
  },
  {
    id: 2,
    src: "/videos/video2.mov",
    tipo: "Jardinería",
    title:
      "Poda de cerco vivo",
  },
  {
    id: 3,
    src: "/videos/video3.mp4",
    tipo: "Paisajismo",
    title:
      "Construcción de cantero con especies Petunias, dietes, gramineas, nandinas enana y formios + chips decorativos",
  },
  
  
  {
    id: 4,
    src: "/videos/video4.mp4",
    tipo: "Paisajismo",
    title:
      "Instalación de sistemas de riego automáticos por aspersión y por goteo, plantación de césped grama bahiana + cantero con oleas y chips + piedras dolomitas",
  },
  {
    id: 5,
    src: "/videos/video5.mp4",
    tipo: "Paisajismo",
    title:
      "Plantación de césped grama bahiana, cantero con formios y lavandas + orejas de elefante",
  },
  {
    id: 6,
    src: "/videos/video6.mp4",
    tipo: "Riego",
    title:
      "Instalación de sistema de riego automático por aspersión",
  },
    {
    id: 7,
    src: "/videos/video7.mp4",
    tipo: "Riego",
    title:
      "Instalación de sensor de lluvia para un sistema de riego",
  },
  {
    id: 8,
    src: "/videos/video8.mp4",
    tipo: "Riego",
    title:
      "Instalación de aspersores para un sistema de riego",
  },
{
    id: 9,
    src: "/videos/video9.mp4",
    tipo: "Riego",
    title:
      "Incorporación de aspersor para un sistema de riego",
  },
  {
    id: 10,
    src: "/videos/video10.mp4",
    tipo: "Paisajismo",
    title:
      "Creación de cantero con lavandas y dietes bicolor con chips",
  },
  {
    id: 11,
    src: "/videos/video11.mp4",
    tipo: "Riego",
    title:
      "Automatización de un sistema de riego manual",
  },
  {
    id: 12,
    src: "/videos/video12.mp4",
    tipo: "Riego",
    title:
      "Mantenimiento de rotor aspersor dañado",
  },

];

/* =======================
   Colores por tipo
======================= */

const typeStyles: Record<
  ReelType,
  { bg: string; text: string; dot: string }
> = {
  Riego: {
    bg: "bg-sky-100",
    text: "text-sky-700",
    dot: "bg-sky-600",
  },
  Paisajismo: {
    bg: "bg-violet-100",
    text: "text-violet-700",
    dot: "bg-violet-600",
  },
  Jardinería: {
    bg: "bg-[#e6f2ea]",
    text: "text-[#2f6f4e]",
    dot: "bg-[#2f6f4e]",
  },
};

/* =======================
   Componente
======================= */

export default function VideoReelsSection() {
  const itemsPerPage = 3;
  const maxIndex = Math.ceil(reels.length / itemsPerPage) - 1;
  const [page, setPage] = useState(0);

  const next = () => setPage((p) => Math.min(p + 1, maxIndex));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section className="py-24 bg-[#f5f7f4]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Carrusel */}
        <div className="relative">

          {/* Flecha izquierda */}
          <button
            onClick={prev}
            disabled={page === 0}
            className="
              absolute -left-6 top-1/2 z-10 -translate-y-1/2
              h-12 w-12 rounded-full
              bg-[#2f6f4e] text-white text-2xl font-semibold
              shadow-lg transition-all duration-300
              hover:bg-[#245a3f]
              disabled:bg-[#2f6f4e]/40
              disabled:cursor-not-allowed
            "
          >
            ‹
          </button>

          {/* Flecha derecha */}
          <button
            onClick={next}
            disabled={page === maxIndex}
            className="
              absolute -right-6 top-1/2 z-10 -translate-y-1/2
              h-12 w-12 rounded-full
              bg-[#2f6f4e] text-white text-2xl font-semibold
              shadow-lg transition-all duration-300
              hover:bg-[#245a3f]
              disabled:bg-[#2f6f4e]/40
              disabled:cursor-not-allowed
            "
          >
            ›
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500"
              style={{
                transform: `translateX(-${page * 100}%)`,
              }}
            >
              {reels.map((reel) => {
                const style = typeStyles[reel.tipo];

                return (
                  <div
                    key={reel.id}
                    className="min-w-full sm:min-w-[42%] md:min-w-[31%]"
                  >
                    <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl bg-black">

                      {/* Badge tipo */}
                      <span
                        className={`
                          absolute top-4 left-4 z-10
                          inline-flex items-center gap-2
                          px-4 py-1.5 rounded-full
                          text-xs font-semibold
                          ${style.bg} ${style.text}
                        `}
                      >
                        <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                        {reel.tipo}
                      </span>

                      {/* Video */}
                      <video
                        src={reel.src}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e1f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-white text-sm font-medium whitespace-pre-line leading-relaxed">
                            {reel.title}
                          </p>
                        </div>
                      </div>

                      {/* Borde */}
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
