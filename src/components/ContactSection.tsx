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
      .catch(() => {
        alert("Error al enviar la solicitud ❌");
      });
  };

  return (
    <section id="contact" className="py-8 md:py-10 bg-gradient-hero">

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-lg mx-auto mb-6">

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white mb-2">
            <MessageCircle className="h-4 w-4 mr-2" />
            <span className="text-xs md:text-sm font-medium">Contacto</span>
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 leading-tight">
            Transformá tu espacio con Riegomax
          </h2>

          <p className="text-sm md:text-base text-white/90">
            Cotización personalizada sin costo en menos de 24 horas.
          </p>

        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* FORM */}
          <Card className="border-0 shadow-md bg-white/95">

            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                Solicitar Cotización
              </CardTitle>
              <p className="text-xs md:text-sm text-muted-foreground">
                Completá el formulario y te contactamos.
              </p>
            </CardHeader>

            <CardContent className="pt-2">

              <form onSubmit={handleSubmit} className="space-y-3">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                  />
                  <Input
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                  />
                </div>

                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />

                <Select onValueChange={(v) => handleChange("servicio", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jardineria">Jardinería</SelectItem>
                    <SelectItem value="paisajismo">Paisajismo</SelectItem>
                    <SelectItem value="riego">Riego</SelectItem>
                    <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Ubicación"
                  value={formData.ubicacion}
                  onChange={(e) => handleChange("ubicacion", e.target.value)}
                />

                <Textarea
                  placeholder="Contanos tu proyecto"
                  rows={3}
                  value={formData.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                />

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Solicitud
                </Button>

              </form>

            </CardContent>

          </Card>

          {/* INFO */}
          <div className="space-y-3">

            <Card className="border-0 bg-white/95">
              <CardContent className="p-3 flex gap-3 items-center">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <a href="https://wa.me/5491159247748" className="text-xs text-secondary">
                    +54 9 11 59247748
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/95">
              <CardContent className="p-3 flex gap-3 items-center">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-xs">sistemasderiegomax@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/95">
              <CardContent className="p-3 flex gap-3 items-center">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-sm">Zona</p>
                  <p className="text-xs">Zona oeste</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/95">
              <CardContent className="p-3 flex gap-3 items-center">
                <Clock className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold text-sm">Horarios</p>
                  <p className="text-xs">Lun a Sáb 8:00 - 18:00</p>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;