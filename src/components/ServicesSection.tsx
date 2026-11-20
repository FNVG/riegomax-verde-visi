import { Droplets, Leaf, Wrench, Camera, Scissors, Waves, Lightbulb, Sprout, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { servicios } from "@/data/servicios";

const ServicesSection = () => {
  // Textos en src/data/servicios.ts; acá solo el ícono y el color de cada tarjeta
  const estilos: Record<string, { icon: typeof Droplets; color: string; bgColor: string }> = {
    "sistemas-de-riego": { icon: Droplets, color: "text-accent", bgColor: "bg-accent/10" },
    jardineria: { icon: Leaf, color: "text-secondary", bgColor: "bg-secondary/10" },
    paisajismo: { icon: Camera, color: "text-primary", bgColor: "bg-primary/10" },
    mantenimiento: { icon: Wrench, color: "text-nature-green", bgColor: "bg-nature-light-green" },
    "bombas-de-agua": { icon: Waves, color: "text-nature-green", bgColor: "bg-nature-light-green" },
    "tableros-electricos-de-riego": { icon: Zap, color: "text-accent", bgColor: "bg-accent/10" },
    "cesped-sintetico": { icon: Sprout, color: "text-secondary", bgColor: "bg-secondary/10" },
    "iluminacion-de-jardines": { icon: Lightbulb, color: "text-primary", bgColor: "bg-primary/10" },
  };

  const services = servicios.map((s) => ({
    slug: s.slug,
    title: s.titulo,
    description: s.resumen,
    features: s.destacados,
    ...(estilos[s.slug] ?? { icon: Leaf, color: "text-primary", bgColor: "bg-primary/10" }),
  }));

  return (
    <section id="services" className="py-10 md:py-12 bg-gradient-earth">

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8">

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-3">
            <Scissors className="h-4 w-4 mr-2" />
            <span className="text-sm md:text-sm font-medium">
              Nuestros Servicios
            </span>
          </div>

          <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-2">
            Servicios de jardinería, riego y paisajismo
          </h2>

          <p className="text-lg md:text-base text-muted-foreground leading-relaxed">
            Soluciones profesionales en sistemas de riego, jardinería, paisajismo, bombas de agua, tableros eléctricos de riego, césped sintético e iluminación de jardines.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {services.map((service) => (
            // Toda la tarjeta es un enlace a la página del servicio
            <Link key={service.slug} to={`/servicios/${service.slug}`} className="block">
            <Card
              className="group h-full transition-all duration-300 hover:shadow-md border-0 bg-card/50"
            >

              <CardHeader className="pb-2">

                <div className={`w-10 h-10 mb-2 rounded-xl ${service.bgColor} flex items-center justify-center`}>
                  <service.icon className={`h-5 w-5 ${service.color}`} />
                </div>

                <CardTitle className="text-lg md:text-lg font-semibold group-hover:text-primary">
                  {service.title}
                </CardTitle>

              </CardHeader>

              <CardContent className="space-y-2">

                <CardDescription className="text-base md:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>

                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-base md:text-sm text-muted-foreground">
                      <span className="w-1 h-1 mt-2 mr-2 bg-secondary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary">
                  Ver servicio
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>

              </CardContent>

            </Card>
            </Link>
          ))}

        </div>

        <div className="mt-8 text-center">
          <Link
            to="/servicios"
            className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-primary hover:underline"
          >
            Ver todos los servicios
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;