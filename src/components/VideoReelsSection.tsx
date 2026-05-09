import { useState } from "react";

type ReelType = "Riego" | "Paisajismo" | "Jardinería";

type Reel = {
  id: number;
  src: string;
  title: string;
  tipo: ReelType;
};

const reels: Reel[] = [
  {
    id: 1,
    src: "/videos/video1.mp4",
    tipo: "Riego",
    title: "Instalación de sistema de riego automático por aspersión",
  },
  {
    id: 2,
    src: "/videos/video2.mov",
    tipo: "Jardinería",
    title: "Poda de cerco vivo",
  },
  {
    id: 3,
    src: "/videos/video3.mp4",
    tipo: "Paisajismo",
    title: "Construcción de cantero decorativo",
  },
  {
    id: 4,
    src: "/videos/video4.mp4",
    tipo: "Paisajismo",
    title: "Instalación de riego y césped",
  },
  {
    id: 5,
    src: "/videos/video5.mp4",
    tipo: "Paisajismo",
    title: "Plantación de grama bahiana",
  },
  {
    id: 6,
    src: "/videos/video6.mp4",
    tipo: "Riego",
    title: "Instalación de aspersores",
  },
  {
    id: 7,
    src: "/videos/video7.mp4",
    tipo: "Riego",
    title: "Sensor de lluvia",
  },
  {
    id: 8,
    src: "/videos/video8.mp4",
    tipo: "Riego",
    title: "Sistema de riego por aspersión",
  },
  {
    id: 9,
    src: "/videos/video9.mp4",
    tipo: "Riego",
    title: "Incorporación de aspersor",
  },
];

const styles = {
  Riego: "bg-sky-500/90",
  Paisajismo: "bg-violet-500/90",
  Jardinería: "bg-emerald-600/90",
};

const arrow =
  "absolute top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white/80 backdrop-blur text-black text-2xl shadow-xl transition hover:scale-110 disabled:opacity-30";

export default function VideoReelsSection() {
  const itemsPerPage = 3;

  const [page, setPage] = useState(0);

  const maxPage = Math.ceil(reels.length / itemsPerPage) - 1;

  return (
    <section className="bg-[#f5f7f4] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Carrusel */}
        <div className="relative">

          {/* Flecha izquierda */}
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className={`${arrow} -left-5`}
          >
            ‹
          </button>

          {/* Flecha derecha */}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
            disabled={page === maxPage}
            className={`${arrow} -right-5`}
          >
            ›
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${page * 100}%)`,
              }}
            >
              {Array.from({ length: maxPage + 1 }).map((_, index) => (
                <div
                  key={index}
                  className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {reels
                    .slice(
                      index * itemsPerPage,
                      index * itemsPerPage + itemsPerPage
                    )
                    .map((reel) => (
                      <article
                        key={reel.id}
                        className="
                          relative aspect-[4/5]
                          rounded-[2rem]
                          overflow-hidden
                          group
                          shadow-2xl
                          bg-black
                        "
                      >
                        {/* Video */}
                        <video
                          src={reel.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="
                            h-full w-full object-cover
                            transition duration-700
                            group-hover:scale-110
                          "
                        />

                        {/* Overlay */}
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/80 via-black/10 to-transparent
                          "
                        />

                        {/* Badge */}
                        <span
                          className={`
                            absolute top-5 left-5 z-10
                            px-4 py-1.5 rounded-full
                            text-white text-xs font-semibold
                            backdrop-blur-md
                            ${styles[reel.tipo]}
                          `}
                        >
                          {reel.tipo}
                        </span>

                        {/* Texto */}
                        <div className="absolute bottom-0 p-6 z-10">
                          <h3 className="text-white text-lg font-semibold leading-snug">
                            {reel.title}
                          </h3>
                        </div>

                        {/* Borde */}
                        <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />
                      </article>
                    ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}