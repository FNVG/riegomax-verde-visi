import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Antes & Después", href: "#before-after" },
    { name: "Proyectos", href: "#projects" },
    { name: "Tienda", href: "#store" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Riegomax Logo" 
              className="h-10 w-10 rounded-lg object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Riegomax</h1>
              <p className="text-xs text-muted-foreground">Sistemas de Riego & Jardinería</p>
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

          {/* Quick Contact & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </div>
            <Button variant="default" size="sm" className="bg-gradient-primary hover:bg-primary-hover">
              Cotizar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-border">
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