import { Droplets, Leaf, Wrench, ShoppingCart, Camera, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Droplets,
      title: "Sistemas de Riego",
      description: "Instalación y diseño de sistemas de riego automático eficientes y duraderos para jardines y espacios verdes.",
      features: ["Riego por aspersión", "Riego por goteo", "Programación automática", "Sensores de humedad"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Leaf,
      title: "Jardinería General",
      description: "Servicios completos de jardinería para mantener tus espacios verdes siempre hermosos y saludables.",
      features: ["Poda de plantas", "Fertilización", "Control de plagas", "Plantación"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Camera,
      title: "Paisajismo",
      description: "Diseño y creación de espacios únicos que transforman tu jardín en un verdadero oasis natural.",
      features: ["Diseño 3D", "Selección de plantas", "Iluminación", "Elementos decorativos"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      description: "Mantenimiento preventivo y correctivo de sistemas de riego y espacios verdes para garantizar su durabilidad.",
      features: ["Revisión técnica", "Reparaciones", "Limpieza de sistemas", "Actualización de equipos"],
      color: "text-nature-green",
      bgColor: "bg-nature-light-green"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
            <Scissors className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluciones verdes para cada necesidad
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ofrecemos servicios integrales de jardinería, paisajismo y sistemas de riego 
            con la más alta calidad y profesionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
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

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para transformar tu espacio?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contactanos hoy mismo y recibe una cotización personalizada sin compromiso. 
            Nuestro equipo de expertos está listo para hacer realidad tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-nature font-semibold px-8"
            >
              Solicitar Cotización Gratis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8"
            >
              Ver Catálogo de Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;