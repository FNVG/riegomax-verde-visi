import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const HeaderProject = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Riegomax - Sistemas de Riego & Jardinería" 
            className="h-30 w-30 rounded-lg object-cover transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="font-display text-xl font-semibold text-foreground">Riegomax</span>
            <p className="text-xs text-muted-foreground">Sistemas de Riego & Jardinería</p>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Proyectos
          </Link>
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Servicios
          </Link>
          <Link 
            to="/" 
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderProject;
