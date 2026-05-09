import { ArrowRight, Droplets, Leaf, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garden.jpg";

const HeroSection = () => {
  const quickLinks = [
    { name: "Solicitar Presupuesto Gratis", href: "#contact" },
    { name: "Ver Nuestros Trabajos", href: "#projects" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[75vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jardín profesional con sistema de riego"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10 py-10">
        <div className="max-w-3xl">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Tu jardín,
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {" "}nuestro compromiso
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">
            Transformamos espacios con sistemas de riego eficientes, jardinería y paisajismo que perduran en el tiempo.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Droplets className="h-4 w-4" />
              <span>Sistemas de Riego</span>
            </div>

            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Leaf className="h-4 w-4" />
              <span>Jardinería & Paisajismo</span>
            </div>

            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Settings className="h-4 w-4" />
              <span>Mantenimiento e instalación de bombas</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={quickLinks[0].href}>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-6"
              >
                {quickLinks[0].name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href={quickLinks[1].href}>
              <Button
                size="lg"
                variant="outline"
                className="border border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm font-semibold px-6"
              >
                {quickLinks[1].name}
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator (más chico) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-70">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;