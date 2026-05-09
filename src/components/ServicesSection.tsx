import { Droplets, Leaf, Wrench, Camera, Scissors, Waves } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Droplets,
      title: "Sistemas de riego",
      description: "Diseño e instalación de sistemas de riego automáticos eficientes para jardines y espacios verdes, optimizando el uso del agua.",
      features: ["Riego por aspersión", "Riego por goteo", "Programación automática", "Sensores de lluvia", "Módulo Wifi"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Leaf,
      title: "Jardinería",
      description: "Servicios completos de jardinería para mantener espacios verdes saludables, prolijos y en óptimas condiciones durante todo el año.",
      features: ["Corte de césped", "Poda de plantas, arbustos y cercos vivos", "Perfilado y bordes", "Plantación y trasplantes", "Fertilización"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Camera,
      title: "Paisajismo",
      description: "Diseño y creación de espacios exteriores únicos que combinan estética, funcionalidad y armonía natural.",
      features: ["Diseño de jardines", "Selección de plantas", "Creación y renovación de canteros", "Nivelación de terreno", "Elementos decorativos"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Wrench,
      title: "Mantenimiento de jardines",
      description: "Mantenimiento preventivo y correctivo de jardines y espacios verdes para garantizar su cuidado y durabilidad.",
      features: ["Limpieza de terrenos", "Desmalezado", "Mantenimiento periódico"],
      color: "text-nature-green",
      bgColor: "bg-nature-light-green"
    },
    {
      icon: Waves,
      title: "Bombas de agua",
      description: "Instalación de bombas de agua presurizadoras, centrífugas y periféricas para mejorar la presión y distribución del agua.",
      features: ["Instalaciones domiciliarias", "Alimentación de tanques elevados", "Aumento de presión"],
      color: "text-nature-green",
      bgColor: "bg-nature-light-green"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-14 bg-gradient-earth">
      <div className="container mx-auto px-4">

        {/* Header más compacto (SIN tocar contenido) */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4">
            <Scissors className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Nuestros Servicios</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Servicios de jardinería, riego y paisajismo
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofrecemos soluciones profesionales en jardinería, sistemas de riego, paisajismo y bombas de agua para hogares y espacios verdes.
          </p>

        </div>

        {/* Grid más compacto (clave del cambio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-md border-0 bg-card/50"
            >

              <CardHeader className="pb-3">

                <div className={`w-12 h-12 mb-3 rounded-xl ${service.bgColor} flex items-center justify-center`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>

                <CardTitle className="text-lg font-semibold">
                  {service.title}
                </CardTitle>

              </CardHeader>

              <CardContent className="space-y-3">

                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>

                <ul className="space-y-1.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 mt-2 mr-2 bg-secondary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </CardContent>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;