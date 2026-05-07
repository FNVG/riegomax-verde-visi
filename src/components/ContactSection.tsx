import { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    ubicacion: "",
    mensaje: ""
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_nn0qe9r",
      "template_mbv4tr6",
      formData,
      "suHJdGwLGie2EOBOp"
    )
      .then(() => {
        alert("Solicitud enviada correctamente ✅");
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          servicio: "",
          ubicacion: "",
          mensaje: ""
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Error al enviar la solicitud ❌");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white mb-6 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Contacto</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transformá tu espacio con Riegomax
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Estamos listos para hacer realidad tu proyecto. Contactanos y recibí una cotización personalizada sin costo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-elegant bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitar Cotización Gratuita
              </CardTitle>
              <p className="text-muted-foreground">
                Completá el formulario y nos comunicaremos contigo en menos de 24 horas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre Completo *
                    </label>
                    <Input
                      placeholder="Tu nombre"
                      className="border-border"
                      value={formData.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Teléfono *
                    </label>
                    <Input placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={(e) => handleChange("telefono", e.target.value)}
                      className="border-border" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input placeholder="tu@email.com" type="email" className="border-border"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de Servicio *
                  </label>
                  <Select onValueChange={(value) => handleChange("servicio", value)}>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Seleccioná el servicio que necesitás" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jardineria">Jardinería</SelectItem>
                      <SelectItem value="paisajismo">Paisajismo</SelectItem>
                      <SelectItem value="riego">Sistema de Riego</SelectItem>
                      <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                      <SelectItem value="multiple">Múltiples Servicios</SelectItem>
                      <SelectItem value="consulta">Consulta General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Ubicación del Proyecto
                  </label>
                  <Input
                    value={formData.ubicacion}
                    onChange={(e) => handleChange("ubicacion", e.target.value)}
                    placeholder="Ciudad o zona" className="border-border" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Contanos sobre tu proyecto
                  </label>
                  <Textarea
                    placeholder="Describí tu idea, el tamaño del espacio, tus preferencias, presupuesto estimado, etc."
                    rows={4}
                    className="border-border"
                    value={formData.mensaje}
                    onChange={(e) => handleChange("mensaje", e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-primary-hover" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitud
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptás que nos comuniquemos contigo para brindarte información sobre nuestros servicios.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">

              {/* WhatsApp Card */}
              <Card className="border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">Contacto directo e inmediato</p>
                      <a
                        href="https://wa.me/5491159247748?text=Hola.%20Estoy%20interesado%20en%20sus%20servicios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-secondary border border-secondary hover:bg-secondary/10 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        +54 9 11 59247748
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">Envianos tu consulta</p>
                      <p className="text-primary font-medium">sistemasderiegomax@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zone Card */}
              <Card className="border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Zona de Trabajo</h3>
                      <p className="text-muted-foreground mb-2">Cubrimos toda la zona oeste</p>
                      <p className="text-foreground">Ituzaingó, Merlo, Moreno, General Rodriguez, Luján </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horarios Card */}
              <Card className="border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-nature-green/10 rounded-xl">
                      <Clock className="h-6 w-6 text-nature-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horarios</h3>
                      <p className="text-muted-foreground mb-2">Lunes a Sábados: 8:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
