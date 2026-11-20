/**
 * Servicios de Riegomax.
 * Cada servicio tiene su propia página en /servicios/<slug>.
 *
 * La página se arma con "secciones": cada una tiene un título, texto y, si corresponde,
 * la foto o el video que ilustra lo que se explica en esa sección.
 * Las fotos y videos están en public/servicios/<slug>/ y son trabajos reales.
 */

export type Foto = { src: string; alt: string };
export type Video = { src: string; poster: string; titulo: string };

export type Seccion = {
  titulo: string;
  parrafos: string[];
  lista?: string[];
  foto?: Foto;
  video?: Video;
  /** Enlace a otra página relacionada (por ejemplo, de riego a tableros) */
  enlace?: { texto: string; href: string };
};

export type Servicio = {
  slug: string;
  titulo: string;
  /** Texto corto para la tarjeta de la home y del listado */
  resumen: string;
  /** Lista corta para la tarjeta de la home */
  destacados: string[];
  // SEO: título (~60 caracteres) y descripción (~155) para Google
  seoTitle: string;
  seoDescription: string;
  /** Párrafos de presentación debajo del título */
  intro: string[];
  /** Imagen para la tarjeta del listado y para compartir el enlace */
  portada?: string;
  secciones: Seccion[];
};

// Los nombres de archivo describen la foto: Google Imágenes los usa para entenderla
const foto = (slug: string, archivo: string, alt: string): Foto => ({
  src: `/servicios/${slug}/${archivo}.jpg`,
  alt,
});

const video = (slug: string, archivo: string, titulo: string): Video => ({
  src: `/servicios/${slug}/${archivo}.mp4`,
  poster: `/servicios/${slug}/${archivo}.jpg`,
  titulo,
});

export const servicios: Servicio[] = [
  // ───────────────────────────── SISTEMAS DE RIEGO ─────────────────────────────
  {
    slug: "sistemas-de-riego",
    titulo: "Sistemas de riego",
    resumen:
      "Diseño e instalación de sistemas de riego automáticos eficientes para jardines y espacios verdes, optimizando el uso del agua.",
    destacados: ["Riego por aspersión", "Riego por goteo", "Programación automática", "Sensores de lluvia", "Módulo Wifi"],
    seoTitle: "Instalación de riego automático en zona oeste | Riegomax",
    seoDescription:
      "Diseño e instalación de sistemas de riego automático por aspersión y goteo en Moreno y zona oeste de Buenos Aires. Riego eficiente para tu jardín.",
    portada: "/servicios/sistemas-de-riego/instalacion-caneria-riego-zanja-cesped.jpg",
    intro: [
      "Un sistema de riego automático mantiene el jardín verde todo el año sin que tengas que estar pendiente de la manguera. Riega a la hora indicada, la cantidad justa y en el lugar correcto, aunque estés de viaje.",
      "En Riegomax diseñamos e instalamos sistemas de riego por aspersión y por goteo para casas, quintas y barrios de Moreno y toda la zona oeste. Nos ocupamos de todo el proceso: el diseño, la instalación de la cañería y las válvulas, y la programación final.",
    ],
    secciones: [
      {
        titulo: "Por qué conviene un riego automático",
        parrafos: [
          "Regar a mano lleva tiempo y casi nunca es parejo: algunos sectores quedan con charcos y otros se secan. Un sistema automático reparte el agua de forma uniforme y riega en los horarios en que se evapora menos, temprano a la mañana o a la noche.",
          "Además, al regar solo lo necesario se ahorra agua. Con un sensor de lluvia, el sistema suspende el riego cuando llueve, y con un módulo Wifi podés controlarlo desde el celular.",
        ],
        lista: [
          "Riego parejo en todo el jardín",
          "Menos consumo de agua",
          "Funciona solo, aunque no estés en casa",
          "Césped y plantas más sanos",
        ],
      },
      {
        titulo: "Diseño por sectores",
        parrafos: [
          "Antes de abrir la primera zanja, recorremos el terreno. No necesita la misma agua un césped a pleno sol que un cantero a la sombra de un árbol, así que dividimos el jardín en sectores y cada uno riega con su propio tiempo.",
          "También medimos la presión y el caudal de agua disponibles. Ese dato define cuántos aspersores pueden funcionar a la vez y si hace falta sumar una bomba.",
        ],
        foto: foto("sistemas-de-riego", "zanjeo-riego-junto-muro-piedra", "Técnico de Riegomax abriendo la zanja para la cañería de riego junto a un muro de piedra"),
      },
      {
        titulo: "Aspersión o goteo: qué usar en cada lugar",
        parrafos: [
          "La aspersión es ideal para el césped: los aspersores emergentes quedan escondidos bajo el pasto y suben solo cuando riegan, cubriendo toda la superficie.",
          "El goteo es mejor para canteros, cercos vivos y huertas. Lleva el agua directo a la raíz de cada planta con una manguera con goteros, sin mojar las hojas ni desperdiciar agua en los caminos. En la mayoría de los jardines combinamos los dos sistemas.",
        ],
        foto: foto("sistemas-de-riego", "manguera-riego-en-zanja", "Manguera de riego tendida en la zanja antes de taparla"),
        enlace: { texto: "Leé la comparación completa: riego por goteo vs aspersión", href: "/blog/riego-por-goteo-vs-aspersion" },
      },
      {
        titulo: "La instalación, paso a paso",
        parrafos: [
          "Marcamos el recorrido de cada sector y abrimos zanjas angostas, sacando el pasto con cuidado para volver a colocarlo al final. Por esas zanjas va la cañería principal que lleva el agua desde el colector de válvulas hasta cada aspersor.",
          "Una vez conectado todo, probamos cada sector antes de tapar, regulamos el alcance de los aspersores para que no rieguen paredes ni veredas y recién entonces cerramos las zanjas y reponemos el pasto.",
        ],
        foto: foto("sistemas-de-riego", "instalacion-caneria-riego-zanja-cesped", "Instalación de cañería de riego en una zanja larga abierta en el césped"),
        video: video("sistemas-de-riego", "instalacion-sistema-de-riego", "Proceso de instalación de un sistema de riego"),
      },
      {
        titulo: "Programador, sensor de lluvia y Wifi",
        parrafos: [
          "El programador es el cerebro del sistema: decide qué sector riega, a qué hora y durante cuánto tiempo. Lo dejamos configurado según la época del año y te explicamos cómo modificarlo.",
          "Si el sistema tiene bomba, el programador se conecta a un tablero eléctrico que la enciende junto con cada sector. Ese tablero también lo armamos nosotros.",
        ],
        enlace: { texto: "Ver tableros eléctricos de riego", href: "/servicios/tableros-electricos-de-riego" },
      },
      {
        titulo: "Ampliaciones y cambios en sistemas existentes",
        parrafos: [
          "Si ya tenés riego pero sumaste un cantero, cambiaste el diseño del jardín o hay un sector que queda seco, no hace falta rehacer todo. Agregamos aspersores, reubicamos los que quedaron mal ubicados y extendemos la cañería a las zonas nuevas.",
        ],
        foto: foto("sistemas-de-riego", "zanja-caneria-riego-jardin", "Zanja con cañería de riego junto al sector de estar del jardín"),
      },
    ],
  },

  // ───────────────────────────── JARDINERÍA ─────────────────────────────
  {
    slug: "jardineria",
    titulo: "Jardinería",
    resumen:
      "Servicios completos de jardinería para mantener espacios verdes saludables, prolijos y en óptimas condiciones durante todo el año.",
    destacados: ["Corte de césped", "Poda de plantas, arbustos y cercos vivos", "Perfilado y bordes", "Plantación y trasplantes", "Fertilización"],
    seoTitle: "Jardinería y corte de césped en zona oeste | Riegomax",
    seoDescription:
      "Corte de césped, poda de cercos y arbustos, plantación y fertilización en Moreno y zona oeste de Buenos Aires. Jardines prolijos todo el año.",
    portada: "/servicios/jardineria/plantacion-cerco-coniferas.jpg",
    intro: [
      "Un jardín lindo no se logra de una vez: necesita cortes regulares, podas en la época justa y plantas que reciban lo que necesitan. Ese cuidado constante es lo que hace la diferencia entre un espacio verde descuidado y uno que da ganas de usar.",
      "En Riegomax nos encargamos de la jardinería de casas y quintas de Moreno y la zona oeste: corte y bordeado del césped, poda de cercos y arbustos, plantación de nuevas especies y fertilización.",
    ],
    secciones: [
      {
        titulo: "Corte de césped",
        parrafos: [
          "Cortar seguido y a la altura correcta es lo que mantiene el césped denso y verde. Si se corta muy bajo, se debilita y aparecen las malezas; si se deja crecer demasiado, se apelmaza y pierde color.",
          "En cada corte también bordeamos los canteros y caminos y retiramos el pasto cortado, para que el jardín quede prolijo y no queden restos sobre el césped.",
        ],
        video: video("jardineria", "corte-de-cesped-quinta-ituzaingo", "Corte de césped en una quinta de Ituzaingó"),
      },
      {
        titulo: "Poda de cercos, arbustos y enredaderas",
        parrafos: [
          "Cada planta tiene su momento de poda. Podar a tiempo estimula brotes nuevos, mantiene la forma y evita que cercos y enredaderas invadan caminos o se pongan ralos en la base.",
          "Retiramos ramas secas, hojas amarillas y flores marchitas, y damos forma a los cercos vivos para que crezcan parejos y tupidos.",
        ],
        foto: foto("jardineria", "poda-enredadera-muro", "Enredadera podada que cubre un muro de forma pareja junto al césped"),
      },
      {
        titulo: "Plantación de cercos y nuevas especies",
        parrafos: [
          "Cuando hace falta privacidad o cubrir un alambrado, un cerco vivo es la mejor opción. Elegimos especies que se adapten al lugar, preparamos el pozo con tierra fértil y dejamos la distancia justa entre plantas para que crezcan sanas y cierren el cerco con el tiempo.",
        ],
        foto: foto("jardineria", "plantacion-cerco-coniferas", "Plantación de un cerco de coníferas con tierra fértil"),
      },
      {
        titulo: "Trasplantes y fertilización",
        parrafos: [
          "Si una planta quedó en un lugar donde no prospera, la trasplantamos a uno mejor cuidando sus raíces. También renovamos canteros y sumamos arbustos donde el jardín lo necesita.",
          "La fertilización le devuelve al suelo los nutrientes que el césped y las plantas van consumiendo, y se nota en el color y en el crecimiento.",
        ],
        foto: foto("jardineria", "plantacion-arbusto-muro-ladrillo", "Plantación de un arbusto junto a un muro de ladrillo"),
      },
      {
        titulo: "Jardinería y riego, juntos",
        parrafos: [
          "Un jardín bien cuidado necesita agua en la cantidad justa. Si tu jardín todavía se riega a mano, podemos instalar un sistema de riego automático que mantenga el césped y las plantas en buen estado entre visita y visita.",
        ],
        enlace: { texto: "Ver sistemas de riego", href: "/servicios/sistemas-de-riego" },
      },
    ],
  },

  // ───────────────────────────── PAISAJISMO ─────────────────────────────
  {
    slug: "paisajismo",
    titulo: "Paisajismo",
    resumen:
      "Diseño y creación de espacios exteriores únicos que combinan estética, funcionalidad y armonía natural.",
    destacados: ["Diseño de jardines", "Selección de plantas", "Creación de canteros", "Nivelación de terreno", "Elementos decorativos"],
    seoTitle: "Paisajismo y diseño de jardines en zona oeste | Riegomax",
    seoDescription:
      "Diseño de jardines, canteros con piedras y chips, nivelación de terreno y colocación de grama bahiana en Moreno y zona oeste de Buenos Aires.",
    portada: "/servicios/paisajismo/cantero-flores-guardacantero.jpg",
    intro: [
      "El paisajismo transforma un terreno en un espacio para disfrutar. No se trata solo de poner plantas: se trata de elegir las adecuadas para cada lugar y combinarlas con canteros, piedras, césped y caminos para que el jardín funcione y se vea bien todo el año.",
      "En Riegomax hacemos proyectos de paisajismo completos en Moreno y la zona oeste, desde la nivelación del terreno y la colocación del césped hasta el armado de canteros y la plantación final.",
    ],
    secciones: [
      {
        titulo: "Elegir las plantas adecuadas",
        parrafos: [
          "Una planta en el lugar equivocado sufre: se quema al sol, se pudre por exceso de humedad o no florece. Por eso elegimos las especies según la luz, el suelo y el espacio disponible, y pensando en cuánto mantenimiento vas a querer darle al jardín.",
          "Las gramíneas ornamentales, por ejemplo, aportan movimiento y textura con muy poco cuidado, y se adaptan bien a lugares soleados.",
        ],
        foto: foto("paisajismo", "graminea-ornamental-plantada", "Gramínea ornamental recién plantada en el césped"),
      },
      {
        titulo: "Canteros con flores, piedras y guardacanteros",
        parrafos: [
          "Los canteros ordenan el jardín y le dan color. Los delimitamos con guardacanteros para que el césped no los invada, los rellenamos con tierra fértil y combinamos plantas de distintas alturas y floraciones.",
          "Para que el cantero sea fácil de mantener, colocamos una manta antimalezas debajo de las piedras o los chips decorativos. Así no crecen yuyos y la tierra conserva mejor la humedad.",
        ],
        foto: foto("paisajismo", "cantero-flores-guardacantero", "Cantero con flores blancas delimitado por un guardacantero"),
      },
      {
        titulo: "Manta antimalezas y piedras decorativas",
        parrafos: [
          "En sectores donde no queremos césped, como el costado de la casa o el contorno de un cerco, cubrimos el suelo con manta antimalezas y una capa de piedras. Es una terminación prolija, que deja pasar el agua de lluvia y casi no necesita mantenimiento.",
        ],
        foto: foto("paisajismo", "cantero-piedras-manta-antimalezas", "Relleno de un cantero lateral con piedras sobre manta antimalezas"),
      },
      {
        titulo: "Nivelación y colocación de grama bahiana",
        parrafos: [
          "Antes de colocar césped hay que nivelar el terreno: así el agua no se junta en un rincón y el corte queda parejo. Retiramos las malezas, rellenamos los bajos con tierra y dejamos la superficie lista.",
          "La grama bahiana es una de las opciones más elegidas en la zona: resiste bien el sol y el pisoteo y, una vez establecida, forma un césped denso y resistente.",
        ],
        foto: foto("paisajismo", "grama-bahiana-recien-colocada", "Grama bahiana recién colocada a lo largo de un cerco"),
        video: video("paisajismo", "plantacion-agapanthus-paisajismo", "Plantación de agapanthus en un proyecto de paisajismo"),
      },
      {
        titulo: "Cercos vivos y árboles",
        parrafos: [
          "Los cercos de coníferas dan privacidad y estructura al jardín. Los plantamos alineados y con la separación justa para que, cuando crezcan, formen una pared verde continua.",
        ],
        foto: foto("paisajismo", "hilera-coniferas-plantadas", "Hilera de coníferas recién plantadas sobre el césped"),
      },
      {
        titulo: "El resultado: un jardín para disfrutar",
        parrafos: [
          "Con el césped establecido, los canteros armados y las plantas creciendo, el jardín queda listo para usar. Para que se mantenga así, te recomendamos sumarle riego automático y un mantenimiento periódico.",
        ],
        foto: foto("paisajismo", "cesped-grama-bahiana-establecido", "Césped de grama bahiana ya establecido junto a la casa"),
        enlace: { texto: "Ver mantenimiento de jardines", href: "/servicios/mantenimiento" },
      },
    ],
  },

  // ───────────────────────────── MANTENIMIENTO ─────────────────────────────
  {
    slug: "mantenimiento",
    titulo: "Mantenimiento",
    resumen:
      "Mantenimiento preventivo y correctivo de jardines para garantizar su cuidado y durabilidad.",
    destacados: ["Limpieza de terrenos", "Desmalezado", "Mantenimiento periódico"],
    seoTitle: "Mantenimiento de jardines y limpieza de terrenos | Riegomax",
    seoDescription:
      "Limpieza de terrenos, desmalezado, mantenimiento periódico de jardines y reparación de riego en Moreno y zona oeste de Buenos Aires.",
    portada: "/servicios/mantenimiento/jardin-limpio-despues-del-mantenimiento.jpg",
    intro: [
      "Un jardín descuidado se recupera. Con una buena limpieza, el terreno vuelve a ser un espacio para usar, y con un mantenimiento periódico se mantiene así.",
      "En Riegomax hacemos limpieza de terrenos, desmalezado y mantenimiento de jardines en Moreno y la zona oeste, y revisamos y reparamos el sistema de riego cuando deja de funcionar bien.",
    ],
    secciones: [
      {
        titulo: "Limpieza de terrenos",
        parrafos: [
          "Cuando un terreno estuvo abandonado un tiempo, se llena de yuyos, ramas y restos. Lo despejamos por completo: cortamos la maleza, sacamos ramas y basura y dejamos la tierra lista para lo que venga, sea un jardín nuevo o simplemente un espacio limpio.",
        ],
        foto: foto("mantenimiento", "jardin-con-malezas-antes-del-mantenimiento", "Jardín con malezas y pasto crecido antes de la limpieza"),
      },
      {
        titulo: "El mismo jardín, después",
        parrafos: [
          "Así quedó ese mismo jardín después del trabajo: el pasto cortado, los bordes definidos y el espacio otra vez disponible para usar. Una limpieza a fondo es muchas veces el primer paso antes de un proyecto de paisajismo.",
        ],
        foto: foto("mantenimiento", "jardin-limpio-despues-del-mantenimiento", "El mismo jardín limpio y despejado después del mantenimiento"),
        enlace: { texto: "Ver paisajismo", href: "/servicios/paisajismo" },
      },
      {
        titulo: "Retiro de restos y preparación del suelo",
        parrafos: [
          "En terrenos con ramas, escombros o restos de obra, primero retiramos todo lo que no sirve. Después emparejamos la tierra para que el agua escurra bien y el terreno quede preparado para sembrar o colocar césped.",
        ],
        foto: foto("mantenimiento", "terreno-con-restos-antes-de-limpieza", "Terreno con ramas y restos antes de la limpieza"),
      },
      {
        titulo: "Terreno despejado y desmalezado",
        parrafos: [
          "Así quedó ese terreno después del trabajo: sin restos y con la tierra emparejada.",
          "Las malezas compiten con el césped y las plantas por el agua y los nutrientes. Las sacamos de canteros, caminos y bordes, y te recomendamos cómo evitar que vuelvan, por ejemplo con manta antimalezas en los canteros.",
        ],
        foto: foto("mantenimiento", "terreno-limpio-despues-de-limpieza", "Terreno despejado y emparejado después de retirar los restos"),
      },
      {
        titulo: "Mantenimiento periódico",
        parrafos: [
          "Con visitas regulares el jardín nunca llega a desbordarse: cortamos el césped, bordeamos, podamos lo que hace falta y revisamos que todo esté en orden. La frecuencia se adapta a la época del año, porque en primavera y verano todo crece más rápido.",
        ],
      },
      {
        titulo: "Reparación del riego",
        parrafos: [
          "Un aspersor roto, una pérdida en la cañería o una válvula que no abre hacen que un sector se seque o se encharque. Localizamos la falla, cambiamos la pieza dañada y probamos el sistema para que vuelva a regar parejo.",
        ],
        video: video("mantenimiento", "reparacion-sistema-de-riego", "Reparación de un sistema de riego"),
        enlace: { texto: "Ver sistemas de riego", href: "/servicios/sistemas-de-riego" },
      },
    ],
  },

  // ───────────────────────────── BOMBAS DE AGUA ─────────────────────────────
  {
    slug: "bombas-de-agua",
    titulo: "Bombas de agua",
    resumen:
      "Instalación de bombas de agua presurizadoras, centrífugas y periféricas para mejorar la presión y distribución del agua.",
    destacados: ["Instalaciones domiciliarias", "Alimentación de tanques elevados", "Automatización de bombas"],
    seoTitle: "Instalación de bombas de agua en zona oeste | Riegomax",
    seoDescription:
      "Instalación de bombas presurizadoras, centrífugas y periféricas, alimentación de tanques y automatización de bombas en Moreno y zona oeste.",
    intro: [
      "Cuando el agua sale con poca presión, el tanque no llega a llenarse o el riego no alcanza a cubrir todo el jardín, la solución suele ser una bomba bien elegida y bien instalada.",
      "En Riegomax instalamos bombas de agua para casas y sistemas de riego en Moreno y la zona oeste, y las automatizamos para que arranquen y corten solas.",
    ],
    secciones: [
      {
        titulo: "Bombas presurizadoras",
        parrafos: [
          "Una bomba presurizadora aumenta la presión del agua en la casa: la ducha sale con fuerza y se pueden usar varias canillas a la vez sin que baje el caudal. Se instala a la salida del tanque y arranca sola cuando se abre una canilla.",
        ],
      },
      {
        titulo: "Bombas centrífugas y periféricas",
        parrafos: [
          "Las bombas centrífugas mueven mucho caudal y son las indicadas para sistemas de riego con varios aspersores funcionando a la vez. Las periféricas dan más presión con menos caudal y sirven para instalaciones domiciliarias más chicas.",
          "Elegimos el tipo y la potencia según el uso, la distancia y la altura a la que hay que llevar el agua.",
        ],
      },
      {
        titulo: "Alimentación de tanques elevados",
        parrafos: [
          "Si la presión de la red no alcanza para llenar el tanque, instalamos una bomba que lo cargue automáticamente, con un flotante que la corta cuando el tanque está lleno.",
        ],
      },
      {
        titulo: "Automatización de bombas",
        parrafos: [
          "Una bomba automatizada se enciende y se apaga sola, protegida contra el funcionamiento en seco y las fallas eléctricas. En sistemas de riego, la conectamos al programador a través de un tablero eléctrico para que arranque junto con cada sector.",
        ],
        enlace: { texto: "Ver tableros eléctricos de riego", href: "/servicios/tableros-electricos-de-riego" },
      },
    ],
  },

  // ───────────────────────────── TABLEROS ELÉCTRICOS ─────────────────────────────
  {
    slug: "tableros-electricos-de-riego",
    titulo: "Tableros eléctricos de riego",
    resumen:
      "Armado desde cero y mantenimiento de tableros eléctricos para sistemas de riego, para que el riego y la bomba funcionen de forma segura y automática.",
    destacados: ["Armado de tableros desde cero", "Mantenimiento y reparación", "Conexión de programador y bomba", "Protecciones eléctricas"],
    seoTitle: "Tableros eléctricos para riego: armado y mantenimiento | Riegomax",
    seoDescription:
      "Armado desde cero y mantenimiento de tableros eléctricos de riego: conexión de programador, bomba y protecciones. Moreno y zona oeste de Buenos Aires.",
    portada: "/servicios/tableros-electricos-de-riego/programador-riego-y-tablero-bomba.jpg",
    intro: [
      "En un sistema de riego con bomba, el tablero eléctrico es la pieza que une todo: recibe la orden del programador y enciende la bomba en el momento justo para que cada sector riegue con la presión necesaria.",
      "En Riegomax armamos tableros eléctricos de riego desde cero y reparamos tableros existentes en Moreno y la zona oeste, para que el sistema funcione de forma segura y automática.",
    ],
    secciones: [
      {
        titulo: "Qué hace un tablero de riego",
        parrafos: [
          "El programador de riego maneja señales de baja tensión y no puede encender una bomba por sí solo. El tablero es el que recibe esa señal y activa la bomba a través de un contactor, con las protecciones necesarias para que el motor no se dañe.",
          "En la foto se ve un tablero terminado: a la izquierda el programador de riego y a la derecha el tablero de la bomba, cada uno en su caja estanca para protegerlos del agua y la humedad.",
        ],
        foto: foto("tableros-electricos-de-riego", "programador-riego-y-tablero-bomba", "Programador de riego y tablero de la bomba instalados en cajas estancas"),
      },
      {
        titulo: "Armado desde cero",
        parrafos: [
          "Cuando instalamos un sistema nuevo, armamos el tablero completo: elegimos la caja, montamos las protecciones, hacemos el cableado hacia la bomba y el programador, y dejamos todo identificado para que cualquier revisión futura sea simple.",
        ],
        foto: foto("tableros-electricos-de-riego", "tablero-electrico-riego-armado", "Tablero eléctrico de riego abierto durante el armado y cableado"),
      },
      {
        titulo: "Protecciones eléctricas",
        parrafos: [
          "Un tablero bien armado protege la bomba y a las personas. Incluye las protecciones para cortar la corriente ante una sobrecarga o un cortocircuito, de modo que una falla no termine quemando el motor.",
        ],
        lista: [
          "Protección del motor de la bomba",
          "Corte ante sobrecargas y cortocircuitos",
          "Caja estanca apta para exterior",
          "Cableado ordenado e identificado",
        ],
      },
      {
        titulo: "Conexión del programador",
        parrafos: [
          "Conectamos el programador al tablero y a las válvulas de cada sector y probamos que la bomba arranque y corte junto con el riego. Así el sistema queda funcionando solo, sin que tengas que encender nada a mano.",
        ],
        video: video("tableros-electricos-de-riego", "programador-y-tablero-de-riego", "Programador y tablero de riego instalados"),
        enlace: { texto: "Ver sistemas de riego", href: "/servicios/sistemas-de-riego" },
      },
      {
        titulo: "Mantenimiento y reparación",
        parrafos: [
          "Si la bomba no arranca, se corta sola o el riego no funciona aunque el programador esté encendido, el problema suele estar en el tablero. Revisamos las conexiones y los componentes, reemplazamos lo que esté dañado y dejamos el sistema funcionando.",
        ],
      },
    ],
  },

  // ───────────────────────────── CÉSPED SINTÉTICO ─────────────────────────────
  {
    slug: "cesped-sintetico",
    titulo: "Césped sintético",
    resumen:
      "Colocación de pasto sintético para patios, jardines y espacios donde el césped natural no prospera, con un acabado prolijo y sin mantenimiento de riego.",
    destacados: ["Preparación y nivelación del terreno", "Colocación y unión de paños", "Terminación de bordes"],
    seoTitle: "Colocación de césped sintético en zona oeste | Riegomax",
    seoDescription:
      "Colocación de pasto sintético en patios y jardines: preparación del terreno, nivelación, unión de paños y terminación de bordes. Moreno y zona oeste.",
    portada: "/servicios/cesped-sintetico/patio-cesped-sintetico-terminado.jpg",
    intro: [
      "El césped sintético es la solución para patios con poca luz, espacios chicos o lugares donde el césped natural no crece bien. Se mantiene verde todo el año sin cortar, sin regar y sin barro.",
      "En Riegomax colocamos césped sintético en casas de Moreno y la zona oeste. A continuación te mostramos, con un trabajo real, cómo pasamos de un patio de tierra a un patio verde listo para usar.",
    ],
    secciones: [
      {
        titulo: "El punto de partida",
        parrafos: [
          "Este patio entre medianeras era de tierra. El primer paso fue retirar la tierra suelta y definir el nivel final, usando estacas como referencia.",
        ],
        foto: foto("cesped-sintetico", "patio-tierra-estacas-nivel", "Patio de tierra con estacas para marcar el nivel antes de colocar el césped sintético"),
      },
      {
        titulo: "Preparación de la base",
        parrafos: [
          "La clave de un buen césped sintético está debajo: si la base no está firme y nivelada, con el tiempo aparecen ondas y pozos que se notan a simple vista. Por eso emparejamos y compactamos la tierra antes de seguir.",
          "También tenemos en cuenta el desagüe, para que el agua de lluvia escurra y no se acumule debajo del césped.",
        ],
        foto: foto("cesped-sintetico", "base-tierra-compactada-cesped-sintetico", "Terreno emparejado y compactado como base del césped sintético"),
      },
      {
        titulo: "Capa de arena nivelada",
        parrafos: [
          "Sobre la tierra compactada colocamos una capa de arena y la nivelamos con regla. Esta capa es la que deja la superficie perfectamente plana y permite que el agua drene a través del césped.",
        ],
        foto: foto("cesped-sintetico", "base-arena-nivelada-cesped-sintetico", "Capa de arena nivelada lista para colocar los paños de césped sintético"),
      },
      {
        titulo: "Colocación de los paños",
        parrafos: [
          "Extendemos los paños de césped sintético, todos con la fibra orientada hacia el mismo lado para que el color se vea parejo, y los unimos de forma que las juntas no se noten. Después recortamos y fijamos los bordes contra los muros y el solado.",
        ],
        video: video("cesped-sintetico", "cesped-sintetico-colocado", "Césped sintético recién colocado"),
      },
      {
        titulo: "El resultado",
        parrafos: [
          "El mismo patio, terminado: una superficie verde, pareja y limpia, que se puede usar todo el año sin mantenimiento de riego ni corte.",
        ],
        foto: foto("cesped-sintetico", "patio-cesped-sintetico-terminado", "Patio terminado con césped sintético"),
      },
      {
        titulo: "¿Sintético o natural?",
        parrafos: [
          "El césped sintético conviene en patios con sombra, espacios chicos o lugares de mucho uso donde el pasto natural no aguanta. Para jardines grandes y soleados, un césped natural con riego automático suele ser la mejor opción.",
        ],
        enlace: { texto: "Ver colocación de grama bahiana en paisajismo", href: "/servicios/paisajismo" },
      },
    ],
  },

  // ───────────────────────────── ILUMINACIÓN ─────────────────────────────
  {
    slug: "iluminacion-de-jardines",
    titulo: "Iluminación de jardines",
    resumen:
      "Venta y colocación de luminarias para exteriores, para iluminar jardines, caminos y canteros y disfrutar del espacio también de noche.",
    destacados: ["Venta de luminarias de exterior", "Instalación y conexión", "Iluminación de caminos y canteros"],
    seoTitle: "Iluminación de jardines: venta y colocación | Riegomax",
    seoDescription:
      "Venta y colocación de luminarias de exterior para jardines, caminos y canteros en Moreno y zona oeste de Buenos Aires: balizas de pie y spots.",
    portada: "/servicios/iluminacion-de-jardines/spot-iluminacion-palmera.jpg",
    intro: [
      "Con una buena iluminación, el jardín se puede disfrutar también de noche. La luz resalta árboles y canteros, marca los caminos y suma seguridad en los accesos de la casa.",
      "En Riegomax vendemos e instalamos luminarias de exterior en Moreno y la zona oeste: spots para destacar árboles y plantas, y balizas de pie para caminos y canteros.",
    ],
    secciones: [
      {
        titulo: "Spots para destacar árboles y plantas",
        parrafos: [
          "Un spot colocado al pie de un árbol proyecta la luz hacia arriba y resalta la textura del tronco y el follaje. Es una forma simple de que el jardín tenga profundidad y se vea distinto de noche.",
          "En este trabajo instalamos spots al pie de las palmeras, entre las plantas del cantero, para que la luz ilumine el tronco sin encandilar.",
        ],
        foto: foto("iluminacion-de-jardines", "spot-iluminacion-palmera", "Spot de exterior iluminando el tronco de una palmera"),
      },
      {
        titulo: "Luz que se integra al cantero",
        parrafos: [
          "La ubicación es tan importante como la luminaria. Ubicamos cada spot entre las plantas para que de día casi no se vea y de noche ilumine justo lo que queremos destacar.",
        ],
        foto: foto("iluminacion-de-jardines", "spot-entre-plantas-palmera", "Spot instalado entre las plantas al pie de una palmera"),
      },
      {
        titulo: "Balizas de pie para caminos",
        parrafos: [
          "Las balizas de pie iluminan hacia abajo y marcan el recorrido de caminos y senderos. Además de ser decorativas, ayudan a circular de noche con seguridad.",
          "Las instalamos sobre una base firme para que queden derechas y estables, con la conexión eléctrica protegida y apta para exterior.",
        ],
        foto: foto("iluminacion-de-jardines", "baliza-de-pie-en-cantero", "Baliza de pie instalada sobre una base en un cantero"),
      },
      {
        titulo: "Iluminación de canteros y cercos",
        parrafos: [
          "Una baliza frente a un cerco verde ilumina las hojas y le da otra presencia al jardín de noche. Combinando balizas y spots se logra una iluminación pareja, sin zonas oscuras.",
        ],
        foto: foto("iluminacion-de-jardines", "baliza-de-pie-frente-a-cerco", "Baliza de pie encendida frente a un cerco verde"),
        video: video("iluminacion-de-jardines", "luminarias-de-jardin", "Luminarias instaladas en un jardín"),
      },
      {
        titulo: "Venta e instalación",
        parrafos: [
          "Te asesoramos sobre qué luminaria conviene para cada lugar del jardín, te la vendemos y la instalamos con su conexión eléctrica. Así el trabajo queda completo y funcionando.",
        ],
        lista: [
          "Asesoramiento según el espacio",
          "Venta de luminarias de exterior",
          "Instalación y conexión eléctrica",
          "Luminarias aptas para intemperie",
        ],
      },
    ],
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
