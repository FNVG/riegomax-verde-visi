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
    <section id="contact" className="py-10 md:py-12 bg-gradient-hero">

      <div className="container mx-auto px-4">

        {/* HEADER más compacto */}
        <div className="text-center max-w-xl mx-auto mb-8">

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white mb-3">
            <MessageCircle className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Contacto</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Transformá tu espacio con Riegomax
          </h2>

          <p className="text-sm md:text-lg text-white/90">
            Cotización personalizada sin costo en menos de 24 horas.
          </p>

        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* FORM */}
          <Card className="border-0 shadow-md bg-white/95">

            <CardHeader className="pb-3">
              <CardTitle className="text-xl">
                Solicitar Cotización
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Completá el formulario y te contactamos.
              </p>
            </CardHeader>

            <CardContent>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
          <div className="space-y-4">

            {/* WhatsApp */}
            <Card className="border-0 bg-white/95">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/5491159247748"
                      className="text-sm text-secondary"
                    >
                      +54 9 11 59247748
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-0 bg-white/95">
              <CardContent className="p-4 flex gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm">sistemasderiegomax@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Zona */}
            <Card className="border-0 bg-white/95">
              <CardContent className="p-4 flex gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Zona</p>
                  <p className="text-sm">Zona oeste</p>
                </div>
              </CardContent>
            </Card>

            {/* Horarios */}
            <Card className="border-0 bg-white/95">
              <CardContent className="p-4 flex gap-3">
                <Clock className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold">Horarios</p>
                  <p className="text-sm">Lun a Sáb 8:00 - 18:00</p>
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