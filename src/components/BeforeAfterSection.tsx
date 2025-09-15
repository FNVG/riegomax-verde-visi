import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import beforeAfterImage from "@/assets/before-after.jpg";

const BeforeAfterSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Transformación Jardín Residencial",
      location: "Zona Norte",
      service: "Paisajismo + Riego",
      description: "De un espacio descuidado a un jardín moderno con sistema de riego automatizado.",
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      testimonial: "El resultado superó todas nuestras expectativas. Ahora tenemos el jardín de nuestros sueños."
    },
    {
      id: 2,
      title: "Jardín Corporativo",
      location: "Centro Empresarial",
      service: "Paisajismo",
      description: "Diseño de espacios verdes para oficinas con bajo mantenimiento y máximo impacto visual.",
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      testimonial: "Un trabajo impecable que mejoró completamente nuestro ambiente laboral."
    },
    {
      id: 3,
      title: "Sistema de Riego Inteligente",
      location: "Country Club",
      service: "Riego",
      description: "Instalación de sistema de riego por aspersión con programación inteligente.",
      beforeImage: beforeAfterImage,
      afterImage: beforeAfterImage,
      testimonial: "Ahorro del 40% en consumo de agua y jardines siempre perfectos."
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Eye className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Antes & Después</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            De un espacio cualquiera, a tu 
            <span className="bg-gradient-nature bg-clip-text text-transparent"> espacio soñado</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mirá cómo transformamos espacios con nuestros servicios de jardinería, 
            paisajismo y sistemas de riego.
          </p>
        </div>

        {/* Main Before/After Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden border-0 shadow-elegant">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Before/After Images */}
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={currentProject.beforeImage}
                      alt={`Antes - ${currentProject.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      ANTES
                    </div>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={currentProject.afterImage}
                      alt={`Después - ${currentProject.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      DESPUÉS
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.service}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    {currentProject.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    📍 {currentProject.location}
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>
                  
                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground mb-8">
                    "{currentProject.testimonial}"
                  </blockquote>
                  
                  <Button className="w-fit bg-gradient-primary hover:bg-primary-hover">
                    Ver Proyecto Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="p-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="p-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-nature">
            Quiero transformar mi espacio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;