import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import antes_1 from "@/assets/antes_despues/antes 3.jpeg";
import despues_1 from "@/assets/antes_despues/1 despues.jpeg";
import antes_2 from "@/assets/antes_despues/5 antes.jpeg";
import despues_2 from "@/assets/antes_despues/5 después.jpeg";
import antes_3 from "@/assets/antes_despues/2 antes.jpeg";
import despues_3 from "@/assets/antes_despues/2 después.jpeg";

const BeforeAfterSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: "1",
      title: "Transformación de fondo de jardín",
      location: "Zona oeste",
      service: "Jardinería",
      description:
        "Corte de césped, limpieza general y recuperación de un espacio verde descuidado.",
      beforeImage: antes_2,
      afterImage: despues_2,
      altBefore: "Jardín antes del mantenimiento",
      altAfter: "Jardín después del mantenimiento"
    },
    {
      id: "2",
      title: "Recuperación de espacio verde",
      location: "Zona oeste",
      service: "Jardinería",
      description:
        "Desmalezado y limpieza de terreno para convertirlo en un jardín ordenado.",
      beforeImage: antes_1,
      afterImage: despues_1,
      altBefore: "Terreno con maleza antes del trabajo",
      altAfter: "Espacio verde ordenado después del trabajo"
    },
    {
      id: "3",
      title: "Mantenimiento de frente y vereda",
      location: "Zona oeste",
      service: "Jardinería",
      description:
        "Corte de césped y limpieza de entrada principal.",
      beforeImage: antes_3,
      afterImage: despues_3,
      altBefore: "Frente de vivienda antes del mantenimiento",
      altAfter: "Frente de vivienda después del mantenimiento"
    }
  ];

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + projects.length) % projects.length);

  const currentProject = projects[currentSlide];

  return (
    <section id="before-after" className="py-12 md:py-14 bg-background">

      <div className="container mx-auto px-4">

        {/* HEADER más compacto */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-4">
            <Eye className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Antes y después</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Transformaciones reales de jardines
          </h2>

          <p className="text-base md:text-lg text-muted-foreground">
            Cambios reales en espacios verdes mediante trabajos de jardinería y mantenimiento.
          </p>

        </div>

        {/* CARD principal más compacta */}
        <div className="max-w-xl mx-auto mb-8">

          <Card className="overflow-hidden border-0 shadow-md">

            <CardContent className="p-0">

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* IMÁGENES más compactas */}
                <div className="relative">

                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={currentProject.beforeImage}
                      alt={currentProject.altBefore}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-destructive text-white px-2 py-0.5 rounded text-xs">
                      ANTES
                    </div>
                  </div>

                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={currentProject.afterImage}
                      alt={currentProject.altAfter}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                      DESPUÉS
                    </div>
                  </div>

                </div>

                {/* INFO más compacta */}
                <div className="p-5 flex flex-col justify-center">

                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs mb-3 w-fit">
                    {currentProject.service}
                  </span>

                  <h3 className="text-xl font-semibold mb-2">
                    {currentProject.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>

                </div>

              </div>

            </CardContent>

          </Card>

        </div>

        {/* NAV más compacto */}
        <div className="flex items-center justify-center gap-3 mb-6">

          <Button variant="outline" size="sm" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-1.5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentSlide ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>

        </div>

        {/* CTA más compacto */}
        <div className="text-center">
          <Button size="default" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
            Quiero transformar mi jardín
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

      </div>

    </section>
  );
};

export default BeforeAfterSection;