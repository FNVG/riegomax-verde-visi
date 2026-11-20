import art1 from "../assets/art-1.jpg";
import art2 from "../assets/art-2.jpg";
import art3 from "../assets/art-3.jpg";
import art4 from "../assets/art-4.jpg";
import art5 from "../assets/art-5.jpg";
import art6 from "../assets/art-6.jpg";

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
  imagen: string;
  intro: string;
  contenido: Bloque[];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  palabrasClave?: string[];
};

export const articulos: Articulo[] = [
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
