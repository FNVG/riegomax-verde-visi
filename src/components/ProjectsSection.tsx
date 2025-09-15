import { useState } from "react";
import { Filter, ExternalLink, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import servicesImage from "@/assets/services-collage.jpg";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Jardinería", "Paisajismo", "Riego"];

  const projects = [
    {
      id: 1,
      title: "Jardín Moderno Residencial",
      category: "Paisajismo",
      location: "San Isidro",
      date: "2024",
      description: "Diseño contemporáneo con plantas nativas y sistema de riego eficiente.",
      image: servicesImage,
      featured: true
    },
    {
      id: 2,
      title: "Sistema de Riego Comercial",
      category: "Riego",
      location: "Nordelta",
      date: "2024",
      description: "Instalación de sistema de riego por aspersión para complejo empresarial.",
      image: servicesImage,
      featured: false
    },
    {
      id: 3,
      title: "Mantenimiento Integral",
      category: "Jardinería",
      location: "Pilar",
      date: "2024",
      description: "Programa de mantenimiento mensual para jardines residenciales.",
      image: servicesImage,
      featured: false
    },
    {
      id: 4,
      title: "Paisajismo Ecológico",
      category: "Paisajismo",
      location: "Tigre",
      date: "2023",
      description: "Diseño sustentable con plantas autóctonas y bajo consumo de agua.",
      image: servicesImage,
      featured: true
    },
    {
      id: 5,
      title: "Riego Inteligente",
      category: "Riego",
      location: "Escobar",
      date: "2023",
      description: "Sistema automatizado con sensores de humedad y programación remota.",
      image: servicesImage,
      featured: false
    },
    {
      id: 6,
      title: "Jardín Vertical",
      category: "Jardinería",
      location: "CABA",
      date: "2023",
      description: "Jardín vertical para espacio reducido con sistema de riego integrado.",
      image: servicesImage,
      featured: true
    }
  ];

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Filter className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Nuestros Proyectos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Inspirate con nuestros trabajos
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cada proyecto es único y refleja nuestro compromiso con la excelencia y la innovación en jardinería.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 ${
                activeFilter === filter 
                  ? "bg-primary hover:bg-primary-hover" 
                  : "hover:bg-primary/10"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden border-0 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'Paisajismo' ? 'bg-secondary text-secondary-foreground' :
                      project.category === 'Riego' ? 'bg-accent text-accent-foreground' :
                      'bg-primary text-primary-foreground'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        Destacado
                      </span>
                    </div>
                  )}

                  {/* Hover Content */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      className="w-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                    >
                      Ver Proyecto Completo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More / CTA */}
        <div className="text-center space-y-6">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8"
          >
            Ver Más Proyectos
          </Button>
          
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tenés un proyecto en mente?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contanos tu idea y nosotros la hacemos realidad. Cada jardín es único, 
              como único es cada cliente.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
              Quiero un proyecto así en mi espacio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;