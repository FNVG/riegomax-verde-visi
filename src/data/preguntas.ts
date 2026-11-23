/**
 * Preguntas frecuentes de cada página de servicio (/servicios/<slug>).
 *
 * Son preguntas reales que la gente le hace a Google (recuadro "Más preguntas" y
 * autocompletado de Google Argentina, noviembre 2026). Por ahora solo están las que se
 * pueden responder sin datos del negocio. Las de precios y plazos ("¿cuánto cuesta…?")
 * se agregan cuando el dueño pase la información.
 */

export type Pregunta = {
  pregunta: string;
  respuesta: string;
  /** Artículo del blog que amplía la respuesta */
  enlace?: { texto: string; href: string };
};

export const preguntasFrecuentes: Record<string, Pregunta[]> = {
  "sistemas-de-riego": [
    {
      pregunta: "¿Cuánto tiempo se debe poner el riego automático?",
      respuesta:
        "Depende del tipo de riego y de la época. Los aspersores del césped riegan pocos minutos por sector; el goteo necesita bastante más tiempo, porque larga el agua de a poco. En verano se riega más que en invierno, y conviene regar menos veces pero más profundo, temprano a la mañana.",
      enlace: { texto: "Cómo ahorrar agua al regar el jardín", href: "/blog/ahorrar-agua-riego-inteligente" },
    },
    {
      pregunta: "¿Cómo se instala un sistema de riego automático en el jardín?",
      respuesta:
        "Se divide el jardín en sectores, se abren zanjas angostas para la cañería, se arma el colector con una válvula por sector y se colocan los aspersores y las líneas de goteo. Después se conecta el programador, se prueba cada sector antes de tapar y se repone el pasto.",
      enlace: { texto: "Errores comunes al instalar un riego", href: "/blog/errores-comunes-instalacion-riego" },
    },
    {
      pregunta: "¿Qué conviene, riego por goteo o por aspersión?",
      respuesta:
        "Los dos, cada uno en su lugar: aspersión para el césped y goteo para canteros, cercos y huertas. En la mayoría de los jardines se combinan, cada uno en su propio sector.",
      enlace: { texto: "Riego por goteo o aspersión", href: "/blog/riego-por-goteo-vs-aspersion" },
    },
    {
      pregunta: "¿Se puede poner riego automático si no hay buena presión de agua?",
      respuesta:
        "Sí. Si la presión de la red no alcanza, se divide el jardín en más sectores para que cada uno use menos agua a la vez, o se suma una bomba que toma el agua de un tanque y arranca sola junto con el riego.",
      enlace: { texto: "Instalación de bombas de agua", href: "/servicios/bombas-de-agua" },
    },
    {
      pregunta: "¿Para qué sirve el sensor de lluvia?",
      respuesta:
        "Suspende el riego automático cuando llueve y lo vuelve a habilitar cuando el suelo se seca. Evita uno de los desperdicios de agua más comunes: el riego funcionando bajo la lluvia.",
    },
  ],
  "cesped-sintetico": [
    {
      pregunta: "¿Qué hay que poner debajo del césped sintético?",
      respuesta:
        "Una base firme y nivelada: primero se retira la tierra suelta y se compacta el terreno, después se coloca una capa de arena nivelada y, encima, una manta geotextil que deja pasar el agua pero frena las malezas. Recién sobre eso se extienden los paños.",
      enlace: { texto: "Cómo se coloca el césped sintético", href: "/blog/como-se-coloca-el-cesped-sintetico" },
    },
    {
      pregunta: "¿Qué pasa con el césped sintético cuando llueve?",
      respuesta:
        "El paño tiene perforaciones por las que el agua pasa a la base. Si la base se preparó con una pendiente suave y buen drenaje, el agua escurre y el césped se seca rápido. Si no, se forman charcos.",
    },
    {
      pregunta: "¿Se puede poner césped sintético sobre la tierra?",
      respuesta:
        "Sí, pero no directamente sobre tierra suelta: con el uso se hunde y aparecen ondas. Primero hay que retirar la capa superficial, compactar y nivelar la base.",
    },
    {
      pregunta: "¿El césped sintético se calienta al sol?",
      respuesta:
        "Sí. En un patio a pleno sol se calienta bastante en verano, más que un césped natural. En patios con sombra o pocas horas de sol directo no es un problema.",
      enlace: { texto: "Césped sintético o natural", href: "/blog/cesped-sintetico-o-natural" },
    },
  ],
  "paisajismo": [
    {
      pregunta: "¿Cuál es la mejor época para plantar grama bahiana?",
      respuesta:
        "Primavera y verano. La grama bahiana crece con el calor, así que en esos meses se implanta mucho más rápido que en invierno, cuando está casi detenida.",
      enlace: { texto: "Grama bahiana: cómo se coloca", href: "/blog/grama-bahiana-como-se-coloca" },
    },
    {
      pregunta: "¿Cuánto tarda en extenderse la grama bahiana?",
      respuesta:
        "Si se coloca en panes, el jardín queda verde desde el primer día y solo hay que esperar a que las raíces se afirmen, manteniéndola húmeda las primeras semanas. Sembrada, en cambio, tarda bastante más en cubrir todo el terreno.",
    },
    {
      pregunta: "¿Qué se pone debajo de las piedras de un cantero?",
      respuesta:
        "Una manta antimalezas. Deja pasar el agua y el aire pero no la luz, así las semillas de malezas no germinan, y evita que las piedras se mezclen con la tierra.",
      enlace: { texto: "Cómo armar un cantero sin malezas", href: "/blog/cantero-sin-malezas" },
    },
  ],
  "jardineria": [
    {
      pregunta: "¿Cada cuánto hay que cortar el césped?",
      respuesta:
        "En primavera y verano, más o menos una vez por semana; en otoño cada dos semanas y en invierno solo cuando haga falta. La regla que manda es no cortar nunca más de un tercio de la altura de la hoja en un corte.",
      enlace: { texto: "Cada cuánto cortar el césped", href: "/blog/cada-cuanto-cortar-el-cesped" },
    },
    {
      pregunta: "¿A qué altura se corta la grama bahiana?",
      respuesta:
        "Conviene no dejarla muy baja: un césped algo más alto hace sombra sobre su propio suelo, conserva la humedad y deja menos lugar a las malezas. En verano se deja un poco más alta para que soporte el calor.",
    },
    {
      pregunta: "¿Cuándo se podan los cercos vivos?",
      respuesta:
        "La poda de formación más fuerte se hace a fines del invierno, antes del crecimiento de primavera, y durante la primavera y el verano se hacen retoques para mantener la forma.",
      enlace: { texto: "Cuándo podar cercos, arbustos y enredaderas", href: "/blog/cuando-podar-cercos-y-arbustos" },
    },
  ],
  "mantenimiento": [
    {
      pregunta: "¿Qué incluye el mantenimiento de un jardín?",
      respuesta:
        "Corte y bordeado del césped, poda de plantas y cercos, desmalezado de canteros, retiro de restos y una revisión del sistema de riego para que todo siga funcionando bien.",
    },
    {
      pregunta: "¿Cada cuánto conviene hacer mantenimiento?",
      respuesta:
        "Depende de la época: en primavera y verano todo crece rápido y las visitas tienen que ser más seguidas; en otoño e invierno se pueden espaciar.",
    },
    {
      pregunta: "¿Se puede recuperar un jardín abandonado?",
      respuesta:
        "Casi siempre. Se empieza por desmalezar y retirar restos, se evalúa qué plantas se pueden conservar, se nivela el terreno y se coloca césped nuevo.",
      enlace: { texto: "Cómo recuperar un jardín abandonado", href: "/blog/como-recuperar-un-jardin-abandonado" },
    },
  ],
  "bombas-de-agua": [
    {
      pregunta: "¿Dónde se instala una bomba presurizadora?",
      respuesta:
        "A la salida del tanque, en la cañería que baja hacia la casa. Así toma el agua del tanque y le da la presión que le falta antes de que llegue a las canillas y la ducha.",
      enlace: { texto: "Poca presión de agua en casa", href: "/blog/poca-presion-de-agua-en-casa" },
    },
    {
      pregunta: "¿Para qué sirve una bomba presurizadora?",
      respuesta:
        "Para aumentar la presión del agua cuando el tanque está a poca altura y la ducha o las canillas salen con poca fuerza. Arranca sola al abrir una canilla y se apaga al cerrarla.",
    },
    {
      pregunta: "¿Por qué la bomba de agua no corta?",
      respuesta:
        "Muchas veces es una pérdida en la instalación, como una canilla o un depósito de inodoro que gotea, que la bomba interpreta como consumo. También puede ser una falla en el sensor que la enciende y la apaga. Conviene revisarlo pronto, porque una bomba que no para se desgasta.",
    },
  ],
  "tableros-electricos-de-riego": [
    {
      pregunta: "¿Cómo se conecta la bomba al riego automático?",
      respuesta:
        "A través de un tablero eléctrico. El programador de riego trabaja con baja tensión y no puede encender la bomba directamente: le manda una señal al tablero, que la enciende junto con cada sector.",
      enlace: { texto: "Riego automático: cómo funciona", href: "/blog/automatizacion-del-riego" },
    },
    {
      pregunta: "¿Por qué la bomba del riego no arranca?",
      respuesta:
        "Las causas más comunes son una protección del tablero que saltó, una configuración del programador que no da la orden de arranque, falta de agua en el tanque o un contactor gastado.",
      enlace: { texto: "La bomba del riego no arranca", href: "/blog/bomba-de-riego-no-arranca" },
    },
    {
      pregunta: "¿Qué protecciones tiene que tener el tablero de una bomba?",
      respuesta:
        "Protección contra sobrecargas y cortocircuitos, protección del motor y, si el sistema lo necesita, una protección que evite que la bomba funcione sin agua. Todo en una caja estanca apta para exterior.",
    },
  ],
  "iluminacion-de-jardines": [
    {
      pregunta: "¿Cómo puedo iluminar mi jardín?",
      respuesta:
        "Combinando dos tipos de luz: spots al pie de árboles y plantas para destacarlos, y balizas bajas a lo largo de caminos y canteros para circular. Es mejor iluminar puntos concretos que llenar todo de luz.",
      enlace: { texto: "Cómo iluminar el jardín", href: "/blog/como-iluminar-el-jardin" },
    },
    {
      pregunta: "¿Qué luces poner en un jardín exterior?",
      respuesta:
        "Luminarias aptas para exterior, con protección contra el agua y el polvo, con tecnología LED, que consume poco y dura años, y preferentemente de luz cálida, que se ve más acogedora.",
    },
    {
      pregunta: "¿Luces solares o eléctricas para el jardín?",
      respuesta:
        "Las solares no necesitan cables y son fáciles de colocar, pero dan menos luz y dependen del sol del día. Las eléctricas iluminan más y de forma constante, aunque requieren una instalación eléctrica protegida.",
    },
  ],
};
