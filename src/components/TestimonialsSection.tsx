import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "San Isidro",
      project: "Paisajismo Residencial",
      rating: 5,
      text: "El trabajo de Riegomax superó todas nuestras expectativas. Transformaron nuestro jardín en un verdadero oasis. El sistema de riego funciona perfecto y el mantenimiento es mínimo.",
      date: "Hace 2 meses"
    },
    {
      id: 2,
      name: "Carlos Martínez",
      location: "Nordelta",
      project: "Sistema de Riego",
      rating: 5,
      text: "Profesionalismo de primera. Instalaron un sistema de riego inteligente que redujo nuestro consumo de agua en un 40%. Recomiendo Riegomax sin dudas.",
      date: "Hace 1 mes"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      location: "Pilar",
      project: "Mantenimiento Integral",
      rating: 5,
      text: "Llevo 2 años con el servicio de mantenimiento y mi jardín nunca estuvo mejor. Son puntuales, prolijos y muy conocedores de su trabajo.",
      date: "Hace 3 semanas"
    },
    {
      id: 4,
      name: "Roberto Silva",
      location: "Tigre",
      project: "Jardinería Corporativa",
      rating: 5,
      text: "Contratamos Riegomax para nuestras oficinas y el resultado fue espectacular. Los espacios verdes mejoraron completamente el ambiente de trabajo.",
      date: "Hace 6 meses"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Star className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Testimonios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            La satisfacción de nuestros clientes 
            <span className="bg-gradient-nature bg-clip-text text-transparent"> nos inspira</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Descubrí lo que dicen quienes ya confiaron en nosotros para transformar sus espacios.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-elegant bg-gradient-to-br from-card via-card to-nature-light-green/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="text-lg font-bold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    📍 {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].project}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].date}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="p-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="p-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 border-0 ${
                index === currentTestimonial 
                  ? 'ring-2 ring-primary shadow-nature' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">⭐ Calificación promedio</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Clientes satisfechos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Nos recomiendan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;