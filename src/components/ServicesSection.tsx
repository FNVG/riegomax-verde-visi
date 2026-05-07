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
    <section id="services" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">

        {/* Header SEO equilibrado */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Scissors className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Nuestros Servicios</span>
          </div>

          {/* H2 natural (sin spam) */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Servicios de jardinería, riego y paisajismo
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Ofrecemos soluciones profesionales en jardinería, sistemas de riego, paisajismo y bombas de agua para hogares y espacios verdes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">

                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>

                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>

              </CardHeader>

              <CardContent className="space-y-4">

                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
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