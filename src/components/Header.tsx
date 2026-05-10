import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "#home" },

    { name: "Servicios", href: "#services" },
    { name: "Antes & Después", href: "#before-after" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* HEADER BAR */}
        <div className="flex items-center justify-between h-20 md:h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Riegomax Logo"
              className="h-11 w-11 rounded-lg object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary leading-tight">
                Riegomax
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Sistemas de Riego & Jardinería
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 hover:bg-primary/5 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://wa.me/5491159247748?text=Hola.%20Estoy%20interesado%20en%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            {
              /*
                <Button
              variant="default"
              size="sm"
              className="bg-gradient-primary hover:bg-primary-hover"
            >
              Cotizar Ahora
            </Button>
              */

            }
            
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-card border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="https://wa.me/5491159247748?text=Hola.%20Estoy%20interesado%20en%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>

                <Button
                  variant="default"
                  className="w-full bg-gradient-primary hover:bg-primary-hover"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;