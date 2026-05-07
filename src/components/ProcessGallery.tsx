import { useState } from "react";
import { X } from "lucide-react";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const images: GalleryImage[] = [
  { src: process1, alt: "Instalación de tuberías", caption: "Instalación del sistema de riego subterráneo" },
  { src: process2, alt: "Colocación de césped", caption: "Preparación y colocación del césped" },
  { src: process3, alt: "Sistema de aspersores", caption: "Montaje de cabezales de riego" },
];

const ProcessGallery = () => {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-secondary text-sm font-medium uppercase tracking-wider">
            Documentación
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Galería del Proceso
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Registro visual de las etapas intermedias del proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setLightboxImage(image)}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-card animate-fade-in focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-foreground font-medium">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              <p className="text-center text-foreground mt-4 font-medium">
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessGallery;
