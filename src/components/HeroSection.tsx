import { ArrowRight, Droplets, Leaf, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garden.jpg";

const HeroSection = () => {
    const quickLinks = [
    { name: "Solicitar Presupuesto Gratis", href: "#contact" },
    { name: "Ver Nuestros Trabajos", href: "#projects" }
  ];
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jardín profesional con sistema de riego"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content
      
      
      */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl">
            {/* Content
              <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium backdrop-blur-sm">
              <Droplets className="h-4 w-4 mr-2" />
              Especialistas en Sistemas de Riego
            </span>
          </div>

      
           */}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tu jardín,
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> nuestro compromiso</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Transformamos espacios con sistemas de riego eficientes, jardinería y paisajismo que perduran en el tiempo.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-2 text-white/90">
              <div className="p-2 bg-secondary/20 rounded-full backdrop-blur-sm">
                <Droplets className="h-5 w-5" />
              </div>
              <span className="font-medium">Sistemas de Riego</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <div className="p-2 bg-secondary/20 rounded-full backdrop-blur-sm">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-medium">Jardinería & Paisajismo</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <div className="p-2 bg-secondary/20 rounded-full backdrop-blur-sm">
                <Settings className="h-5 w-5" />
              </div>
              <span className="font-medium">Mantenimiento e instalación de bombas de agua</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={quickLinks[0].href}>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-nature font-semibold px-8"
              >
                {quickLinks[0].name}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href={quickLinks[1].href}>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm font-semibold px-8"
            >
              {quickLinks[1].name}
            </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center gap-8 text-white/80">

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;