import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary))_0%,transparent_50%)]" />
      </div>
    {/* 
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            ¿Te gustó este proyecto?
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforma tu espacio exterior
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contáctanos para una evaluación gratuita. Nuestro equipo de expertos diseñará 
            la solución perfecta para tu jardín.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-nature text-primary-foreground font-semibold rounded-xl shadow-glow hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Solicitar Presupuesto
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-muted text-foreground font-semibold rounded-xl border border-border hover:bg-muted/80 transition-colors"
            >
              Ver más proyectos
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
      </div>
    */}
      <div className="container mx-auto px-4 relative z-10">
        
      </div>
    </section>
  );
};

export default CTASection;
