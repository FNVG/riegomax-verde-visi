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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <section id="before-after" className="py-20 bg-background">

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Eye className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Antes y después</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transformaciones reales de jardines
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Cambios reales en espacios verdes mediante trabajos de jardinería y mantenimiento.
          </p>

        </div>

        {/* CARD PRINCIPAL */}
        <div className="max-w-2xl mx-auto mb-12">

          <Card className="overflow-hidden border-0 shadow-elegant">

            <CardContent className="p-0">

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* COLUMNA IZQUIERDA */}
                <div className="relative">

                  {/* BEFORE arriba */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={currentProject.beforeImage}
                      alt={currentProject.altBefore}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-medium">
                      ANTES
                    </div>
                  </div>

                  {/* AFTER abajo */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={currentProject.afterImage}
                      alt={currentProject.altAfter}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      DESPUÉS
                    </div>
                  </div>

                </div>

                {/* INFO */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">

                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                    {currentProject.service}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    {currentProject.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>

                </div>

              </div>

            </CardContent>

          </Card>

        </div>

        {/* NAV */}
        <div className="flex items-center justify-center space-x-4 mb-8">

          <Button variant="outline" size="sm" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>

        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-nature">
            Quiero transformar mi jardín
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

      </div>

    </section>
  );
};

export default BeforeAfterSection;