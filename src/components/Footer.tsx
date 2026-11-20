import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import { servicios } from "@/data/servicios";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Cada servicio enlaza a su propia página (src/data/servicios.ts)


  const quickLinks = [
    { name: "Inicio", href: "/#home" },
    { name: "Nosotros", href: "/#about" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/#contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 md:py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Company Info */}
          <div className="space-y-4">

            <div className="flex flex-col items-start space-y-3">

              <img
                src={logo}
                alt="Riegomax Logo"
                loading="lazy"
                decoding="async"
                width={256}
                height={171}
                className="w-56 rounded-xl bg-white p-2 object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold">Riegomax</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Sistemas de Riego & Jardinería
                </p>
              </div>

            </div>

            <p className="text-primary-foreground/85 text-sm leading-relaxed">
              Especialistas en transformar espacios verdes con sistemas de riego y jardinería
            </p>

            <div className="flex space-x-3">
               <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
    <a href="https://www.instagram.com/sistemaderiegomax/?hl=es-la" target="_blank" rel="noopener noreferrer">
      <Instagram className="h-5 w-5" />
    </a>
  </Button>

  <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
    <a href="https://www.facebook.com/profile.php?id=61580732585868" target="_blank" rel="noopener noreferrer">
      <Facebook className="h-5 w-5" />
    </a>
  </Button>

  <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@riegomax.com.ar">
      <Mail className="h-5 w-5" />
    </a>
  </Button> 
            </div>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-4">Nuestros Servicios</h4>

            <ul className="space-y-0.5">
              {servicios.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/servicios/${s.slug}`}
                    className="inline-block py-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Enlaces Rápidos</h4>

            <ul className="space-y-0.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block py-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contacto</h4>

            <div className="space-y-3">

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/70 mt-0.5" />
                <div>
                  <p className="text-sm">Zona Oeste, provincia de Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/70" />
                <a href="tel:+5491159247748" className="inline-block py-1.5 text-sm hover:underline">
                  +54 9 11 5924-7748
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/70" />
                <a href="mailto:contacto@riegomax.com.ar" className="inline-block py-1.5 text-sm hover:underline">
                  contacto@riegomax.com.ar
                </a>
              </div>

            </div>

            {/* CTA */}
           {
             /*
                <div className="mt-5 pt-5 border-t border-primary-foreground/20">
              <Button className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                Cotización Gratuita
              </Button>
            </div>
 
             */

           }
            
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">

        <div className="container mx-auto px-4 py-4">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">

            <div className="text-primary-foreground/70 text-xs">
              © {currentYear} Riegomax. Todos los derechos reservados.
            </div>

            <div className="flex gap-4 text-xs">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                Privacidad
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                Términos
              </a>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;