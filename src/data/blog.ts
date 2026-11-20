import art1 from "../assets/blog/zanja-caneria-riego-cesped.jpg";
import art2 from "../assets/blog/aspersor-emergente-regando-cesped.jpg";
import art3 from "../assets/blog/manguera-riego-colocada-en-zanja.jpg";
import art4 from "../assets/blog/conexion-valvulas-colector-riego.jpg";
import art5 from "../assets/blog/programador-riego-tablero-electrico.jpg";
import art6 from "../assets/blog/ajuste-valvulas-colector-riego.jpg";
import blogMantaYCespedSintetico from "../assets/blog/manta-geotextil-y-cesped-sintetico.jpg";
import blogPatioDeTierra from "../assets/blog/patio-de-tierra-para-cesped-sintetico.jpg";
import blogGramaRecienColocada from "../assets/blog/grama-bahiana-recien-colocada-junto-a-vereda.jpg";
import blogGramaDeCerca from "../assets/blog/grama-bahiana-de-cerca.jpg";
import blogCanteroChips from "../assets/blog/cantero-con-chips-y-guardacantero.jpg";
import blogGranzaSobreManta from "../assets/blog/granza-sobre-manta-antimalezas.jpg";
import blogCespedJuntoACerco from "../assets/blog/cesped-junto-a-cerco-de-alambre.jpg";
import blogJardinAbandonado from "../assets/blog/jardin-abandonado-con-yuyos.jpg";
import blogTerrenoEmparejado from "../assets/blog/terreno-emparejado-antes-del-cesped.jpg";

/**
 * Artículos del blog de Riegomax.
 * Están escritos para quien tiene un jardín en casa o en una quinta (el cliente de Riegomax),
 * y cada uno termina enlazando a los servicios relacionados.
 */

export const categorias = [
  "Todos",
  "Guías",
  "Instalación",
  "Ahorro de Agua",
  "Automatización",
  "Mantenimiento",
  "Jardinería",
  "Paisajismo",
  "Iluminación",
] as const;

export type Bloque =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "h2"; texto: string; id: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "imagen"; src: string; alt: string }
  | { tipo: "destacado"; variante: "consejo" | "advertencia"; titulo: string; texto: string }
  | { tipo: "tabla"; encabezados: string[]; filas: string[][] }
  | { tipo: "enlaces"; titulo: string; items: { texto: string; detalle: string; href: string }[] };

export type Articulo = {
  slug: string;
  titulo: string;
  categoria: string;
  fecha: string;
  lectura: string;
  descripcion: string;
  /** Imagen de portada. Si no hay una foto real adecuada, se deja sin imagen. */
  imagen?: string;
  intro: string;
  contenido: Bloque[];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  palabrasClave?: string[];
};

export const articulos: Articulo[] = [
  // ═════════════════════════ ARTÍCULOS SOBRE LOS DEMÁS SERVICIOS ═════════════════════════

  // ─────────────────────────────────────────────────────────────  Césped sintético
  {
    slug: "cesped-sintetico-o-natural",
    titulo: "Césped sintético o natural: cuál conviene para tu patio",
    seoTitle: "Césped sintético o natural: cuál conviene | Riegomax",
    seoDescription:
      "Ventajas y desventajas del césped sintético y del natural: sol, sombra, uso, mantenimiento y agua. Cuándo conviene cada uno en tu patio o jardín.",
    palabrasClave: [
      "césped sintético o natural",
      "pasto sintético ventajas y desventajas",
      "conviene el césped sintético",
      "césped sintético para patio",
    ],
    categoria: "Guías",
    fecha: "16 Noviembre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Sol, sombra, uso y mantenimiento: una comparación honesta para decidir qué césped conviene en tu espacio.",
    imagen: blogMantaYCespedSintetico,
    intro:
      "Cada vez más gente nos pregunta si conviene poner césped sintético. La respuesta depende del lugar: hay patios donde el sintético es la mejor solución y jardines donde un césped natural bien cuidado no tiene comparación. Te contamos en qué casos conviene cada uno.",
    contenido: [
      { tipo: "h2", texto: "Dónde brilla el césped sintético", id: "sintetico" },
      {
        tipo: "parrafo",
        texto:
          "El sintético es la solución para los lugares donde el césped natural no prospera: patios con poca luz, espacios chicos entre medianeras, zonas de mucho pisoteo o terrazas. Se mantiene verde todo el año, no se corta, no se riega y no hace barro.",
      },
      {
        tipo: "lista",
        items: [
          "Patios con sombra o con pocas horas de sol directo.",
          "Espacios chicos donde no vale la pena tener cortadora.",
          "Zonas de juego de chicos o mascotas, donde el pasto natural se gasta.",
          "Casas de fin de semana, donde nadie riega ni corta durante la semana.",
        ],
      },

      { tipo: "h2", texto: "Dónde conviene el césped natural", id: "natural" },
      {
        tipo: "parrafo",
        texto:
          "En jardines grandes y soleados, el césped natural sigue siendo la mejor opción. Es fresco al pisar aun en pleno verano, absorbe el agua de lluvia y forma parte del ecosistema del jardín. Con un riego automático y cortes regulares, mantenerlo no lleva tanto trabajo como parece.",
      },

      { tipo: "h2", texto: "Comparación lado a lado", id: "comparacion" },
      {
        tipo: "tabla",
        encabezados: ["", "Sintético", "Natural"],
        filas: [
          ["Sombra", "Funciona igual", "Sufre y se ralea"],
          ["Riego", "No necesita", "Necesita, idealmente automático"],
          ["Corte", "No necesita", "Regular, sobre todo en verano"],
          ["Temperatura al sol", "Se calienta bastante", "Se mantiene fresco"],
          ["Pisoteo intenso", "Lo soporta bien", "Puede gastarse"],
          ["Lluvia", "Drena por la base preparada", "Absorbe el agua"],
        ],
      },
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "El sintético no es para todo",
        texto:
          "En un patio a pleno sol, el césped sintético se calienta mucho en verano. Si el espacio recibe sol todo el día y va a usarse descalzo, conviene pensarlo dos veces o combinarlo con zonas de sombra.",
      },

      { tipo: "h2", texto: "La base hace la diferencia", id: "base" },
      {
        tipo: "parrafo",
        texto:
          "Un sintético mal colocado se nota rápido: aparecen ondas, charcos y uniones que se despegan. La calidad del resultado depende sobre todo de la base: un terreno firme, nivelado y con buen drenaje, cubierto con una manta antimalezas antes de extender los paños.",
      },
      {
        tipo: "parrafo",
        texto:
          "Si te decidiste por el sintético, en este otro artículo te explicamos cómo es la colocación paso a paso.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Colocación de césped sintético",
            detalle: "Preparación de la base, colocación de paños y terminación.",
            href: "/servicios/cesped-sintetico",
          },
          {
            texto: "Cómo se coloca el césped sintético",
            detalle: "El paso a paso de una colocación real.",
            href: "/blog/como-se-coloca-el-cesped-sintetico",
          },
          {
            texto: "Grama bahiana",
            detalle: "La opción natural más elegida en zona oeste.",
            href: "/blog/grama-bahiana-como-se-coloca",
          },
        ],
      },
    ],
  },

  {
    slug: "como-se-coloca-el-cesped-sintetico",
    titulo: "Cómo se coloca el césped sintético: el paso a paso",
    seoTitle: "Cómo se coloca el césped sintético paso a paso | Riegomax",
    seoDescription:
      "Así se coloca el césped sintético: retiro de tierra, base compactada y nivelada, manta antimalezas, colocación y unión de paños y terminación de bordes.",
    palabrasClave: [
      "cómo se coloca el césped sintético",
      "colocación de césped sintético",
      "base para césped sintético",
      "instalar pasto sintético",
    ],
    categoria: "Instalación",
    fecha: "9 Noviembre 2026",
    lectura: "6 min lectura",
    descripcion:
      "De un patio de tierra a un césped verde y parejo: cada etapa de la colocación y por qué importa.",
    imagen: blogPatioDeTierra,
    intro:
      "Colocar césped sintético parece simple: extender un rollo verde y listo. Pero la diferencia entre un trabajo que dura años y uno que a los meses tiene ondas y charcos está en lo que no se ve. Te mostramos cómo lo hacemos, etapa por etapa.",
    contenido: [
      { tipo: "h2", texto: "1. Retirar la tierra suelta", id: "retirar" },
      {
        tipo: "parrafo",
        texto:
          "El primer paso es sacar el pasto viejo, las raíces y la tierra suelta de la superficie. Si se coloca el sintético sobre tierra blanda, con el tiempo se hunde en los lugares por donde más se camina.",
      },

      { tipo: "h2", texto: "2. Definir el nivel y la pendiente", id: "nivel" },
      {
        tipo: "parrafo",
        texto:
          "Con estacas e hilo se marca el nivel final. No conviene dejarlo perfectamente plano: una pendiente suave hacia la rejilla o el desagüe hace que el agua de lluvia escurra en vez de acumularse debajo del césped.",
      },

      { tipo: "h2", texto: "3. Compactar la base", id: "compactar" },
      {
        tipo: "parrafo",
        texto:
          "La base se compacta hasta que quede firme. Sobre ella se coloca una capa de arena o material fino que se nivela con regla. Esta es la etapa que define el resultado: cualquier pozo o lomo que quede acá se va a ver después a través del césped.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "Probá caminando",
        texto:
          "Antes de seguir, conviene caminar toda la superficie. Si el pie marca la base, todavía le falta compactación.",
      },

      { tipo: "h2", texto: "4. Manta antimalezas", id: "manta" },
      {
        tipo: "parrafo",
        texto:
          "Sobre la base va una manta geotextil. Deja pasar el agua pero frena el crecimiento de malezas, que de otra forma terminarían asomando entre las fibras del césped.",
      },

      { tipo: "h2", texto: "5. Colocar y unir los paños", id: "panos" },
      {
        tipo: "parrafo",
        texto:
          "Los paños se extienden todos con la fibra orientada hacia el mismo lado. Si uno queda al revés, se nota a la vista como si fuera de otro color. Las uniones se pegan sobre una cinta especial, cuidando que las fibras no queden atrapadas para que la junta no se vea.",
      },

      { tipo: "h2", texto: "6. Terminación de bordes", id: "bordes" },
      {
        tipo: "parrafo",
        texto:
          "Por último se recortan los bordes contra muros, solados y canteros y se fijan para que no se levanten. Según el tipo de césped, se agrega arena de relleno entre las fibras y se cepilla para que queden paradas.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Colocación de césped sintético",
            detalle: "Mirá fotos y video de un trabajo real.",
            href: "/servicios/cesped-sintetico",
          },
          {
            texto: "Césped sintético o natural",
            detalle: "Cuándo conviene cada uno.",
            href: "/blog/cesped-sintetico-o-natural",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────  Paisajismo
  {
    slug: "grama-bahiana-como-se-coloca",
    titulo: "Grama bahiana: por qué es tan elegida y cómo se coloca",
    seoTitle: "Grama bahiana: ventajas y cómo se coloca | Riegomax",
    seoDescription:
      "Por qué la grama bahiana es uno de los céspedes más elegidos en zona oeste, cómo se coloca en panes y qué cuidados necesita las primeras semanas.",
    palabrasClave: [
      "grama bahiana",
      "colocación de grama bahiana",
      "césped en panes",
      "qué césped poner en el jardín",
    ],
    categoria: "Paisajismo",
    fecha: "2 Noviembre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Resistente al sol, al pisoteo y a la falta de agua: qué tiene la grama bahiana y cómo lograr que se implante bien.",
    imagen: blogGramaRecienColocada,
    intro:
      "Cuando alguien quiere un césped resistente y de poco mantenimiento, la grama bahiana suele estar entre las primeras opciones. Te contamos por qué, en qué lugares conviene y cómo se coloca para que prenda bien.",
    contenido: [
      { tipo: "h2", texto: "Qué tiene de bueno la grama bahiana", id: "ventajas" },
      {
        tipo: "lista",
        items: [
          "Aguanta muy bien el sol fuerte del verano.",
          "Resiste el pisoteo, ideal para jardines con chicos y mascotas.",
          "Una vez establecida, tolera mejor la falta de riego que otros céspedes.",
          "Forma una carpeta densa que deja poco lugar a las malezas.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Su punto débil es la sombra: debajo de árboles grandes o en patios con pocas horas de sol se ralea. En esos lugares conviene otra especie o, en espacios chicos, evaluar el césped sintético.",
      },

      { tipo: "h2", texto: "Sembrar o colocar en panes", id: "panes" },
      {
        tipo: "parrafo",
        texto:
          "La grama se puede sembrar, pero tarda en cubrir y mientras tanto el terreno queda expuesto a las malezas y al barro. Colocarla en panes (tepes) da un césped verde desde el primer día y permite usar el jardín mucho antes.",
      },

      { tipo: "h2", texto: "Cómo se coloca", id: "colocacion" },
      {
        tipo: "parrafo",
        texto:
          "Primero se limpia el terreno de malezas y se nivela, rellenando los bajos con tierra para que el agua no se junte en un rincón. Después se colocan los panes bien juntos, trabados como ladrillos para que las uniones no coincidan, y se pasan con rodillo para que hagan buen contacto con la tierra.",
      },
      {
        tipo: "imagen",
        src: blogGramaDeCerca,
        alt: "Grama bahiana de cerca, con la carpeta densa que forma una vez implantada",
      },

      { tipo: "h2", texto: "Los cuidados de las primeras semanas", id: "cuidados" },
      {
        tipo: "parrafo",
        texto:
          "Las primeras semanas son las más importantes: los panes tienen que mantenerse húmedos hasta que las raíces se agarren al suelo. Después, el riego se espacia de a poco para que las raíces bajen a buscar el agua.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "La mejor época",
        texto:
          "La grama bahiana crece con el calor. Colocarla en primavera o verano hace que se implante mucho más rápido que en invierno, cuando está casi detenida.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Paisajismo",
            detalle: "Nivelación de terreno y colocación de grama bahiana.",
            href: "/servicios/paisajismo",
          },
          {
            texto: "Sistemas de riego",
            detalle: "Riego automático para que el césped se mantenga parejo.",
            href: "/servicios/sistemas-de-riego",
          },
          {
            texto: "Cada cuánto cortar el césped",
            detalle: "La altura justa para cada época.",
            href: "/blog/cada-cuanto-cortar-el-cesped",
          },
        ],
      },
    ],
  },

  {
    slug: "cantero-sin-malezas",
    titulo: "Cómo armar un cantero que no se llene de malezas",
    seoTitle: "Cómo armar un cantero sin malezas | Riegomax",
    seoDescription:
      "Guardacanteros, manta antimalezas, chips y piedras: cómo armar un cantero prolijo que no se llene de yuyos y casi no necesite mantenimiento.",
    palabrasClave: [
      "cantero sin malezas",
      "manta antimalezas",
      "guardacantero",
      "cantero con piedras",
      "cantero con chips",
    ],
    categoria: "Paisajismo",
    fecha: "26 Octubre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Guardacanteros, manta antimalezas y una buena cobertura: las tres claves de un cantero prolijo y fácil de mantener.",
    imagen: blogCanteroChips,
    intro:
      "Un cantero recién armado se ve impecable, pero si no se arma bien, a los pocos meses el césped lo invade y los yuyos asoman por todos lados. Con tres decisiones simples se puede tener un cantero que se mantenga prolijo con muy poco trabajo.",
    contenido: [
      { tipo: "h2", texto: "1. Un guardacantero que marque el límite", id: "guardacantero" },
      {
        tipo: "parrafo",
        texto:
          "El césped avanza por debajo de la tierra con sus estolones y raíces. Un guardacantero, enterrado unos centímetros, le pone un límite físico y además define una línea limpia entre el pasto y el cantero, que facilita mucho el bordeado.",
      },

      { tipo: "h2", texto: "2. Manta antimalezas debajo", id: "manta" },
      {
        tipo: "parrafo",
        texto:
          "La manta antimalezas es una tela que deja pasar el agua y el aire pero no la luz. Sin luz, las semillas de malezas que hay en la tierra no pueden crecer. Se coloca sobre la tierra preparada, se le hacen cortes en cruz donde van las plantas y se cubre con la terminación elegida.",
      },
      {
        tipo: "imagen",
        src: blogGranzaSobreManta,
        alt: "Relleno de granza sobre la manta antimalezas en un cantero lateral",
      },

      { tipo: "h2", texto: "3. Una cobertura: chips o piedras", id: "cobertura" },
      {
        tipo: "parrafo",
        texto:
          "La cobertura protege la manta del sol y le da la terminación estética al cantero. Además, mantiene la humedad de la tierra, así que las plantas necesitan menos riego.",
      },
      {
        tipo: "tabla",
        encabezados: ["", "Chips de corteza", "Piedras"],
        filas: [
          ["Aspecto", "Cálido, natural", "Prolijo, moderno"],
          ["Duración", "Se degradan y hay que reponer", "Duran indefinidamente"],
          ["Temperatura", "Mantienen el suelo fresco", "Pueden calentarse al sol"],
          ["Ideal para", "Canteros con muchas plantas", "Laterales y zonas sin césped"],
        ],
      },

      { tipo: "h2", texto: "4. El riego, también por debajo", id: "riego" },
      {
        tipo: "parrafo",
        texto:
          "En canteros conviene regar con goteo: la manguera va debajo de la cobertura, lleva el agua directo a cada planta y no moja el resto del cantero, lo que también ayuda a que no germinen malezas.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "Mantenimiento mínimo",
        texto:
          "Aunque la manta frena casi todo, alguna semilla puede germinar sobre la cobertura. Sacarla a mano apenas aparece lleva un minuto; dejarla crecer obliga a remover piedras o chips.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Paisajismo",
            detalle: "Canteros con guardacanteros, manta, chips y piedras.",
            href: "/servicios/paisajismo",
          },
          {
            texto: "Riego por goteo o aspersión",
            detalle: "Por qué el goteo es lo mejor para canteros.",
            href: "/blog/riego-por-goteo-vs-aspersion",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────  Jardinería
  {
    slug: "cada-cuanto-cortar-el-cesped",
    titulo: "Cada cuánto cortar el césped y a qué altura",
    seoTitle: "Cada cuánto cortar el césped y a qué altura | Riegomax",
    seoDescription:
      "Con qué frecuencia cortar el césped según la época, a qué altura dejarlo, la regla del tercio y los errores que lo debilitan. Guía práctica.",
    palabrasClave: [
      "cada cuánto cortar el césped",
      "altura de corte del césped",
      "cortar el pasto",
      "corte de césped",
    ],
    categoria: "Jardinería",
    fecha: "19 Octubre 2026",
    lectura: "5 min lectura",
    descripcion:
      "La frecuencia según la época, la regla del tercio y por qué cortar muy bajo es el error más común.",
    imagen: blogCespedJuntoACerco,
    intro:
      "Cortar el césped parece la tarea más simple del jardín, pero la forma de hacerlo define si el pasto queda denso y verde o ralo y lleno de malezas. Te contamos cada cuánto conviene cortarlo y a qué altura.",
    contenido: [
      { tipo: "h2", texto: "La regla del tercio", id: "tercio" },
      {
        tipo: "parrafo",
        texto:
          "La regla más importante es no cortar nunca más de un tercio de la altura de la hoja en un solo corte. Si el césped creció mucho, conviene bajarlo de a poco en dos o tres cortes separados por algunos días, en lugar de rebajarlo todo de una vez.",
      },
      {
        tipo: "parrafo",
        texto:
          "Cuando se corta de más, el césped pierde la parte verde que usa para alimentarse, se debilita y deja espacios por donde entran las malezas. Además, el suelo queda expuesto al sol y se seca más rápido.",
      },

      { tipo: "h2", texto: "Cada cuánto, según la época", id: "frecuencia" },
      {
        tipo: "tabla",
        encabezados: ["Época", "Crecimiento", "Frecuencia orientativa"],
        filas: [
          ["Primavera", "Rápido", "Cada semana"],
          ["Verano", "Rápido, según el riego", "Cada semana o cada diez días"],
          ["Otoño", "Se desacelera", "Cada dos semanas"],
          ["Invierno", "Casi detenido", "Solo cuando haga falta"],
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Más que el calendario, lo que manda es la regla del tercio: si el césped llega a la altura en la que un corte le sacaría más de un tercio, es momento de cortar.",
      },

      { tipo: "h2", texto: "A qué altura dejarlo", id: "altura" },
      {
        tipo: "parrafo",
        texto:
          "Un césped un poco más alto es más sano: hace sombra sobre su propio suelo, conserva la humedad y no deja lugar a las malezas. En verano conviene dejarlo algo más alto que en primavera, para que soporte mejor el calor.",
      },
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "El error más común",
        texto:
          "Cortar muy bajo para espaciar los cortes. El resultado es un césped amarillento, con manchas peladas y más malezas, que además necesita mucha más agua.",
      },

      { tipo: "h2", texto: "Otros detalles que suman", id: "detalles" },
      {
        tipo: "lista",
        items: [
          "Cuchilla bien afilada: una cuchilla desafilada desgarra la hoja y las puntas quedan amarillas.",
          "Césped seco: cortar con el pasto mojado deja un corte desparejo y apelmaza los restos.",
          "Bordear canteros y caminos en cada corte para que el jardín se vea prolijo.",
          "Retirar el pasto cortado si quedó en montones sobre el césped.",
        ],
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Jardinería y corte de césped",
            detalle: "Corte, bordeado y retiro del pasto cortado.",
            href: "/servicios/jardineria",
          },
          {
            texto: "Cómo ahorrar agua al regar el jardín",
            detalle: "El riego también define cómo crece el césped.",
            href: "/blog/ahorrar-agua-riego-inteligente",
          },
        ],
      },
    ],
  },

  {
    slug: "cuando-podar-cercos-y-arbustos",
    titulo: "Cuándo podar cercos vivos, arbustos y enredaderas",
    seoTitle: "Cuándo podar cercos, arbustos y enredaderas | Riegomax",
    seoDescription:
      "La época justa para podar cercos vivos, arbustos con flor y enredaderas, cómo dar forma a un cerco para que no se ralee abajo y qué errores evitar.",
    palabrasClave: [
      "cuándo podar",
      "poda de cercos vivos",
      "poda de arbustos",
      "poda de enredaderas",
    ],
    categoria: "Jardinería",
    fecha: "12 Octubre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Cercos, arbustos con flor y enredaderas: cada uno tiene su época de poda. Te explicamos cuál y por qué.",
    intro:
      "Podar en el momento equivocado puede dejar un arbusto sin flores todo un año o un cerco ralo en la base. Cada tipo de planta tiene su época, y conocerla es la mitad del trabajo.",
    contenido: [
      { tipo: "h2", texto: "Cercos vivos", id: "cercos" },
      {
        tipo: "parrafo",
        texto:
          "Los cercos se podan para mantener su forma y para que se vuelvan más tupidos. La poda de formación más fuerte se hace a fines del invierno, antes de que empiece el crecimiento de primavera. Durante la primavera y el verano se hacen retoques para mantener la línea.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "Más ancho abajo que arriba",
        texto:
          "Un cerco tiene que quedar levemente más ancho en la base que en la parte de arriba. Así la luz llega a las ramas de abajo y el cerco no se ralea al pie, que es el problema más común.",
      },

      { tipo: "h2", texto: "Arbustos con flor", id: "arbustos" },
      {
        tipo: "parrafo",
        texto:
          "Acá la regla depende de cuándo florece cada planta. Los arbustos que florecen en primavera forman sus pimpollos el año anterior: si se podan en invierno, se cortan las flores. Por eso conviene podarlos justo después de la floración.",
      },
      {
        tipo: "parrafo",
        texto:
          "Los que florecen en verano, en cambio, lo hacen sobre las ramas nuevas del mismo año, así que se podan a fines del invierno para estimular esos brotes.",
      },

      { tipo: "h2", texto: "Enredaderas", id: "enredaderas" },
      {
        tipo: "parrafo",
        texto:
          "Las enredaderas crecen rápido y, si no se controlan, cubren canaletas, ventanas y techos. Además de la poda anual, conviene recortarlas cada tanto para mantenerlas dentro del muro o la estructura que cubren y retirar las ramas secas que se acumulan por debajo.",
      },

      { tipo: "h2", texto: "Siempre, en cualquier época", id: "siempre" },
      {
        tipo: "lista",
        items: [
          "Quitar ramas secas, rotas o enfermas.",
          "Sacar las flores marchitas para estimular nuevos brotes.",
          "Usar herramientas afiladas y limpias para no desgarrar ni contagiar enfermedades.",
          "No podar con calor extremo: la planta se estresa y se quema.",
        ],
      },
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "Cuidado con la poda drástica",
        texto:
          "Cortar un cerco hasta dejar solo ramas sin hojas puede hacer que algunas especies, como muchas coníferas, no vuelvan a brotar en esa parte. Si un cerco está muy crecido, conviene bajarlo de a poco en varias temporadas.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Jardinería",
            detalle: "Poda de cercos, arbustos y enredaderas.",
            href: "/servicios/jardineria",
          },
          {
            texto: "Paisajismo",
            detalle: "Plantación de cercos vivos nuevos.",
            href: "/servicios/paisajismo",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────  Iluminación
  {
    slug: "como-iluminar-el-jardin",
    titulo: "Cómo iluminar el jardín: balizas, spots y dónde ubicarlos",
    seoTitle: "Cómo iluminar el jardín: balizas y spots | Riegomax",
    seoDescription:
      "Qué luminarias usar en el jardín y dónde ubicarlas: spots para árboles, balizas para caminos, luz LED, protección para exterior y errores a evitar.",
    palabrasClave: [
      "iluminación de jardines",
      "cómo iluminar el jardín",
      "balizas de jardín",
      "spots para árboles",
      "luces para exterior",
    ],
    categoria: "Iluminación",
    fecha: "5 Octubre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Spots para destacar, balizas para circular y algunas reglas para que el jardín se vea bien de noche sin encandilar.",
    intro:
      "Un jardín bien iluminado se disfruta también de noche, se ve más grande y es más seguro para circular. La clave no es poner mucha luz, sino poner la luz justa en los lugares correctos.",
    contenido: [
      { tipo: "h2", texto: "Primero, pensar para qué", id: "objetivo" },
      {
        tipo: "parrafo",
        texto:
          "Antes de elegir luminarias conviene definir qué queremos lograr en cada zona: destacar un árbol o un cantero, marcar un camino, iluminar una galería para usarla de noche o sumar seguridad en un acceso. Cada objetivo pide un tipo de luz distinto.",
      },

      { tipo: "h2", texto: "Spots: para destacar", id: "spots" },
      {
        tipo: "parrafo",
        texto:
          "Un spot es una luz dirigida. Ubicado al pie de un árbol y apuntando hacia arriba, resalta el tronco y el follaje y le da profundidad al jardín. También sirve para destacar una planta escultórica, una pared con textura o un sector del cantero.",
      },

      { tipo: "h2", texto: "Balizas: para circular", id: "balizas" },
      {
        tipo: "parrafo",
        texto:
          "Las balizas son luminarias bajas, de pie, que iluminan hacia abajo. Se ubican a lo largo de caminos, senderos y bordes de canteros para marcar el recorrido sin encandilar. Separadas de forma pareja, dibujan el camino de noche.",
      },

      { tipo: "h2", texto: "Qué tener en cuenta al elegir", id: "elegir" },
      {
        tipo: "lista",
        items: [
          "Que sean aptas para exterior: buscá un grado de protección IP alto contra el agua y el polvo.",
          "Luz LED: consume poco y dura muchos años.",
          "Luz cálida: se ve más acogedora en un jardín que la luz blanca fría.",
          "Materiales que resistan la intemperie y el óxido.",
        ],
      },

      { tipo: "h2", texto: "Errores comunes", id: "errores" },
      {
        tipo: "lista",
        items: [
          "Apuntar los spots hacia donde la gente mira o se sienta: encandilan.",
          "Iluminar todo de forma pareja: el jardín pierde profundidad.",
          "Dejar cables expuestos o conexiones sin protección para exterior.",
          "Ubicar luminarias donde las tapa el crecimiento de las plantas.",
        ],
      },
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "Electricidad y agua",
        texto:
          "Una instalación eléctrica en el jardín convive con el riego y la lluvia. Las conexiones tienen que estar protegidas y la instalación tiene que tener sus protecciones eléctricas. No es un lugar para improvisar.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Iluminación de jardines",
            detalle: "Venta y colocación de spots y balizas, con fotos de trabajos.",
            href: "/servicios/iluminacion-de-jardines",
          },
          {
            texto: "Paisajismo",
            detalle: "Canteros y plantas pensados junto con la iluminación.",
            href: "/servicios/paisajismo",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────  Bombas de agua
  {
    slug: "poca-presion-de-agua-en-casa",
    titulo: "Poca presión de agua en casa: causas y cuándo conviene una bomba",
    seoTitle: "Poca presión de agua en casa: causas y soluciones | Riegomax",
    seoDescription:
      "Por qué sale poca agua en la ducha o las canillas, cómo detectar la causa y cuándo conviene instalar una bomba presurizadora. Guía simple.",
    palabrasClave: [
      "poca presión de agua",
      "bomba presurizadora",
      "sale poca agua en la ducha",
      "aumentar presión de agua casa",
    ],
    categoria: "Guías",
    fecha: "28 Septiembre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Tanque bajo, cañerías tapadas o presión de red insuficiente: cómo saber qué pasa y qué solución conviene.",
    intro:
      "La ducha que sale floja, la canilla que tarda en llenar un balde, el lavarropas que no carga bien. La poca presión de agua es un problema muy común, y no siempre se resuelve igual. Te ayudamos a identificar la causa antes de decidir.",
    contenido: [
      { tipo: "h2", texto: "Primero, ¿dónde falta presión?", id: "donde" },
      {
        tipo: "parrafo",
        texto:
          "No es lo mismo que falte en toda la casa o en una sola canilla. Si el problema está en un solo lugar, suele ser algo local: un aireador o un flexible tapado, una llave de paso semicerrada. Si falta en toda la casa, la causa está en el tanque, las cañerías o la red.",
      },

      { tipo: "h2", texto: "Causas más comunes", id: "causas" },
      {
        tipo: "lista",
        items: [
          "Tanque con poca altura: la presión en las canillas depende de cuán alto está el tanque. Si está casi a la altura de las duchas, el agua sale con poca fuerza.",
          "Cañerías viejas con sarro o de diámetro chico, que frenan el paso del agua.",
          "Presión de red baja, que no alcanza a llenar el tanque o a abastecer la casa directo.",
          "Llaves de paso semicerradas o con pérdidas.",
        ],
      },

      { tipo: "h2", texto: "Cuándo conviene una bomba presurizadora", id: "presurizadora" },
      {
        tipo: "parrafo",
        texto:
          "Cuando la causa es la poca altura del tanque, la solución más directa es una bomba presurizadora. Se instala a la salida del tanque y arranca sola cuando se abre una canilla, dándole al agua la presión que le falta.",
      },
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "Una bomba no arregla una cañería tapada",
        texto:
          "Si el problema son cañerías con sarro o una pérdida, la bomba solo aumenta la presión sobre esa falla. Primero conviene descartar esas causas.",
      },

      { tipo: "h2", texto: "Si el tanque no se llena", id: "tanque" },
      {
        tipo: "parrafo",
        texto:
          "Cuando la presión de la red no alcanza para subir el agua al tanque, lo que hace falta es una bomba que lo cargue, con un flotante que la apaga cuando el tanque está lleno.",
      },

      { tipo: "h2", texto: "Y para el riego", id: "riego" },
      {
        tipo: "parrafo",
        texto:
          "Un sistema de riego con varios aspersores necesita presión y caudal. Si la casa no los tiene, el riego lleva su propia bomba, que se enciende junto con cada sector a través de un tablero eléctrico.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Bombas de agua",
            detalle: "Presurizadoras, centrífugas y periféricas, con su instalación.",
            href: "/servicios/bombas-de-agua",
          },
          {
            texto: "Tableros eléctricos de riego",
            detalle: "Para conectar la bomba al riego automático.",
            href: "/servicios/tableros-electricos-de-riego",
          },
          {
            texto: "La bomba del riego no arranca",
            detalle: "Causas más comunes y qué revisar.",
            href: "/blog/bomba-de-riego-no-arranca",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────  Mantenimiento
  {
    slug: "como-recuperar-un-jardin-abandonado",
    titulo: "Cómo recuperar un jardín abandonado",
    seoTitle: "Cómo recuperar un jardín abandonado | Riegomax",
    seoDescription:
      "Los pasos para recuperar un jardín abandonado: desmalezar, retirar restos, evaluar qué se salva, nivelar el terreno, colocar césped y mantenerlo.",
    palabrasClave: [
      "recuperar jardín abandonado",
      "limpieza de terreno",
      "desmalezar jardín",
      "jardín lleno de yuyos",
    ],
    categoria: "Mantenimiento",
    fecha: "21 Septiembre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Yuyos altos, restos y tierra pelada: el orden de trabajo para volver a tener un jardín para usar.",
    imagen: blogJardinAbandonado,
    intro:
      "Una casa recién comprada, un terreno que estuvo meses sin atención o un fondo que se fue dejando: un jardín abandonado parece no tener arreglo, pero casi siempre se recupera. Lo importante es hacerlo en el orden correcto.",
    contenido: [
      { tipo: "h2", texto: "1. Desmalezar y despejar", id: "desmalezar" },
      {
        tipo: "parrafo",
        texto:
          "El primer paso es cortar los yuyos altos y retirar ramas, basura y restos. Hasta que el terreno no está despejado no se puede ver qué hay debajo: desniveles, caños, plantas que vale la pena conservar.",
      },

      { tipo: "h2", texto: "2. Ver qué se salva", id: "salvar" },
      {
        tipo: "parrafo",
        texto:
          "Con el terreno a la vista, conviene recorrerlo con calma. Árboles sanos, arbustos que con una buena poda se recuperan o un césped que todavía tiene base pueden conservarse y ahorran tiempo y dinero.",
      },

      { tipo: "h2", texto: "3. Sacar las malezas de raíz", id: "raiz" },
      {
        tipo: "parrafo",
        texto:
          "Cortar los yuyos al ras no alcanza: muchos vuelven a brotar desde la raíz. En los sectores donde va a ir césped nuevo o canteros, hay que sacarlas de raíz antes de seguir.",
      },

      { tipo: "h2", texto: "4. Nivelar el terreno", id: "nivelar" },
      {
        tipo: "parrafo",
        texto:
          "Un terreno con pozos y lomos junta agua en los bajos y hace que el corte quede desparejo. Se rellenan los bajos con tierra y se empareja la superficie, dejando una pendiente suave para que el agua escurra hacia afuera de la casa.",
      },
      {
        tipo: "imagen",
        src: blogTerrenoEmparejado,
        alt: "Terreno emparejado y listo para colocar el césped",
      },

      { tipo: "h2", texto: "5. Césped nuevo, canteros y riego", id: "cesped" },
      {
        tipo: "parrafo",
        texto:
          "Con el terreno listo, se coloca el césped (en panes, para tener un jardín verde desde el primer día) y se arman los canteros. Es el mejor momento para instalar un riego automático, antes de que el césped cubra todo y haya que abrir zanjas en un jardín terminado.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "Para que no vuelva a pasar",
        texto:
          "Un mantenimiento periódico, aunque sea cada pocas semanas, evita que el jardín vuelva a desbordarse. Es mucho más barato mantener que recuperar.",
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Mantenimiento y limpieza de terrenos",
            detalle: "Mirá el antes y después de trabajos reales.",
            href: "/servicios/mantenimiento",
          },
          {
            texto: "Paisajismo",
            detalle: "Nivelación, césped y canteros para el jardín nuevo.",
            href: "/servicios/paisajismo",
          },
          {
            texto: "Grama bahiana",
            detalle: "Un césped resistente para empezar de nuevo.",
            href: "/blog/grama-bahiana-como-se-coloca",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────  Tableros eléctricos
  {
    slug: "bomba-de-riego-no-arranca",
    titulo: "La bomba del riego no arranca: causas más comunes",
    seoTitle: "La bomba del riego no arranca: causas comunes | Riegomax",
    seoDescription:
      "Por qué la bomba del riego automático no arranca: protecciones del tablero, programador, falta de agua, contactor o motor. Qué revisar y cuándo llamar.",
    palabrasClave: [
      "bomba de riego no arranca",
      "bomba no funciona",
      "tablero de bomba",
      "riego automático no funciona",
    ],
    categoria: "Mantenimiento",
    fecha: "14 Septiembre 2026",
    lectura: "5 min lectura",
    descripcion:
      "Tablero, programador, falta de agua o el propio motor: cómo ubicar la falla de forma ordenada.",
    intro:
      "Llega la hora del riego, el programador marca que está regando, pero la bomba no arranca y los aspersores no suben. Es una de las consultas más frecuentes. La falla puede estar en distintos lugares, y revisarlos en orden ahorra mucho tiempo.",
    contenido: [
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "Antes de empezar",
        texto:
          "El tablero y la bomba trabajan con 220 V cerca del agua. Lo que sigue sirve para entender qué puede estar pasando; abrir el tablero o el motor es trabajo para alguien con conocimientos de electricidad.",
      },

      { tipo: "h2", texto: "1. ¿Llega corriente al tablero?", id: "corriente" },
      {
        tipo: "parrafo",
        texto:
          "Lo primero es lo más simple: revisar que no haya saltado la térmica o el disyuntor del tablero, o la del tablero general de la casa. Si saltan de nuevo apenas se suben, hay una falla eléctrica que hay que revisar antes de seguir.",
      },

      { tipo: "h2", texto: "2. ¿El programador da la orden?", id: "programador" },
      {
        tipo: "parrafo",
        texto:
          "El programador tiene que estar configurado para encender la bomba junto con cada sector. Si se reprogramó, se reseteó por un corte de luz o se agregó un sector nuevo, puede que la orden de arranque de bomba haya quedado desactivada.",
      },

      { tipo: "h2", texto: "3. ¿Hay agua para bombear?", id: "agua" },
      {
        tipo: "parrafo",
        texto:
          "Muchos tableros tienen una protección que impide que la bomba arranque si no hay agua en el tanque o la cisterna. Es una protección necesaria: una bomba que funciona en seco se daña en poco tiempo. Si el tanque está vacío o el flotante quedó trabado, la bomba no va a arrancar.",
      },

      { tipo: "h2", texto: "4. El contactor y las protecciones", id: "contactor" },
      {
        tipo: "parrafo",
        texto:
          "El contactor es la pieza del tablero que conecta la bomba cuando recibe la señal. Con el uso puede desgastarse y dejar de cerrar. También puede haber actuado la protección del motor, que corta si detecta una sobrecarga.",
      },

      { tipo: "h2", texto: "5. El motor", id: "motor" },
      {
        tipo: "parrafo",
        texto:
          "Si la bomba hace un zumbido pero no gira, en los motores monofásicos una causa frecuente es el capacitor de arranque. Si no hace ningún ruido y llega corriente, el problema puede estar en el bobinado del motor.",
      },
      {
        tipo: "lista",
        items: [
          "Saltan las protecciones: falla eléctrica en el tablero o el motor.",
          "No hace nada y el programador riega: orden de arranque o contactor.",
          "Zumba pero no gira: capacitor o motor trabado.",
          "Arranca y corta enseguida: falta de agua o protección del motor.",
        ],
      },
      {
        tipo: "enlaces",
        titulo: "Para seguir",
        items: [
          {
            texto: "Tableros eléctricos de riego",
            detalle: "Revisión, reparación y armado de tableros.",
            href: "/servicios/tableros-electricos-de-riego",
          },
          {
            texto: "Bombas de agua",
            detalle: "Instalación y automatización de bombas.",
            href: "/servicios/bombas-de-agua",
          },
          {
            texto: "Riego automático: cómo funciona",
            detalle: "Qué hace cada parte del sistema.",
            href: "/blog/automatizacion-del-riego",
          },
        ],
      },
    ],
  },

  // ═════════════════════════ ARTÍCULOS SOBRE RIEGO ═════════════════════════
  // ─────────────────────────────────────────────────────────────
  {
    slug: "como-elegir-sistema-de-riego-ideal",
    titulo: "Cómo elegir el sistema de riego ideal para tu jardín",
    seoTitle: "Cómo elegir el sistema de riego para tu jardín | Riegomax",
    seoDescription:
      "Aspersión, goteo o los dos: qué tener en cuenta para elegir el riego automático de tu jardín según el césped, los canteros, la presión de agua y el sol.",
    palabrasClave: [
      "sistema de riego para jardín",
      "riego automático para jardín",
      "cómo elegir sistema de riego",
      "riego por aspersión",
      "riego por goteo",
    ],
    categoria: "Guías",
    fecha: "24 Julio 2026",
    lectura: "6 min lectura",
    descripcion:
      "Césped, canteros, sol, sombra y presión de agua: los factores que definen qué sistema de riego automático conviene en tu jardín.",
    imagen: art1,
    intro:
      "No hay un sistema de riego que sirva para todos los jardines. El que funciona bien en un parque grande y soleado no es el mismo que necesita un patio chico con canteros. En esta guía te contamos qué miramos en Riegomax antes de diseñar el riego de una casa o una quinta, para que sepas qué preguntar y qué esperar.",
    contenido: [
      { tipo: "h2", texto: "Primero: qué hay en tu jardín", id: "que-hay" },
      {
        tipo: "parrafo",
        texto:
          "El punto de partida es mirar qué vamos a regar. El césped, los canteros con flores, los cercos vivos y los árboles tienen necesidades distintas, y el sistema tiene que darle a cada uno lo suyo.",
      },
      {
        tipo: "lista",
        items: [
          "Césped: necesita agua repartida en toda la superficie.",
          "Canteros y flores: mejor regar al pie de cada planta, sin mojar las hojas.",
          "Cercos vivos: una línea de riego a lo largo del cerco.",
          "Árboles: riego localizado alrededor del tronco, sobre todo los primeros años.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "En la mayoría de los jardines conviven varios de estos casos. Por eso casi siempre combinamos aspersión para el césped y goteo para canteros y cercos.",
      },

      { tipo: "h2", texto: "Aspersión, goteo o los dos", id: "aspersion-goteo" },
      {
        tipo: "parrafo",
        texto:
          "La aspersión usa aspersores emergentes que quedan escondidos bajo el pasto y suben solo cuando riegan. Es la forma de cubrir el césped de manera pareja.",
      },
      {
        tipo: "parrafo",
        texto:
          "El goteo usa una manguera con goteros que lleva el agua directo a la raíz. Gasta menos agua porque no moja caminos ni paredes y casi no se evapora, por eso es ideal para canteros, cercos y huertas.",
      },
      {
        tipo: "tabla",
        encabezados: ["Sector del jardín", "Sistema recomendado"],
        filas: [
          ["Césped", "Aspersión con aspersores emergentes"],
          ["Canteros con flores", "Goteo"],
          ["Cercos vivos", "Goteo a lo largo del cerco"],
          ["Huerta", "Goteo"],
          ["Patio sin césped natural", "Sin riego: evaluar césped sintético"],
        ],
      },

      { tipo: "h2", texto: "Sol, sombra y sectores", id: "sectores" },
      {
        tipo: "parrafo",
        texto:
          "Un césped a pleno sol pierde mucha más agua que uno a la sombra de un árbol. Si los dos riegan el mismo tiempo, uno se encharca o el otro se seca. La solución es dividir el jardín en sectores: cada sector tiene su propia válvula y el programador le asigna su tiempo de riego.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "Un sector, un tipo de riego",
        texto:
          "Nunca mezcles aspersores y goteo en el mismo sector. El goteo necesita mucho más tiempo de riego que la aspersión, y si comparten válvula uno de los dos siempre va a quedar mal regado.",
      },

      { tipo: "h2", texto: "La presión de agua de tu casa", id: "presion" },
      {
        tipo: "parrafo",
        texto:
          "La presión y el caudal disponibles definen cuántos aspersores pueden funcionar a la vez. Con poca presión, los aspersores no llegan a cubrir su radio y quedan zonas secas. Por eso medimos la presión antes de diseñar: si no alcanza, se arman más sectores con menos aspersores cada uno, o se suma una bomba.",
      },

      { tipo: "h2", texto: "Automatizarlo: programador y sensor de lluvia", id: "automatizar" },
      {
        tipo: "parrafo",
        texto:
          "Un programador abre cada sector a la hora indicada y durante el tiempo justo. Con un sensor de lluvia, el riego se suspende cuando llueve, y con un módulo Wifi lo podés manejar desde el celular. Es lo que hace que el sistema funcione aunque no estés en casa.",
      },

      { tipo: "h2", texto: "Cuándo conviene pedir asesoramiento", id: "asesoramiento" },
      {
        tipo: "parrafo",
        texto:
          "Un riego mal diseñado se nota rápido: manchas amarillas en el césped, aspersores que mojan la pared, canteros encharcados. Corregirlo después cuesta más que diseñarlo bien desde el principio. Si estás pensando en instalar riego, lo ideal es que alguien recorra el jardín, mida la presión y te proponga un diseño por sectores.",
      },
      {
        tipo: "enlaces",
        titulo: "Servicios relacionados",
        items: [
          {
            texto: "Instalación de sistemas de riego",
            detalle: "Diseño por sectores, aspersión, goteo y programación automática.",
            href: "/servicios/sistemas-de-riego",
          },
          {
            texto: "Bombas de agua",
            detalle: "Para cuando la presión de la casa no alcanza.",
            href: "/servicios/bombas-de-agua",
          },
          {
            texto: "Césped sintético",
            detalle: "Para patios donde el césped natural no prospera.",
            href: "/servicios/cesped-sintetico",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "riego-por-goteo-vs-aspersion",
    titulo: "Riego por goteo o aspersión: cuál conviene en tu jardín",
    seoTitle: "Riego por goteo o aspersión: cuál conviene | Riegomax",
    seoDescription:
      "Diferencias entre riego por goteo y por aspersión en el jardín: dónde usar cada uno, consumo de agua, mantenimiento y por qué conviene combinarlos.",
    palabrasClave: [
      "riego por goteo",
      "riego por aspersión",
      "goteo o aspersión",
      "riego por goteo para jardín",
      "aspersores para césped",
    ],
    categoria: "Guías",
    fecha: "18 Julio 2026",
    lectura: "6 min lectura",
    descripcion:
      "Cómo funciona cada sistema, dónde conviene usarlo y por qué en la mayoría de los jardines la mejor opción es combinar los dos.",
    imagen: art2,
    intro:
      "Es una de las preguntas que más nos hacen: ¿goteo o aspersión? La respuesta corta es que no compiten, porque cada uno sirve para una parte distinta del jardín. En este artículo te explicamos cómo funciona cada uno, dónde conviene usarlo y qué tener en cuenta.",
    contenido: [
      { tipo: "h2", texto: "Cómo funciona el riego por aspersión", id: "aspersion" },
      {
        tipo: "parrafo",
        texto:
          "Los aspersores emergentes quedan enterrados al nivel del césped. Cuando el sistema riega, la presión del agua los hace subir y largan el agua en forma de lluvia sobre un sector. Al terminar, bajan solos y desaparecen bajo el pasto, así no molestan al cortar ni al caminar.",
      },
      {
        tipo: "parrafo",
        texto:
          "Hay dos tipos principales: los difusores, que riegan áreas chicas con un abanico fijo, y los rotores, que giran y alcanzan distancias mayores. Elegimos uno u otro según el tamaño de cada sector.",
      },

      { tipo: "h2", texto: "Cómo funciona el riego por goteo", id: "goteo" },
      {
        tipo: "parrafo",
        texto:
          "El goteo usa una manguera con pequeños emisores que largan el agua de a poco, justo al pie de las plantas. El agua se infiltra en la tierra sin escurrir ni evaporarse, y llega directo a las raíces.",
      },
      {
        tipo: "parrafo",
        texto:
          "La manguera puede ir sobre la tierra, tapada con chips o corteza, o apenas enterrada. Es casi invisible y no moja hojas, flores, caminos ni paredes.",
      },

      { tipo: "h2", texto: "Comparación lado a lado", id: "comparacion" },
      {
        tipo: "tabla",
        encabezados: ["", "Aspersión", "Goteo"],
        filas: [
          ["Ideal para", "Césped", "Canteros, cercos, huertas, macetas"],
          ["Consumo de agua", "Mayor: parte se evapora o cae fuera", "Menor: va directo a la raíz"],
          ["Tiempo de riego", "Corto", "Más largo"],
          ["Moja hojas y flores", "Sí", "No"],
          ["Visibilidad", "Aspersores escondidos bajo el pasto", "Manguera casi invisible"],
          ["Mantenimiento", "Regular el alcance de cada aspersor", "Revisar goteros tapados"],
        ],
      },

      { tipo: "h2", texto: "Dónde usar cada uno en tu jardín", id: "donde" },
      {
        tipo: "parrafo",
        texto:
          "Para el césped, la aspersión es la única forma práctica de cubrir toda la superficie de manera pareja. Regar césped con goteo exigiría líneas de manguera cada pocos centímetros.",
      },
      {
        tipo: "parrafo",
        texto:
          "Para todo lo demás (canteros, cercos vivos, plantas en hilera, huerta) el goteo es mejor: gasta menos agua y evita hongos en las hojas, porque no las moja.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "Lo más común: combinar los dos",
        texto:
          "En casi todos los jardines que hacemos, el césped lleva aspersión y los canteros y cercos llevan goteo, cada uno en su propio sector del programador.",
      },

      { tipo: "h2", texto: "Errores que conviene evitar", id: "errores" },
      {
        tipo: "lista",
        items: [
          "Poner aspersores que mojen la pared o la vereda: se desperdicia agua y se manchan los muros.",
          "Regar canteros con aspersión: el agua cae sobre las hojas y no llega bien a la raíz.",
          "Mezclar goteo y aspersión en la misma válvula: uno de los dos queda mal regado.",
          "No dejar filtro en el goteo: los goteros se tapan con el tiempo.",
        ],
      },
      {
        tipo: "enlaces",
        titulo: "Servicios relacionados",
        items: [
          {
            texto: "Instalación de sistemas de riego",
            detalle: "Aspersión para el césped y goteo para canteros y cercos.",
            href: "/servicios/sistemas-de-riego",
          },
          {
            texto: "Paisajismo",
            detalle: "Canteros y cercos diseñados junto con su riego.",
            href: "/servicios/paisajismo",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "ahorrar-agua-riego-inteligente",
    titulo: "Cómo ahorrar agua al regar el jardín",
    seoTitle: "Cómo ahorrar agua al regar el jardín | Riegomax",
    seoDescription:
      "Consejos para gastar menos agua en el jardín: regar a la hora correcta, sectorizar, usar goteo, sensor de lluvia y programador. Sin que el césped se seque.",
    palabrasClave: [
      "ahorrar agua en el jardín",
      "cómo regar el césped",
      "riego inteligente",
      "sensor de lluvia",
      "cuándo regar el jardín",
    ],
    categoria: "Ahorro de Agua",
    fecha: "10 Julio 2026",
    lectura: "5 min lectura",
    descripcion:
      "Horarios, sectores, goteo y sensor de lluvia: cómo gastar menos agua sin que el césped y las plantas sufran.",
    imagen: art3,
    intro:
      "Regar bien no es regar mucho. La mayoría de los jardines reciben más agua de la que necesitan, y esa agua de más no solo se desperdicia: también debilita el césped y favorece los hongos. Con algunos cambios simples se puede gastar bastante menos y tener un jardín más sano.",
    contenido: [
      { tipo: "h2", texto: "Regá a la hora correcta", id: "hora" },
      {
        tipo: "parrafo",
        texto:
          "El mejor momento es temprano a la mañana, antes de que salga el sol fuerte. A esa hora casi no hay evaporación ni viento, y el césped se seca durante el día, lo que reduce los hongos. Regar al mediodía es lo peor: buena parte del agua se evapora antes de llegar a la raíz.",
      },
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "Cuidado con regar de noche",
        texto:
          "Regar a la noche evita la evaporación, pero el césped queda húmedo muchas horas y eso favorece los hongos. Si no podés regar temprano, preferí el atardecer antes que la noche cerrada.",
      },

      { tipo: "h2", texto: "Menos veces, pero más profundo", id: "profundo" },
      {
        tipo: "parrafo",
        texto:
          "Regar un poco todos los días hace que las raíces se queden en la superficie, y el césped sufre apenas hace calor. Regar menos veces pero con más agua obliga a las raíces a bajar a buscarla, y el césped se vuelve más resistente a la sequía.",
      },

      { tipo: "h2", texto: "Cada sector con su tiempo", id: "sectores" },
      {
        tipo: "parrafo",
        texto:
          "Un sector a la sombra necesita mucho menos riego que uno a pleno sol. Si todo el jardín riega el mismo tiempo, alguna parte siempre recibe agua de más. Dividir el riego en sectores, cada uno con su válvula, permite darle a cada zona solo lo que necesita.",
      },

      { tipo: "h2", texto: "Goteo en canteros y cercos", id: "goteo" },
      {
        tipo: "parrafo",
        texto:
          "En canteros y cercos, cambiar aspersión por goteo es uno de los cambios que más agua ahorran: el agua va directo a la raíz y no se pierde en caminos, paredes ni hojas.",
      },

      { tipo: "h2", texto: "Sensor de lluvia y programador", id: "sensor" },
      {
        tipo: "parrafo",
        texto:
          "Pocas cosas desperdician tanta agua como un riego automático funcionando bajo la lluvia. Un sensor de lluvia es una pieza económica que corta el riego cuando llueve y lo vuelve a habilitar cuando el suelo se seca.",
      },
      {
        tipo: "parrafo",
        texto:
          "Con el programador también conviene ajustar los tiempos según la estación: en invierno el jardín necesita mucha menos agua que en verano. Con un módulo Wifi lo podés cambiar desde el celular.",
      },

      { tipo: "h2", texto: "Revisá que no haya pérdidas", id: "perdidas" },
      {
        tipo: "lista",
        items: [
          "Un aspersor roto o torcido que moja la vereda.",
          "Una zona del césped siempre encharcada: puede haber una pérdida en la cañería.",
          "Una válvula que no cierra del todo y gotea aunque el riego esté apagado.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Cualquiera de estas fallas puede hacer gastar mucha agua sin que lo notes. Una revisión del sistema cada tanto las detecta a tiempo.",
      },
      {
        tipo: "enlaces",
        titulo: "Servicios relacionados",
        items: [
          {
            texto: "Sistemas de riego",
            detalle: "Sectores, goteo, programador y sensor de lluvia.",
            href: "/servicios/sistemas-de-riego",
          },
          {
            texto: "Mantenimiento",
            detalle: "Revisión y reparación de pérdidas en el riego.",
            href: "/servicios/mantenimiento",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "errores-comunes-instalacion-riego",
    titulo: "Errores comunes al instalar un riego en el jardín",
    seoTitle: "Errores comunes al instalar riego en el jardín | Riegomax",
    seoDescription:
      "Los errores más frecuentes al instalar un riego automático en casa: aspersores mal ubicados, sectores mal armados, presión insuficiente y caños mal unidos.",
    palabrasClave: [
      "errores instalación riego",
      "instalar riego automático",
      "riego automático jardín",
      "aspersores mal regulados",
    ],
    categoria: "Instalación",
    fecha: "2 Julio 2026",
    lectura: "6 min lectura",
    descripcion:
      "Aspersores que mojan la pared, zonas secas y válvulas que fallan: los errores que más vemos y cómo evitarlos.",
    imagen: art4,
    intro:
      "Muchos de los trabajos que hacemos no son instalaciones nuevas, sino arreglos de riegos que se instalaron mal. Los problemas casi siempre se repiten. Si estás por instalar riego en tu jardín, o el que tenés no funciona como debería, estos son los errores a revisar.",
    contenido: [
      { tipo: "h2", texto: "No medir la presión antes de diseñar", id: "presion" },
      {
        tipo: "parrafo",
        texto:
          "Es el error de base. Si se ponen más aspersores de los que la presión de la casa puede mover, ninguno llega a su alcance y quedan franjas secas entre uno y otro. La presión y el caudal se miden antes de decidir cuántos aspersores lleva cada sector.",
      },

      { tipo: "h2", texto: "Aspersores mal ubicados", id: "ubicacion" },
      {
        tipo: "parrafo",
        texto:
          "Cada aspersor tiene que alcanzar al de al lado, para que el agua se superponga y el riego quede parejo. Si quedan muy separados, aparecen manchas amarillas en el medio. Si quedan mal orientados, mojan paredes, ventanas y veredas.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "La regla del cabezal a cabezal",
        texto:
          "El agua de cada aspersor tiene que llegar hasta el aspersor vecino. Es la forma de que el césped reciba la misma cantidad de agua en toda su superficie.",
      },

      { tipo: "h2", texto: "Mezclar distintos tipos en un mismo sector", id: "mezclar" },
      {
        tipo: "parrafo",
        texto:
          "Difusores, rotores y goteo riegan a ritmos muy distintos. Si comparten válvula, lo que alcanza para uno es demasiado o muy poco para el otro. Cada sector tiene que tener un solo tipo de emisor.",
      },

      { tipo: "h2", texto: "Colectores y válvulas mal armados", id: "colector" },
      {
        tipo: "parrafo",
        texto:
          "El colector es donde se juntan las válvulas de todos los sectores. Si se arma con materiales que no son para riego, sin llave de corte o enterrado sin una caja que permita acceder, cualquier arreglo futuro se complica. Lo vemos seguido: caños oxidados, uniones con pérdidas y válvulas imposibles de sacar sin romper.",
      },
      {
        tipo: "lista",
        items: [
          "Usar materiales aptos para riego y para estar a la intemperie.",
          "Dejar una llave de corte general antes del colector.",
          "Dejar las válvulas accesibles para poder cambiarlas.",
          "Identificar qué válvula corresponde a cada sector.",
        ],
      },

      { tipo: "h2", texto: "Zanjas poco profundas", id: "zanjas" },
      {
        tipo: "parrafo",
        texto:
          "Si la cañería queda muy cerca de la superficie, se puede romper al airear el césped, al plantar o al clavar una estaca. Las zanjas tienen que tener la profundidad adecuada, y al taparlas hay que reponer el pasto para que no queden marcas.",
      },

      { tipo: "h2", texto: "No probar antes de tapar", id: "probar" },
      {
        tipo: "parrafo",
        texto:
          "Cada sector se prueba con las zanjas todavía abiertas, para detectar pérdidas y regular el alcance de los aspersores. Encontrar una pérdida después de tapar significa volver a abrir el jardín.",
      },
      {
        tipo: "enlaces",
        titulo: "Servicios relacionados",
        items: [
          {
            texto: "Instalación de sistemas de riego",
            detalle: "Diseño, instalación y prueba de cada sector.",
            href: "/servicios/sistemas-de-riego",
          },
          {
            texto: "Mantenimiento y reparación",
            detalle: "Arreglamos riegos que no funcionan bien.",
            href: "/servicios/mantenimiento",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "automatizacion-del-riego",
    titulo: "Riego automático: cómo funciona y qué necesitás",
    seoTitle: "Riego automático: cómo funciona y qué necesitás | Riegomax",
    seoDescription:
      "Qué es un riego automático y qué partes tiene: programador, válvulas, sensor de lluvia, módulo Wifi y tablero eléctrico si hay bomba. Guía simple.",
    palabrasClave: [
      "riego automático",
      "programador de riego",
      "automatizar el riego del jardín",
      "válvula solenoide",
      "riego con Wifi",
    ],
    categoria: "Automatización",
    fecha: "26 Junio 2026",
    lectura: "6 min lectura",
    descripcion:
      "Programador, válvulas, sensor de lluvia y Wifi: las partes de un riego automático explicadas de forma simple.",
    imagen: art5,
    intro:
      "Un riego automático riega el jardín solo, a la hora y con el tiempo que vos definas. Pero ¿cómo funciona por dentro? En esta guía te explicamos cada parte del sistema de forma simple, para que sepas qué hace cada una y qué necesita tu jardín.",
    contenido: [
      { tipo: "h2", texto: "El programador: el cerebro del sistema", id: "programador" },
      {
        tipo: "parrafo",
        texto:
          "El programador es un aparato que se instala en una pared, protegido de la lluvia. En él se configura qué sector riega, qué días, a qué hora y durante cuántos minutos. Cuando llega el horario, le manda una señal eléctrica a la válvula de ese sector para que se abra.",
      },
      {
        tipo: "parrafo",
        texto:
          "Cada programador admite una cantidad de sectores, que se llaman estaciones. Por eso, al elegirlo, conviene prever si el jardín va a crecer.",
      },

      { tipo: "h2", texto: "Las válvulas: una por sector", id: "valvulas" },
      {
        tipo: "parrafo",
        texto:
          "Las válvulas solenoides son las que abren y cierran el paso del agua hacia cada sector. Reciben la señal del programador y se abren durante el tiempo indicado. Normalmente se agrupan todas en un colector, cerca de la entrada de agua.",
      },

      { tipo: "h2", texto: "Sensor de lluvia", id: "sensor" },
      {
        tipo: "parrafo",
        texto:
          "Se conecta al programador y suspende el riego cuando llueve. Es una pieza chica que evita uno de los desperdicios de agua más comunes: el riego funcionando bajo la lluvia.",
      },

      { tipo: "h2", texto: "Módulo Wifi: el riego desde el celular", id: "wifi" },
      {
        tipo: "parrafo",
        texto:
          "Con un módulo Wifi podés encender o apagar el riego, cambiar tiempos o suspenderlo desde una aplicación en el celular, estés donde estés. Es muy práctico si te vas de vacaciones o si el programador quedó en un lugar incómodo.",
      },

      { tipo: "h2", texto: "Si hay bomba: el tablero eléctrico", id: "tablero" },
      {
        tipo: "parrafo",
        texto:
          "Cuando la presión de la casa no alcanza, el sistema lleva una bomba. El programador no puede encenderla directamente, porque maneja señales de baja tensión. Entre los dos va un tablero eléctrico que recibe la señal del programador y enciende la bomba junto con cada sector, con las protecciones necesarias para que el motor no se dañe.",
      },
      {
        tipo: "destacado",
        variante: "advertencia",
        titulo: "El tablero no se improvisa",
        texto:
          "Un tablero mal armado puede dejar la bomba funcionando en seco o quemar el motor. Es un trabajo eléctrico que tiene que hacerse con las protecciones correctas.",
      },

      { tipo: "h2", texto: "Cómo se programa", id: "programar" },
      {
        tipo: "lista",
        items: [
          "Elegí horarios temprano a la mañana.",
          "Dale más tiempo a los sectores con sol y menos a los de sombra.",
          "El goteo necesita más minutos que la aspersión.",
          "Ajustá los tiempos según la estación: menos en invierno, más en verano.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Cuando instalamos un sistema, lo dejamos programado según tu jardín y te explicamos cómo cambiar los tiempos.",
      },
      {
        tipo: "enlaces",
        titulo: "Servicios relacionados",
        items: [
          {
            texto: "Sistemas de riego",
            detalle: "Instalación completa con programador, válvulas y sensor de lluvia.",
            href: "/servicios/sistemas-de-riego",
          },
          {
            texto: "Tableros eléctricos de riego",
            detalle: "Armado y reparación de tableros para la bomba.",
            href: "/servicios/tableros-electricos-de-riego",
          },
          {
            texto: "Bombas de agua",
            detalle: "Para sistemas que necesitan más presión.",
            href: "/servicios/bombas-de-agua",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "mantener-filtros-y-valvulas",
    titulo: "Mantenimiento del riego automático: válvulas, filtros y aspersores",
    seoTitle: "Mantenimiento del riego automático del jardín | Riegomax",
    seoDescription:
      "Cómo mantener el riego automático de tu jardín: revisión de válvulas, limpieza de filtros, aspersores y goteros, y qué hacer al empezar cada temporada.",
    palabrasClave: [
      "mantenimiento riego automático",
      "válvulas de riego",
      "filtro de riego",
      "aspersor no funciona",
      "riego no anda",
    ],
    categoria: "Mantenimiento",
    fecha: "20 Junio 2026",
    lectura: "6 min lectura",
    descripcion:
      "Qué revisar en las válvulas, filtros, aspersores y goteros para que el riego funcione bien todo el año.",
    imagen: art6,
    intro:
      "Un riego automático funciona solo, pero no es eterno sin cuidados. Con una revisión simple al empezar la temporada y algunos controles durante el año, se evitan la mayoría de las fallas. Te contamos qué mirar en cada parte del sistema.",
    contenido: [
      { tipo: "h2", texto: "Válvulas: el corazón del colector", id: "valvulas" },
      {
        tipo: "parrafo",
        texto:
          "Las válvulas abren y cierran cada sector. Las fallas más comunes son que un sector no riegue (la válvula no abre) o que siga goteando con el riego apagado (la válvula no cierra del todo). Muchas veces la causa es suciedad o arena dentro de la válvula, que se resuelve limpiándola.",
      },
      {
        tipo: "lista",
        items: [
          "Un sector no riega: revisar la conexión eléctrica de la válvula y si le llega la señal del programador.",
          "Un sector riega solo o no corta: limpiar o cambiar la membrana de la válvula.",
          "Hay agua en la caja de válvulas: buscar una pérdida en las uniones.",
        ],
      },

      { tipo: "h2", texto: "Filtros: clave en el goteo", id: "filtros" },
      {
        tipo: "parrafo",
        texto:
          "Los goteros tienen salidas muy chicas y se tapan con facilidad. Por eso los sectores de goteo llevan un filtro que retiene la arena y las impurezas del agua. Ese filtro se tiene que abrir y lavar cada tanto; si se satura, el goteo pierde presión y las plantas del final de la línea reciben poca agua.",
      },
      {
        tipo: "destacado",
        variante: "consejo",
        titulo: "Si el agua es de pozo, revisá más seguido",
        texto:
          "El agua de pozo suele traer más arena que la de red. En esos casos el filtro se ensucia más rápido y conviene limpiarlo con más frecuencia.",
      },

      { tipo: "h2", texto: "Aspersores", id: "aspersores" },
      {
        tipo: "parrafo",
        texto:
          "Con el corte del césped, los pisotones y el paso del tiempo, los aspersores se desalinean, se hunden o se tapan con tierra. Un aspersor que no sube o que moja la vereda deja una zona del césped sin regar.",
      },
      {
        tipo: "lista",
        items: [
          "Verificar que cada aspersor suba y baje bien.",
          "Corregir la orientación de los que mojan paredes o caminos.",
          "Limpiar las boquillas tapadas.",
          "Levantar los que quedaron hundidos bajo el pasto.",
        ],
      },

      { tipo: "h2", texto: "Goteros y mangueras", id: "goteros" },
      {
        tipo: "parrafo",
        texto:
          "Recorré las líneas de goteo con el sector funcionando: los goteros tapados se reconocen porque la tierra a su alrededor queda seca. También revisá que la manguera no esté cortada por herramientas o mordida por mascotas.",
      },

      { tipo: "h2", texto: "Al empezar cada temporada", id: "temporada" },
      {
        tipo: "parrafo",
        texto:
          "Antes del calor conviene hacer una revisión completa: encender cada sector, mirar que todos los aspersores funcionen, limpiar los filtros, revisar el sensor de lluvia y ajustar los tiempos del programador para el verano.",
      },
      {
        tipo: "parrafo",
        texto:
          "Si encontrás una falla que no podés resolver, o preferís que lo revise alguien con experiencia, lo hacemos nosotros.",
      },
      {
        tipo: "enlaces",
        titulo: "Servicios relacionados",
        items: [
          {
            texto: "Mantenimiento y reparación de riego",
            detalle: "Revisamos el sistema y arreglamos lo que falla.",
            href: "/servicios/mantenimiento",
          },
          {
            texto: "Sistemas de riego",
            detalle: "Ampliaciones y reubicación de aspersores.",
            href: "/servicios/sistemas-de-riego",
          },
          {
            texto: "Tableros eléctricos de riego",
            detalle: "Si el problema está en la bomba o el tablero.",
            href: "/servicios/tableros-electricos-de-riego",
          },
        ],
      },
    ],
  },
];

export const getArticulo = (slug: string) => articulos.find((a) => a.slug === slug);
