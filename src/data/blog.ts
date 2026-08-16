import art1 from "../assets/art-1.jpg";
import art2 from "../assets/art-2.jpg";
import art3 from "../assets/art-3.jpg";
import art4 from "../assets/art-4.jpg";
import art5 from "../assets/art-5.jpg";
import art6 from "../assets/art-6.jpg";

export const categorias = [
  "Todos",
  "Guías",
  "Productos",
  "Mantenimiento",
  "Ahorro de Agua",
  "Cultivos",
  "Automatización",
  "Novedades",
] as const;

export type Bloque =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "h2"; texto: string; id: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "imagen"; src: string; alt: string }
  | { tipo: "destacado"; variante: "consejo" | "advertencia"; titulo: string; texto: string }
  | { tipo: "tabla"; encabezados: string[]; filas: string[][] }
  | { tipo: "enlaces"; titulo: string; items: { texto: string; detalle: string }[] };

export type Articulo = {
  slug: string;
  titulo: string;
  categoria: string;
  fecha: string;
  lectura: string;
  descripcion: string;
  imagen: string;
  intro: string;
  contenido: Bloque[];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  palabrasClave?: string[];
};

export const articulos: Articulo[] = [
  {
    slug: "como-elegir-sistema-de-riego-ideal",
    seoTitle:
  "Cómo elegir el sistema de riego ideal para cada cultivo | RiegoMax",
    titulo: "Cómo elegir el sistema de riego ideal para cada cultivo",

  seoDescription:
    "Aprendé cómo elegir el sistema de riego adecuado según el cultivo, suelo, superficie, disponibilidad de agua y presupuesto.",

  palabrasClave: [
    "sistema de riego",
    "sistema de riego agrícola",
    "cómo elegir sistema de riego",
    "riego para cultivos",
    "riego por goteo",
    "riego por aspersión",
  ],
    categoria: "Guías",
    fecha: "24 Julio 2026",
    lectura: "6 min lectura",
    descripcion:
      "Descubrí los factores que debés tener en cuenta para seleccionar el sistema de riego más eficiente según el tipo de cultivo, la superficie y la disponibilidad de agua.",
    imagen: art1,
    intro:
      "Elegir un sistema de riego no es solo una decisión técnica: define el rendimiento del cultivo, el consumo de agua y la rentabilidad de la campaña. En esta guía repasamos, paso a paso, los criterios que aplicamos en RiegoMax cuando asesoramos a un productor.",
    contenido: [
  {
    tipo: "h2",
    texto: "¿Por qué es importante elegir correctamente un sistema de riego?",
    id: "importancia",
  },
  {
    tipo: "parrafo",
    texto:
      "La elección de un sistema de riego es una de las decisiones más importantes dentro de una explotación agrícola. Un diseño adecuado permite entregar la cantidad exacta de agua que el cultivo necesita, en el momento correcto y con la mayor eficiencia posible.",
  },
  {
    tipo: "parrafo",
    texto:
      "Un sistema mal seleccionado puede generar problemas como exceso de humedad, pérdida de nutrientes por lavado, aparición de enfermedades, aumento innecesario del consumo energético y una reducción significativa del rendimiento del cultivo.",
  },
  {
    tipo: "parrafo",
    texto:
      "Antes de seleccionar tuberías, bombas o emisores, es fundamental analizar las características del cultivo, el tipo de suelo, la disponibilidad de agua, la topografía del terreno y los objetivos productivos a largo plazo.",
  },

  {
    tipo: "h2",
    texto: "Analizá el tipo de cultivo y sus necesidades de agua",
    id: "cultivo",
  },
  {
    tipo: "parrafo",
    texto:
      "Cada cultivo posee una demanda hídrica diferente y esa necesidad cambia durante las distintas etapas de desarrollo. Una planta recién implantada no requiere la misma cantidad de agua que un cultivo adulto en plena producción.",
  },
  {
    tipo: "parrafo",
    texto:
      "Los cultivos de alto valor comercial como tomate, frutilla, vid, arándanos y hortalizas suelen beneficiarse de sistemas de riego localizado, ya que permiten aplicar agua directamente cerca de la zona radicular y mejorar el aprovechamiento de cada litro.",
  },
  {
    tipo: "parrafo",
    texto:
      "En cambio, cultivos extensivos como pasturas, cereales o algunos forrajes pueden requerir sistemas capaces de cubrir grandes superficies de manera uniforme, donde la aspersión puede ser una alternativa más conveniente.",
  },
  {
    tipo: "lista",
    items: [
      "Profundidad y distribución del sistema radicular del cultivo.",
      "Etapas críticas donde la falta de agua afecta directamente el rendimiento.",
      "Sensibilidad del cultivo al exceso de humedad.",
      "Necesidad de aplicar fertilizantes mediante fertirriego.",
      "Distancia entre plantas y distribución del cultivo en el terreno.",
    ],
  },

  {
    tipo: "imagen",
    src: art3,
    alt: "Sistema de riego por goteo con sensores de humedad en un cultivo",
  },

  {
    tipo: "h2",
    texto: "Conocé los principales sistemas de riego disponibles",
    id: "sistemas",
  },

  {
    tipo: "h3",
    texto: "Riego por goteo",
  },
  {
    tipo: "parrafo",
    texto:
      "El riego por goteo es uno de los sistemas más eficientes disponibles actualmente. Su funcionamiento consiste en entregar pequeñas cantidades de agua directamente en la zona donde se encuentran las raíces, reduciendo pérdidas por evaporación y escurrimiento.",
  },
  {
    tipo: "parrafo",
    texto:
      "Es especialmente recomendado para cultivos intensivos, frutales, viveros y producciones donde el agua representa un recurso limitado o costoso. Además, facilita la aplicación precisa de fertilizantes mediante sistemas de fertirriego.",
  },

  {
    tipo: "h3",
    texto: "Riego por aspersión",
  },
  {
    tipo: "parrafo",
    texto:
      "La aspersión distribuye el agua simulando una lluvia artificial mediante emisores que trabajan a presión. Es una solución frecuente en cultivos extensivos, pasturas, jardines deportivos y superficies donde se necesita una cobertura completa del terreno.",
  },
  {
    tipo: "parrafo",
    texto:
      "Su principal ventaja es la uniformidad de aplicación cuando está correctamente diseñado, aunque requiere mayor presión y puede verse afectado por condiciones climáticas como viento intenso.",
  },

  {
    tipo: "h3",
    texto: "Microaspersión",
  },
  {
    tipo: "parrafo",
    texto:
      "La microaspersión combina características del goteo y la aspersión tradicional. Produce gotas pequeñas que cubren una zona reducida alrededor de la planta, siendo utilizada frecuentemente en viveros, frutales y cultivos sensibles.",
  },

  {
    tipo: "h2",
    texto: "Evaluá la superficie, el suelo y la topografía del terreno",
    id: "superficie",
  },
  {
    tipo: "parrafo",
    texto:
      "El tamaño del terreno influye directamente en el diseño hidráulico del sistema. Una pequeña huerta familiar y una explotación agrícola de varias hectáreas requieren estrategias completamente diferentes.",
  },
  {
    tipo: "parrafo",
    texto:
      "La pendiente del terreno también es un factor crítico. En lotes con desniveles importantes pueden aparecer diferencias de presión entre los sectores altos y bajos, generando una distribución irregular del agua.",
  },
  {
    tipo: "parrafo",
    texto:
      "El tipo de suelo determina la velocidad con la que el agua se infiltra. Los suelos arenosos requieren aplicaciones más frecuentes y pequeñas, mientras que los suelos arcillosos necesitan controlar mejor los tiempos para evitar acumulaciones.",
  },

  {
    tipo: "tabla",
    encabezados: [
      "Sistema",
      "Eficiencia",
      "Ideal para",
      "Consideraciones",
    ],
    filas: [
      [
        "Goteo",
        "90–95%",
        "Hortalizas, frutales, vid",
        "Requiere buena filtración",
      ],
      [
        "Microaspersión",
        "80–90%",
        "Viveros y frutales",
        "Controlar presión y viento",
      ],
      [
        "Aspersión",
        "70–85%",
        "Pasturas y cereales",
        "Mayor consumo energético",
      ],
      [
        "Surco tradicional",
        "45–60%",
        "Terrenos planos",
        "Mayor pérdida de agua",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Analizá la calidad y disponibilidad del agua",
    id: "agua",
  },
  {
    tipo: "parrafo",
    texto:
      "La fuente de agua disponible condiciona todo el sistema. Antes de diseñar una instalación es recomendable conocer el caudal disponible, la presión existente y la calidad química del agua.",
  },
  {
    tipo: "parrafo",
    texto:
      "Un agua con exceso de sedimentos, sales o minerales puede generar obstrucciones en emisores y reducir considerablemente la vida útil del sistema.",
  },
  {
    tipo: "lista",
    items: [
      "Realizar análisis físico-químico del agua.",
      "Seleccionar filtros adecuados según el nivel de impurezas.",
      "Determinar el caudal real disponible.",
      "Verificar presión antes de dimensionar bombas.",
    ],
  },

  {
    tipo: "destacado",
    variante: "consejo",
    titulo: "Consejo del especialista",
    texto:
      "Antes de comprar cualquier equipo realizá un análisis del agua y una evaluación del suelo. Estos dos estudios permiten evitar errores costosos y diseñar un sistema realmente adaptado al terreno.",
  },

  {
    tipo: "h2",
    texto: "Errores frecuentes al elegir un sistema de riego",
    id: "errores",
  },
  {
    tipo: "lista",
    items: [
      "Elegir un sistema únicamente por el precio inicial.",
      "No considerar la ampliación futura del terreno.",
      "Comprar una bomba sin calcular correctamente presión y caudal.",
      "Instalar emisores sin tener en cuenta el tipo de suelo.",
      "No incluir filtración adecuada.",
    ],
  },

  {
    tipo: "h2",
    texto: "Planificá pensando en el futuro",
    id: "futuro",
  },
  {
    tipo: "parrafo",
    texto:
      "Un buen sistema de riego debe acompañar el crecimiento del proyecto productivo. Dimensionar correctamente las tuberías principales, bombas y sectores desde el inicio permite ampliar la instalación sin realizar grandes modificaciones posteriormente.",
  },
  {
    tipo: "parrafo",
    texto:
      "La inversión inicial puede optimizarse cuando existe una planificación técnica. Muchas instalaciones terminan siendo más costosas porque fueron diseñadas únicamente para la necesidad actual y no para los próximos años.",
  },

  {
    tipo: "destacado",
    variante: "advertencia",
    titulo: "Atención",
    texto:
      "Nunca agregues nuevos sectores de riego sin recalcular el sistema hidráulico. Un aumento de demanda puede provocar pérdida de presión y afectar el rendimiento de toda la instalación.",
  },

  {
    tipo: "h2",
    texto: "Conclusión: el mejor sistema es el que se adapta a tu realidad",
    id: "conclusion",
  },
  {
    tipo: "parrafo",
    texto:
      "No existe un único sistema de riego perfecto para todos los cultivos. La mejor elección depende de la combinación entre cultivo, suelo, disponibilidad de agua, presupuesto y objetivos productivos.",
  },
  {
    tipo: "parrafo",
    texto:
      "Un diseño profesional permite ahorrar agua, reducir costos operativos y aumentar la productividad del campo. Por eso, antes de realizar una inversión, es recomendable contar con asesoramiento técnico especializado.",
  },

  {
    tipo: "enlaces",
    titulo: "Productos RiegoMax relacionados",
    items: [
      {
        texto: "Kits de riego por goteo",
        detalle: "Soluciones completas para cultivos pequeños y medianos.",
      },
      {
        texto: "Filtros de malla y anillas",
        detalle: "Protección de emisores para mejorar la vida útil del sistema.",
      },
      {
        texto: "Bombas y equipos de presión",
        detalle: "Selección según caudal, altura y demanda del cultivo.",
      },
      {
        texto: "Controladores inteligentes",
        detalle: "Automatización para optimizar tiempos y consumo de agua.",
      },
    ],
  },
],
  },
  {
    slug: "riego-por-goteo-vs-aspersion",

    titulo: "Riego por goteo vs aspersión: cuál conviene según tu campo",
    seoTitle:
    "Riego por goteo vs aspersión: diferencias y ventajas | RiegoMax",
    seoDescription:
    "Compará riego por goteo y aspersión según eficiencia, consumo de agua, costos, mantenimiento y tipo de cultivo.",
    palabrasClave: [
    "riego por goteo",
    "riego por aspersión",
    "goteo vs aspersión",
    "diferencias entre riego por goteo y aspersión",
    "sistema de riego agrícola",
    "riego para cultivos",
  ],
    categoria: "Productos",
    fecha: "18 Julio 2026",
    lectura: "7 min lectura",
    descripcion:
      "Comparamos eficiencia, costos, mantenimiento y rendimiento de las dos tecnologías más utilizadas para que puedas decidir con datos concretos.",
    imagen: art2,
    intro:
      "Goteo y aspersión no compiten: resuelven problemas distintos. Entender dónde rinde cada uno es la diferencia entre un sistema eficiente y una inversión mal aprovechada.",
    contenido: [
  {
    tipo: "h2",
    texto: "Cómo funciona cada tecnología",
    id: "funcionamiento",
  },
  {
    tipo: "parrafo",
    texto:
      "El riego por goteo y el riego por aspersión son dos de las tecnologías más utilizadas en agricultura moderna, pero trabajan de formas completamente diferentes. El goteo aplica pequeñas cantidades de agua directamente sobre la zona donde se encuentran las raíces, mientras que la aspersión distribuye el agua simulando una lluvia artificial sobre toda la superficie.",
  },
  {
    tipo: "parrafo",
    texto:
      "La elección entre ambos sistemas depende principalmente del tipo de cultivo, disponibilidad de agua, calidad del suelo, condiciones climáticas y nivel de control que necesita el productor. No existe un sistema universalmente mejor: existe un sistema mejor adaptado a cada situación.",
  },
  {
    tipo: "imagen",
    src: art2,
    alt: "Comparación entre sistema de riego por goteo y aspersión en un cultivo",
  },

  {
    tipo: "h2",
    texto: "Principales diferencias entre goteo y aspersión",
    id: "diferencias",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Criterio",
      "Riego por goteo",
      "Riego por aspersión",
    ],
    filas: [
      [
        "Forma de aplicación",
        "Entrega agua directamente en la zona radicular",
        "Distribuye agua sobre toda la superficie mediante lluvia artificial",
      ],
      [
        "Eficiencia del agua",
        "90–95% en condiciones adecuadas",
        "70–85% dependiendo del clima y viento",
      ],
      [
        "Presión requerida",
        "Baja presión (0,8 - 1,5 bar)",
        "Media/alta presión (2,5 - 4 bar)",
      ],
      [
        "Evaporación",
        "Muy reducida al aplicar agua cerca del suelo",
        "Mayor pérdida por viento y temperatura",
      ],
      [
        "Control de malezas",
        "Reduce crecimiento al mojar solo la zona del cultivo",
        "Favorece mayor humedad superficial",
      ],
      [
        "Mantenimiento",
        "Requiere limpieza de filtros y control de emisores",
        "Requiere revisión de boquillas y distribución",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Ventajas del riego por goteo",
    id: "ventajas-goteo",
  },
  {
    tipo: "parrafo",
    texto:
      "El riego por goteo es especialmente utilizado en cultivos intensivos donde cada litro de agua tiene un impacto directo sobre la producción. Al aplicar agua lentamente y cerca de las raíces, permite mantener una humedad más estable y reduce los períodos de estrés hídrico.",
  },
  {
    tipo: "lista",
    items: [
      "Mayor eficiencia en el uso del agua, especialmente en zonas con disponibilidad limitada.",
      "Permite aplicar fertilizantes junto con el agua mediante fertirriego.",
      "Reduce enfermedades causadas por humedad excesiva en hojas y frutos.",
      "Mejora la uniformidad del crecimiento del cultivo.",
      "Puede automatizarse fácilmente mediante sensores y controladores.",
    ],
  },

  {
    tipo: "h2",
    texto: "Cuándo conviene utilizar riego por goteo",
    id: "cuando-goteo",
  },
  {
    tipo: "parrafo",
    texto:
      "El goteo suele ser la mejor alternativa en cultivos de alto valor económico donde se busca maximizar rendimiento y reducir desperdicios. Es frecuente encontrarlo en frutales, viñedos, horticultura, invernaderos y producciones donde se necesita un control preciso del agua.",
  },
  {
    tipo: "lista",
    items: [
      "Cultivos en hileras como tomate, frutilla, vid y arándanos.",
      "Zonas con restricciones de agua o costos elevados de bombeo.",
      "Productores que utilizan fertirriego.",
      "Campos donde se busca automatización y monitoreo remoto.",
    ],
  },

  {
    tipo: "h2",
    texto: "Ventajas del riego por aspersión",
    id: "ventajas-aspersion",
  },
  {
    tipo: "parrafo",
    texto:
      "La aspersión tiene como principal ventaja la capacidad de cubrir grandes superficies de manera uniforme. Es una solución práctica para cultivos extensivos donde la distribución del agua sobre toda el área resulta más conveniente que una aplicación localizada.",
  },
  {
    tipo: "lista",
    items: [
      "Ideal para pasturas, cereales y cultivos extensivos.",
      "Permite controlar heladas en determinadas producciones.",
      "Facilita la implantación inicial de cultivos.",
      "Puede utilizarse en terrenos donde instalar líneas de goteo sería poco práctico.",
    ],
  },

  {
    tipo: "h2",
    texto: "Cuándo conviene utilizar aspersión",
    id: "cuando-aspersion",
  },
  {
    tipo: "parrafo",
    texto:
      "La aspersión suele ser elegida cuando se necesita cubrir rápidamente grandes áreas o cuando el cultivo no requiere una aplicación localizada. También es utilizada en sistemas donde la uniformidad de cobertura es más importante que la máxima eficiencia del agua.",
  },
  {
    tipo: "lista",
    items: [
      "Pasturas para alimentación animal.",
      "Cultivos extensivos como trigo, maíz o soja.",
      "Áreas verdes y parques.",
      "Sistemas donde se necesita enfriamiento o protección contra heladas.",
    ],
  },

  {
    tipo: "destacado",
    variante: "consejo",
    titulo: "La combinación puede ser la mejor estrategia",
    texto:
      "Muchos productores utilizan aspersión durante la etapa inicial del cultivo para lograr una buena implantación y luego incorporan goteo durante la fase productiva para aumentar eficiencia y reducir consumo de agua.",
  },

  {
    tipo: "h2",
    texto: "Factores que debés analizar antes de decidir",
    id: "factores",
  },
  {
    tipo: "lista",
    items: [
      "Disponibilidad y calidad del agua.",
      "Tipo de suelo y velocidad de infiltración.",
      "Superficie total a regar.",
      "Pendientes del terreno.",
      "Costo energético del bombeo.",
      "Nivel de automatización deseado.",
    ],
  },

  {
    tipo: "destacado",
    variante: "advertencia",
    titulo: "Un sistema mal diseñado pierde eficiencia",
    texto:
      "Elegir tecnología solamente por el precio inicial puede generar mayores costos después. Un sistema correctamente dimensionado reduce consumo energético, evita pérdidas y mejora la productividad del cultivo durante toda su vida útil.",
  },

  {
    tipo: "enlaces",
    titulo: "Productos RiegoMax relacionados",
    items: [
      {
        texto: "Cintas y mangueras de goteo",
        detalle:
          "Diferentes espesores, espaciamientos y caudales para adaptarse a cada cultivo.",
      },
      {
        texto: "Aspersores agrícolas",
        detalle:
          "Modelos de cobertura regulable para pequeñas y grandes superficies.",
      },
      {
        texto: "Filtros y sistemas de control",
        detalle:
          "Protección y automatización para mejorar la eficiencia del sistema.",
      },
    ],
  },
],
  },
  {
    slug: "ahorrar-agua-riego-inteligente",
     // SEO
  seoTitle:
    "Cómo ahorrar agua con riego inteligente | RiegoMax",

  seoDescription:
    "Descubrí cómo ahorrar agua con sensores de humedad, automatización y programación inteligente del riego sin afectar el rendimiento del cultivo.",

  palabrasClave: [
    "riego inteligente",
    "ahorro de agua",
    "cómo ahorrar agua en riego",
    "automatización del riego",
    "sensores de humedad",
    "riego automatizado",
    "eficiencia del agua",
    "control de riego",
  ],
    titulo: "Cómo ahorrar agua utilizando riego inteligente",
    categoria: "Ahorro de Agua",
    fecha: "10 Julio 2026",
    lectura: "5 min lectura",
    descripcion:
      "Sensores de humedad, programación por evapotranspiración y control remoto: tres herramientas que reducen el consumo de agua hasta un 40% sin resignar rendimiento.",
    imagen: art3,
    intro:
      "Regar menos no significa regar peor. Con la información correcta, cada litro se aplica en el momento en que la planta realmente lo necesita.",
    contenido: [
  {
    tipo: "h2",
    texto: "Medir antes de regar: la base del riego inteligente",
    id: "medir",
  },
  {
    tipo: "parrafo",
    texto:
      "Durante muchos años el riego se realizó siguiendo calendarios fijos: regar cierta cantidad de minutos cada determinado número de días. Aunque este método puede funcionar en algunos casos, no considera que las condiciones del cultivo cambian constantemente según la temperatura, humedad, viento, lluvias recientes y etapa de desarrollo de la planta.",
  },
  {
    tipo: "parrafo",
    texto:
      "El riego inteligente comienza con información. Mediante sensores de humedad, estaciones meteorológicas y mediciones de caudal, es posible conocer exactamente cuándo el cultivo necesita agua y aplicar únicamente la cantidad necesaria.",
  },
  {
    tipo: "imagen",
    src: art5,
    alt: "Sensor de humedad de suelo conectado a un sistema de riego inteligente",
  },

  {
    tipo: "h2",
    texto: "Sensores de humedad: regar según la necesidad real del cultivo",
    id: "sensores",
  },
  {
    tipo: "parrafo",
    texto:
      "Los sensores de humedad permiten conocer el estado del suelo en tiempo real. En lugar de estimar cuándo regar, el productor puede tomar decisiones basadas en datos concretos y evitar tanto el déficit hídrico como el exceso de agua.",
  },
  {
    tipo: "lista",
    items: [
      "Detectan cuándo el suelo alcanza niveles bajos de humedad.",
      "Permiten conocer el comportamiento del agua a diferentes profundidades.",
      "Reducen riegos innecesarios después de lluvias.",
      "Ayudan a mantener condiciones óptimas para el desarrollo radicular.",
      "Generan registros históricos para mejorar decisiones futuras.",
    ],
  },

  {
    tipo: "h2",
    texto: "Programación basada en evapotranspiración (ETo)",
    id: "eto",
  },
  {
    tipo: "parrafo",
    texto:
      "La evapotranspiración representa la cantidad de agua que pierde el cultivo mediante la evaporación del suelo y la transpiración de las plantas. Utilizando datos climáticos, es posible ajustar automáticamente la cantidad de riego necesaria para cada día.",
  },
  {
    tipo: "parrafo",
    texto:
      "Por ejemplo, un cultivo no necesita la misma cantidad de agua durante una semana fría y nublada que durante una semana con temperaturas superiores a 35 °C, viento fuerte y alta radiación solar.",
  },

  {
    tipo: "h2",
    texto: "Tecnologías que ayudan a reducir el consumo de agua",
    id: "tecnologias",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Tecnología",
      "Función",
      "Beneficio",
    ],
    filas: [
      [
        "Sensores de humedad",
        "Miden agua disponible en el suelo",
        "Evitan riegos innecesarios",
      ],
      [
        "Estaciones meteorológicas",
        "Registran temperatura, viento y lluvia",
        "Ajustan la programación automáticamente",
      ],
      [
        "Caudalímetros digitales",
        "Controlan consumo y detectan fugas",
        "Reducen pérdidas de agua",
      ],
      [
        "Controladores inteligentes",
        "Gestionan sectores automáticamente",
        "Mayor precisión y ahorro energético",
      ],
      [
        "Aplicaciones móviles",
        "Permiten supervisión remota",
        "Control desde cualquier ubicación",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Cuánta agua se puede ahorrar con un sistema inteligente",
    id: "ahorro",
  },
  {
    tipo: "parrafo",
    texto:
      "El ahorro depende del tipo de cultivo, sistema existente y nivel de automatización incorporado. En instalaciones correctamente diseñadas, combinar riego localizado, sensores y programación inteligente puede reducir significativamente el consumo sin afectar el rendimiento.",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Práctica implementada",
      "Ahorro aproximado",
      "Complejidad",
    ],
    filas: [
      [
        "Riego en horarios de menor evaporación",
        "8–12%",
        "Baja",
      ],
      [
        "Sensores de humedad",
        "20–30%",
        "Media",
      ],
      [
        "Programación mediante ETo",
        "15–25%",
        "Media",
      ],
      [
        "Detección automática de fugas",
        "5–15%",
        "Media",
      ],
      [
        "Automatización completa",
        "30–40%",
        "Alta",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Automatización del riego: menos trabajo y más control",
    id: "automatizacion",
  },
  {
    tipo: "parrafo",
    texto:
      "Un sistema automatizado permite controlar válvulas, bombas y sectores de riego sin necesidad de realizar aperturas manuales diariamente. Esto mejora la precisión y permite que el sistema funcione incluso fuera del horario habitual de trabajo.",
  },
  {
    tipo: "lista",
    items: [
      "Programación automática de horarios de riego.",
      "Control remoto desde celular o computadora.",
      "Alertas ante consumo anormal de agua.",
      "Registro del historial de funcionamiento.",
      "Integración con sensores y estaciones climáticas.",
    ],
  },

  {
    tipo: "h2",
    texto: "Errores comunes que generan desperdicio de agua",
    id: "errores",
  },
  {
    tipo: "lista",
    items: [
      "Regar por costumbre sin analizar la humedad del suelo.",
      "Mantener tiempos de riego antiguos aunque cambie el clima.",
      "No detectar pérdidas en tuberías o conexiones.",
      "Utilizar emisores con caudales incorrectos.",
      "No realizar mantenimiento de filtros.",
    ],
  },

  {
    tipo: "imagen",
    src: art3,
    alt: "Controlador automático de riego instalado en campo agrícola",
  },

  {
    tipo: "destacado",
    variante: "consejo",
    titulo: "La información es la herramienta más importante",
    texto:
      "Un sistema inteligente no necesariamente significa instalar la tecnología más costosa. Muchas mejoras importantes comienzan con pequeños cambios: medir humedad, controlar presión y ajustar correctamente los tiempos de riego.",
  },

  {
    tipo: "destacado",
    variante: "advertencia",
    titulo: "Más agua no significa más producción",
    texto:
      "El exceso de riego puede reducir la disponibilidad de oxígeno en las raíces, favorecer enfermedades y provocar pérdida de nutrientes por lavado del suelo.",
  },

  {
    tipo: "enlaces",
    titulo: "Productos RiegoMax relacionados",
    items: [
      {
        texto: "Sensores de humedad de suelo",
        detalle:
          "Medición precisa del estado hídrico del cultivo.",
      },
      {
        texto: "Controladores inteligentes",
        detalle:
          "Automatización por sectores con programación avanzada.",
      },
      {
        texto: "Caudalímetros digitales",
        detalle:
          "Control del consumo y detección temprana de fugas.",
      },
    ],
  },
],
      
  },
  {
    slug: "errores-comunes-instalacion-riego",
    // SEO
seoTitle:
  "Errores comunes al instalar un sistema de riego | RiegoMax",

seoDescription:
  "Conocé los errores más frecuentes al instalar un sistema de riego y cómo evitarlos para mejorar la eficiencia, presión y vida útil del equipo.",

palabrasClave: [
  "errores instalación sistema de riego",
  "instalación de riego",
  "sistema de riego agrícola",
  "instalación riego agrícola",
  "diseño hidráulico",
  "mantenimiento sistema de riego",
  "problemas de riego",
],
    titulo: "Errores comunes al instalar un sistema de riego",
    categoria: "Mantenimiento",
    fecha: "2 Julio 2026",
    lectura: "8 min lectura",
    descripcion:
      "Repasamos las fallas de instalación que vemos con más frecuencia a campo y cómo evitarlas para no perder eficiencia ni vida útil del equipo.",
    imagen: art4,
    intro:
      "La mayoría de los problemas de riego que atendemos no son fallas de producto: son decisiones de instalación que se pagan durante todo el ciclo del equipo.",
     contenido: [
  {
    tipo: "h2",
    texto: "Una instalación correcta define la eficiencia del sistema",
    id: "importancia",
  },
  {
    tipo: "parrafo",
    texto:
      "Un sistema de riego puede contar con equipos de excelente calidad y aun así entregar malos resultados si fue instalado sin un diseño hidráulico adecuado. La mayoría de los problemas que aparecen durante la operación no se deben a fallas de fabricación, sino a errores de cálculo, montaje o selección de componentes.",
  },
  {
    tipo: "parrafo",
    texto:
      "Una instalación profesional debe considerar la fuente de agua, presión disponible, caudal requerido, características del terreno, tipo de cultivo y necesidades futuras de ampliación.",
  },

  {
    tipo: "imagen",
    src: art4,
    alt: "Instalación profesional de tuberías para sistema de riego agrícola",
  },

  {
    tipo: "h2",
    texto: "Error 1: No realizar un diseño hidráulico previo",
    id: "diseno",
  },
  {
    tipo: "parrafo",
    texto:
      "Uno de los errores más frecuentes es instalar tuberías, bombas y emisores sin calcular correctamente las necesidades hidráulicas del sistema. Cada componente genera pérdidas de presión que afectan la uniformidad del riego.",
  },
  {
    tipo: "lista",
    items: [
      "No calcular el caudal disponible de la fuente de agua.",
      "Seleccionar una bomba con potencia insuficiente o excesiva.",
      "Instalar demasiados emisores en un mismo sector.",
      "No considerar pérdidas por longitud y diámetro de tuberías.",
    ],
  },

  {
    tipo: "destacado",
    variante: "advertencia",
    titulo: "Un sistema sin cálculo hidráulico pierde eficiencia",
    texto:
      "Cuando la presión no es uniforme, algunos sectores reciben exceso de agua mientras otros quedan con déficit. Esto genera diferencias de crecimiento y desperdicio de recursos.",
  },

  {
    tipo: "h2",
    texto: "Error 2: Mala sectorización del sistema",
    id: "sectores",
  },
  {
    tipo: "parrafo",
    texto:
      "Dividir correctamente los sectores de riego permite que cada zona trabaje dentro de sus parámetros ideales. Un error común es conectar demasiados emisores en una misma línea, provocando una caída progresiva de presión.",
  },
  {
    tipo: "lista",
    items: [
      "Separar cultivos con diferentes necesidades de agua.",
      "Evitar mezclar zonas con distinta presión requerida.",
      "Dimensionar cada sector según el caudal disponible.",
      "Dejar posibilidad de futuras ampliaciones.",
    ],
  },

  {
    tipo: "h2",
    texto: "Error 3: Elegir filtros incorrectos o subdimensionados",
    id: "filtracion",
  },
  {
    tipo: "parrafo",
    texto:
      "La filtración es uno de los puntos más importantes en cualquier sistema de riego localizado. Un filtro mal seleccionado puede provocar obstrucciones en goteros, pérdida de rendimiento y reducción de la vida útil del sistema.",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Problema",
      "Causa frecuente",
      "Consecuencia",
    ],
    filas: [
      [
        "Goteros obstruidos",
        "Filtración insuficiente",
        "Riego desigual",
      ],
      [
        "Caída de presión",
        "Filtro saturado",
        "Menor cobertura",
      ],
      [
        "Daño en componentes",
        "Falta de mantenimiento",
        "Mayor costo operativo",
      ],
      [
        "Variación de caudal",
        "Suciedad acumulada",
        "Cultivo irregular",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Error 4: No controlar la calidad del agua",
    id: "calidad-agua",
  },
  {
    tipo: "parrafo",
    texto:
      "Antes de instalar un sistema de riego es recomendable analizar la calidad del agua. La presencia de sedimentos, sales, hierro o microorganismos puede afectar directamente tuberías, filtros y emisores.",
  },
  {
    tipo: "lista",
    items: [
      "Analizar partículas suspendidas.",
      "Evaluar niveles de sales y minerales.",
      "Determinar si es necesario tratamiento químico.",
      "Seleccionar filtros adecuados según el tipo de contaminación.",
    ],
  },

  {
    tipo: "h2",
    texto: "Error 5: Instalar tuberías sin protección adecuada",
    id: "tuberias",
  },
  {
    tipo: "parrafo",
    texto:
      "Las tuberías y conexiones representan gran parte de la inversión del sistema. Una instalación incorrecta puede provocar roturas, fugas y reparaciones frecuentes durante los ciclos de producción.",
  },
  {
    tipo: "lista",
    items: [
      "No proteger tuberías expuestas al sol cuando corresponde.",
      "Realizar uniones sin limpieza adecuada.",
      "Enterrar tuberías sin preparación del terreno.",
      "No instalar válvulas de purga o puntos de limpieza.",
    ],
  },

  {
    tipo: "imagen",
    src: art4,
    alt: "Detalle de tuberías y conexiones utilizadas en instalación de riego",
  },

  {
    tipo: "h2",
    texto: "Error 6: No instalar instrumentos de medición",
    id: "medicion",
  },
  {
    tipo: "parrafo",
    texto:
      "Los manómetros, caudalímetros y sensores permiten conocer el estado real del sistema. Sin mediciones es difícil detectar problemas antes de que afecten al cultivo.",
  },
  {
    tipo: "lista",
    items: [
      "Manómetros antes y después de filtros.",
      "Medidores de caudal para detectar fugas.",
      "Sensores de humedad para ajustar riegos.",
      "Controladores para automatización.",
    ],
  },

  {
    tipo: "h2",
    texto: "Checklist antes de poner el sistema en funcionamiento",
    id: "checklist",
  },
  {
    tipo: "lista",
    items: [
      "Verificar presión en todos los sectores.",
      "Realizar limpieza inicial de tuberías.",
      "Comprobar funcionamiento de válvulas.",
      "Revisar uniformidad de emisores.",
      "Configurar correctamente tiempos de riego.",
      "Registrar planos y ubicación de componentes.",
    ],
  },

  {
    tipo: "destacado",
    variante: "consejo",
    titulo: "Documentar la instalación evita problemas futuros",
    texto:
      "Guardar planos, ubicación de válvulas, modelos de filtros y configuraciones del controlador facilita cualquier mantenimiento o ampliación posterior.",
  },

  {
    tipo: "h2",
    texto: "El mantenimiento comienza desde la instalación",
    id: "mantenimiento",
  },
  {
    tipo: "parrafo",
    texto:
      "Un buen diseño debe permitir realizar mantenimiento fácilmente. Accesos adecuados, válvulas correctamente ubicadas y componentes de calidad reducen tiempos de reparación y aumentan la vida útil del sistema.",
  },

  {
    tipo: "enlaces",
    titulo: "Productos RiegoMax relacionados",
    items: [
      {
        texto: "Filtros de malla y anillas",
        detalle:
          "Protección eficiente para sistemas de riego localizado.",
      },
      {
        texto: "Manómetros y controladores",
        detalle:
          "Monitoreo y control preciso del funcionamiento.",
      },
      {
        texto: "Válvulas y accesorios",
        detalle:
          "Componentes confiables para instalaciones agrícolas.",
      },
    ],
  },
], 
      
  },
  {
    slug: "automatizacion-del-riego",
    // SEO
seoTitle:
  "Automatización del riego: guía para empezar | RiegoMax",

seoDescription:
  "Conocé cómo automatizar un sistema de riego desde un temporizador hasta el control remoto con sensores, electroválvulas y tecnología IoT.",

palabrasClave: [
  "automatización del riego",
  "riego automatizado",
  "control de riego",
  "controlador de riego",
  "riego inteligente",
  "electroválvulas",
  "sensores de riego",
  "IoT agrícola",
],
    titulo: "Automatización del riego: del temporizador al control remoto",
    categoria: "Automatización",
    fecha: "26 Junio 2026",
    lectura: "6 min lectura",
    descripcion:
      "Qué niveles de automatización existen, cuánto cuesta cada etapa y cómo empezar sin rehacer toda la instalación existente.",
    imagen: art5,
    intro:
      "Automatizar no requiere cambiar todo de una vez. Se puede avanzar por etapas, empezando por lo que más tiempo y agua ahorra.",
    contenido: [
  {
    tipo: "h2",
    texto: "La evolución del riego: de la operación manual al control inteligente",
    id: "evolucion",
  },
  {
    tipo: "parrafo",
    texto:
      "Durante décadas, muchos sistemas de riego dependieron completamente de la intervención manual: abrir válvulas, encender bombas y controlar tiempos de funcionamiento de forma presencial. Aunque este método todavía se utiliza, limita la precisión y aumenta el riesgo de errores humanos.",
  },
  {
    tipo: "parrafo",
    texto:
      "La automatización del riego permite transformar un sistema tradicional en una instalación capaz de tomar decisiones basadas en horarios, sensores, condiciones climáticas y datos del cultivo. El objetivo no es solamente ahorrar agua, sino aplicar la cantidad correcta en el momento adecuado.",
  },

  {
    tipo: "imagen",
    src: art5,
    alt: "Controlador automático de riego conectado a válvulas y sensores",
  },

  {
    tipo: "h2",
    texto: "¿Qué componentes forman un sistema de riego automatizado?",
    id: "componentes",
  },
  {
    tipo: "parrafo",
    texto:
      "Un sistema automatizado combina diferentes elementos hidráulicos y electrónicos que trabajan juntos para controlar la aplicación de agua. La complejidad puede variar desde una programación básica hasta sistemas inteligentes con monitoreo remoto.",
  },
  {
    tipo: "lista",
    items: [
      "Controladores programables para gestionar sectores de riego.",
      "Electroválvulas que permiten abrir y cerrar automáticamente el paso del agua.",
      "Sensores de humedad para conocer el estado del suelo.",
      "Estaciones meteorológicas para analizar condiciones climáticas.",
      "Caudalímetros para detectar consumos anormales o fugas.",
      "Aplicaciones móviles para supervisión y control remoto.",
    ],
  },

  {
    tipo: "h2",
    texto: "Los tres niveles de automatización del riego",
    id: "niveles",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Nivel",
      "Equipamiento",
      "Características",
      "Beneficio principal",
    ],
    filas: [
      [
        "Básico",
        "Programador + electroválvulas",
        "Horarios automáticos de riego",
        "Reduce trabajo manual",
      ],
      [
        "Intermedio",
        "Controlador + sensores",
        "Ajuste según condiciones del cultivo",
        "Mayor ahorro de agua",
      ],
      [
        "Avanzado",
        "IoT + telemetría + plataforma web",
        "Control remoto y análisis de datos",
        "Gestión completa del sistema",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Nivel básico: automatización mediante programación",
    id: "basico",
  },
  {
    tipo: "parrafo",
    texto:
      "El primer paso hacia la automatización consiste en reemplazar la operación manual por un controlador programable. El usuario define días, horarios y duración del riego, permitiendo que el sistema funcione automáticamente incluso cuando no hay presencia en el campo.",
  },
  {
    tipo: "lista",
    items: [
      "Ideal para jardines, pequeñas producciones y sistemas simples.",
      "Reduce tareas repetitivas.",
      "Permite regar en horarios de menor evaporación.",
      "Es una alternativa económica para comenzar.",
    ],
  },

  {
    tipo: "h2",
    texto: "Nivel intermedio: riego basado en datos",
    id: "intermedio",
  },
  {
    tipo: "parrafo",
    texto:
      "Cuando se incorporan sensores y mediciones, el sistema deja de funcionar únicamente por horarios y comienza a responder a las necesidades reales del cultivo.",
  },
  {
    tipo: "lista",
    items: [
      "Sensores de humedad que activan el riego cuando es necesario.",
      "Control según temperatura y condiciones climáticas.",
      "Ajuste automático de tiempos según demanda hídrica.",
      "Mayor uniformidad y reducción de desperdicios.",
    ],
  },

  {
    tipo: "h2",
    texto: "Nivel avanzado: agricultura conectada e IoT",
    id: "iot",
  },
  {
    tipo: "parrafo",
    texto:
      "Los sistemas más avanzados utilizan conectividad para enviar información en tiempo real desde el campo hacia plataformas digitales. Esto permite administrar varios sectores desde un celular o computadora sin necesidad de desplazarse constantemente.",
  },
  {
    tipo: "lista",
    items: [
      "Control remoto desde cualquier ubicación.",
      "Alertas por fallas, fugas o consumo excesivo.",
      "Historial de funcionamiento del sistema.",
      "Análisis de datos para mejorar decisiones.",
      "Integración con estaciones meteorológicas.",
    ],
  },

  {
    tipo: "h2",
    texto: "Beneficios de automatizar un sistema de riego",
    id: "beneficios",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Beneficio",
      "Cómo se logra",
    ],
    filas: [
      [
        "Ahorro de agua",
        "Aplicando solamente la cantidad necesaria",
      ],
      [
        "Menor consumo energético",
        "Reduciendo tiempos innecesarios de bombeo",
      ],
      [
        "Mayor productividad",
        "Manteniendo condiciones ideales del cultivo",
      ],
      [
        "Menos trabajo operativo",
        "Eliminando tareas manuales repetitivas",
      ],
      [
        "Detección temprana de problemas",
        "Mediante sensores y alarmas",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Qué analizar antes de automatizar tu sistema",
    id: "antes",
  },
  {
    tipo: "lista",
    items: [
      "Cantidad de sectores existentes.",
      "Disponibilidad eléctrica o alternativa solar.",
      "Presión y caudal del sistema actual.",
      "Compatibilidad con sensores.",
      "Posibilidad de ampliaciones futuras.",
      "Nivel de control que realmente necesita el productor.",
    ],
  },

  {
    tipo: "destacado",
    variante: "consejo",
    titulo: "Automatizar por etapas suele ser la mejor estrategia",
    texto:
      "No siempre es necesario reemplazar todo el sistema. Muchas instalaciones pueden comenzar con un controlador básico y luego incorporar sensores, conectividad y nuevas funciones según las necesidades del cultivo.",
  },

  {
    tipo: "h2",
    texto: "Errores frecuentes al automatizar un sistema de riego",
    id: "errores",
  },
  {
    tipo: "lista",
    items: [
      "Comprar tecnología sin revisar compatibilidad hidráulica.",
      "Instalar sensores sin una correcta ubicación.",
      "No calibrar tiempos de riego después de automatizar.",
      "Ignorar el mantenimiento de válvulas y filtros.",
      "No capacitar al usuario sobre el funcionamiento del sistema.",
    ],
  },

  {
    tipo: "destacado",
    variante: "advertencia",
    titulo: "La tecnología no reemplaza un buen diseño hidráulico",
    texto:
      "Un sistema automatizado puede mejorar mucho la eficiencia, pero si la instalación inicial tiene problemas de presión, filtración o dimensionamiento, la automatización solamente controlará un sistema incorrecto.",
  },

  {
    tipo: "enlaces",
    titulo: "Productos RiegoMax relacionados",
    items: [
      {
        texto: "Controladores de riego inteligentes",
        detalle:
          "Programación automática y gestión avanzada de sectores.",
      },
      {
        texto: "Electroválvulas",
        detalle:
          "Control automático del paso de agua en cada zona.",
      },
      {
        texto: "Sensores agrícolas",
        detalle:
          "Medición de humedad y condiciones del cultivo.",
      },
    ],
  },
]

      ,
  },
  {
    slug: "mantener-filtros-y-valvulas",
    // SEO
seoTitle:
  "Cómo mantener filtros y válvulas de riego | RiegoMax",

seoDescription:
  "Aprendé cómo realizar el mantenimiento de filtros y válvulas de riego para evitar obstrucciones, pérdidas de presión y fallas en el sistema.",

palabrasClave: [
  "mantenimiento sistema de riego",
  "mantenimiento de filtros de riego",
  "mantenimiento de válvulas",
  "filtros de riego",
  "válvulas de riego",
  "limpieza de filtros",
  "problemas de riego",
  "riego agrícola",
],
    titulo: "Cómo mantener filtros y válvulas en óptimo estado",
    categoria: "Mantenimiento",
    fecha: "20 Junio 2026",
    lectura: "5 min lectura",
    descripcion:
      "Una rutina de mantenimiento simple extiende la vida útil del equipo y evita paradas justo en los momentos críticos del cultivo.",
    imagen: art6,
    intro:
      "El mantenimiento preventivo de filtros y válvulas es la tarea de menor costo y mayor retorno en cualquier sistema de riego.",
    contenido: [
  {
    tipo: "h2",
    texto: "Por qué el mantenimiento define la vida útil del sistema de riego",
    id: "importancia",
  },
  {
    tipo: "parrafo",
    texto:
      "Un sistema de riego correctamente instalado puede funcionar durante muchos años, pero necesita mantenimiento periódico para conservar su eficiencia. Con el tiempo, partículas presentes en el agua, acumulación de minerales y desgaste mecánico afectan filtros, válvulas, tuberías y emisores.",
  },
  {
    tipo: "parrafo",
    texto:
      "El mantenimiento preventivo permite detectar pequeños problemas antes de que se conviertan en fallas costosas. Una limpieza de filtros realizada a tiempo puede evitar pérdidas de presión, mientras que una revisión de válvulas puede prevenir sectores completos sin riego.",
  },

  {
    tipo: "imagen",
    src: art6,
    alt: "Mantenimiento de filtro y válvula en sistema de riego agrícola",
  },

  {
    tipo: "h2",
    texto: "El filtro: el componente que protege todo el sistema",
    id: "filtro",
  },
  {
    tipo: "parrafo",
    texto:
      "Los filtros cumplen una función fundamental: retener partículas que podrían obstruir emisores, válvulas y conductos internos. En sistemas de riego localizado, especialmente goteo y microaspersión, la calidad de filtración determina directamente la uniformidad del riego.",
  },
  {
    tipo: "parrafo",
    texto:
      "Un filtro saturado no solamente reduce el caudal disponible, también obliga a la bomba a trabajar con mayor esfuerzo, aumentando el consumo energético y reduciendo la eficiencia general del sistema.",
  },

  {
    tipo: "h2",
    texto: "Tipos principales de filtros utilizados en riego",
    id: "tipos-filtros",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Tipo de filtro",
      "Uso recomendado",
      "Mantenimiento",
    ],
    filas: [
      [
        "Filtro de malla",
        "Agua con partículas minerales y sedimentos pequeños",
        "Limpieza periódica de la malla",
      ],
      [
        "Filtro de anillas",
        "Sistemas agrícolas con mayor carga de partículas",
        "Lavado y separación de anillas",
      ],
      [
        "Filtro de arena",
        "Agua con materia orgánica o algas",
        "Retrolavado del medio filtrante",
      ],
      [
        "Filtros automáticos",
        "Grandes instalaciones agrícolas",
        "Control y revisión del sistema automático",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Rutina semanal de mantenimiento",
    id: "semanal",
  },
  {
    tipo: "parrafo",
    texto:
      "Las revisiones semanales permiten detectar rápidamente cambios en el comportamiento del sistema. Son tareas simples que requieren pocos minutos, pero tienen un impacto importante en la continuidad del riego.",
  },
  {
    tipo: "lista",
    items: [
      "Revisar presión antes y después del filtro.",
      "Observar si existen diferencias respecto al funcionamiento habitual.",
      "Verificar pérdidas de agua en conexiones y válvulas.",
      "Controlar que todos los sectores funcionen correctamente.",
      "Limpiar filtros cuando exista acumulación visible de suciedad.",
    ],
  },

  {
    tipo: "h2",
    texto: "Cómo saber cuándo limpiar un filtro",
    id: "limpieza",
  },
  {
    tipo: "parrafo",
    texto:
      "No todos los sistemas necesitan la misma frecuencia de limpieza. La cantidad de sedimentos depende de la fuente de agua, la época del año y las condiciones del terreno. Por eso es recomendable utilizar indicadores de presión para conocer cuándo intervenir.",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Síntoma observado",
      "Posible causa",
      "Acción recomendada",
    ],
    filas: [
      [
        "Menor presión después del filtro",
        "Filtro saturado",
        "Realizar limpieza",
      ],
      [
        "Sectores con menos caudal",
        "Obstrucción parcial",
        "Revisar filtración y emisores",
      ],
      [
        "Mayor consumo energético",
        "Restricción del flujo",
        "Inspeccionar pérdidas de carga",
      ],
      [
        "Riego irregular",
        "Suciedad acumulada",
        "Limpiar y verificar componentes",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Mantenimiento correcto de válvulas",
    id: "valvulas",
  },
  {
    tipo: "parrafo",
    texto:
      "Las válvulas son responsables de controlar el paso del agua hacia cada sector de riego. Una falla en una válvula puede afectar grandes áreas del cultivo, por eso requieren inspección periódica.",
  },
  {
    tipo: "lista",
    items: [
      "Verificar que abran y cierren completamente.",
      "Controlar pérdidas alrededor de conexiones.",
      "Revisar funcionamiento de solenoides.",
      "Limpiar componentes internos cuando sea necesario.",
      "Cambiar membranas o repuestos desgastados.",
    ],
  },

  {
    tipo: "h2",
    texto: "Problemas frecuentes en válvulas y sus causas",
    id: "problemas-valvulas",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Problema",
      "Causa probable",
      "Solución",
    ],
    filas: [
      [
        "La válvula no abre",
        "Falla eléctrica o solenoide dañado",
        "Revisar conexión o reemplazar componente",
      ],
      [
        "La válvula queda parcialmente abierta",
        "Suciedad interna",
        "Limpiar mecanismo",
      ],
      [
        "La válvula pierde agua",
        "Desgaste de membrana",
        "Cambiar kit de reparación",
      ],
      [
        "Funcionamiento irregular",
        "Presión incorrecta",
        "Verificar diseño hidráulico",
      ],
    ],
  },

  {
    tipo: "h2",
    texto: "Mantenimiento de fin de campaña",
    id: "fin-campana",
  },
  {
    tipo: "parrafo",
    texto:
      "Al finalizar una campaña agrícola es recomendable realizar una revisión completa del sistema antes de dejarlo fuera de operación. Este mantenimiento evita encontrar problemas al iniciar el siguiente ciclo productivo.",
  },
  {
    tipo: "lista",
    items: [
      "Realizar limpieza profunda de filtros.",
      "Purgar tuberías principales y laterales.",
      "Revisar conexiones y accesorios.",
      "Proteger componentes electrónicos.",
      "Registrar reparaciones realizadas.",
    ],
  },

  {
    tipo: "h2",
    texto: "Limpieza química y tratamiento de obstrucciones",
    id: "limpieza-quimica",
  },
  {
    tipo: "parrafo",
    texto:
      "En algunos sistemas pueden aparecer obstrucciones causadas por acumulación de minerales, algas o materia orgánica. En estos casos puede ser necesario realizar tratamientos específicos, siempre siguiendo recomendaciones técnicas.",
  },
  {
    tipo: "destacado",
    variante: "advertencia",
    titulo: "Seguridad durante tratamientos químicos",
    texto:
      "Nunca manipules productos químicos sin conocer previamente su aplicación correcta. Utilizá protección adecuada y seguí siempre las indicaciones técnicas del fabricante.",
  },

  {
    tipo: "h2",
    texto: "Errores comunes que reducen la vida útil del sistema",
    id: "errores",
  },
  {
    tipo: "lista",
    items: [
      "Esperar a que aparezcan fallas antes de limpiar filtros.",
      "Utilizar filtros incorrectos para la calidad del agua disponible.",
      "Ignorar cambios de presión del sistema.",
      "No revisar válvulas durante largos períodos.",
      "Realizar reparaciones sin identificar la causa del problema.",
    ],
  },

  {
    tipo: "h2",
    texto: "Calendario recomendado de mantenimiento",
    id: "calendario",
  },
  {
    tipo: "tabla",
    encabezados: [
      "Frecuencia",
      "Actividad",
    ],
    filas: [
      [
        "Diaria",
        "Observar funcionamiento general del sistema",
      ],
      [
        "Semanal",
        "Revisar presión, filtros y válvulas",
      ],
      [
        "Mensual",
        "Inspección completa de componentes",
      ],
      [
        "Fin de campaña",
        "Limpieza profunda y preparación del sistema",
      ],
    ],
  },

  {
    tipo: "destacado",
    variante: "consejo",
    titulo: "El mantenimiento cuesta menos que una reparación",
    texto:
      "Una rutina preventiva permite mantener la eficiencia del sistema, reducir costos operativos y evitar pérdidas de producción causadas por fallas inesperadas.",
  },

  {
    tipo: "enlaces",
    titulo: "Productos RiegoMax relacionados",
    items: [
      {
        texto: "Filtros de malla y anillas",
        detalle:
          "Protección eficiente para sistemas de riego agrícola.",
      },
      {
        texto: "Repuestos para válvulas",
        detalle:
          "Membranas, solenoides y kits de reparación.",
      },
      {
        texto: "Manómetros y accesorios",
        detalle:
          "Control de presión para diagnóstico del sistema.",
      },
    ],
  },
]
      ,
  },
];

export const getArticulo = (slug: string) => articulos.find((a) => a.slug === slug);
