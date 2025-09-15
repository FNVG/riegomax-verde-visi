import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Sistemas de Riego",
    "Jardinería General",
    "Paisajismo",
    "Mantenimiento",
    "Diseño de Jardines",
    "Consultoría"
  ];

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Riegomax Logo" 
                className="h-12 w-12 rounded-lg object-contain bg-white/10 p-1"
              />
              <div>
                <h3 className="text-xl font-bold">Riegomax</h3>
                <p className="text-primary-foreground/80 text-sm">Sistemas de Riego & Jardinería</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Especialistas en transformar espacios verdes con sistemas de riego eficientes, 
              jardinería profesional y paisajismo de calidad.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#store"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Tienda Online
                </a>
              </li>
              <li>
                <a 
                  href="#blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Blog & Consejos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 text-sm">Zona de Trabajo:</p>
                  <p className="text-primary-foreground/80 text-sm">CABA, Zona Norte, Tigre, Pilar, Escobar</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 text-sm">WhatsApp</p>
                  <p className="text-primary-foreground/80 text-sm">+54 9 11 XXXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 text-sm">Email</p>
                  <p className="text-primary-foreground/80 text-sm">info@riegomax.com.ar</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <Button 
                className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground"
              >
                Cotización Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Riegomax. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Trabajá con Nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;