import type { Articulo } from "../blog";

/**
 * BORRADOR · Paso 4 del SEO (escribir y optimizar mientras se escribe).
 *
 * Artículo «¿Cuánto cuesta instalar riego automático?», escrito desde el brief del paso 3.
 * Este archivo NO se importa en ningún lado, así que no se publica: todavía tiene lugares
 * marcados con ⟦DUEÑO: …⟧ que hay que completar con datos reales de Riegomax.
 *
 * Para publicarlo:
 *  1. Reemplazar cada ⟦DUEÑO: …⟧ (buscar "⟦" en el archivo: no tiene que quedar ninguno).
 *  2. Agregar 2 o 3 fotos reales de los trabajos de ejemplo (bloques "imagen").
 *  3. Mover el objeto al principio de `articulos` en src/data/blog.ts y sumar la URL al sitemap.
 *  4. Agregar los enlaces entrantes del paso 5 (página de riego, preguntas frecuentes, etc.).
 */
export const articuloPrecioRiego: Articulo = {
  slug: "cuanto-cuesta-instalar-riego-automatico",
  titulo: "¿Cuánto cuesta instalar riego automático?",
  seoTitle: "Cuánto cuesta instalar riego automático en 2026 | Riegomax",
  seoDescription:
    "Qué incluye el precio de un sistema de riego automático, qué lo hace subir o bajar y ejemplos de jardines en zona oeste. Actualizado a ⟦DUEÑO: mes⟧ de 2026.",
  palabrasClave: [
    "riego automático precio",
    "cuánto cuesta un sistema de riego automático",
    "instalación riego automático precio",
    "riego automático precio m2",
    "precio sistema de riego para jardín",
  ],
  categoria: "Guías",
  fecha: "5 Diciembre 2026",
  lectura: "7 min lectura",
  descripcion:
    "Cuánto cuesta hoy un sistema de riego automático en zona oeste, qué incluye el precio, qué lo hace subir o bajar y ejemplos de jardines reales.",
  intro:
    "Si estás pensando en poner riego automático antes del verano, lo primero que querés saber es cuánto sale. La respuesta honesta es que depende del jardín, pero no es un misterio: el precio sale de unos pocos datos que se pueden medir. Acá te contamos cuánto cuesta hoy instalar un sistema de riego en Moreno y la zona oeste, qué tiene que incluir y qué lo hace subir o bajar, para que puedas comparar presupuestos con criterio.",
  contenido: [
    // 1 · Respuesta corta arriba: es lo que busca la gente y lo que Google puede mostrar como fragmento destacado
    { tipo: "h2", texto: "Cuánto cuesta, en pocas palabras", id: "respuesta-corta" },
    {
      tipo: "parrafo",
      texto:
        "A ⟦DUEÑO: mes⟧ de 2026, instalar un sistema de riego automático en el jardín de una casa de la zona oeste cuesta entre ⟦DUEÑO: precio mínimo⟧ y ⟦DUEÑO: precio máximo⟧, con materiales, mano de obra y programador incluidos. Un jardín chico, con césped y un par de canteros, queda cerca del mínimo. Uno grande, con varios sectores o que necesita bomba, se acerca al máximo.",
    },
    {
      tipo: "destacado",
      variante: "consejo",
      titulo: "Por qué hace falta una visita",
      texto:
        "Sin medir el jardín y la presión de agua, cualquier precio es una estimación. La visita para el presupuesto ⟦DUEÑO: es sin cargo / cuesta $…⟧ y en ella te proponemos el diseño por sectores.",
    },

    // 2 · Qué incluye: sirve para comparar presupuestos (la duda principal de quien busca el precio)
    { tipo: "h2", texto: "Qué incluye el precio de un riego automático", id: "que-incluye" },
    {
      tipo: "parrafo",
      texto: "Un presupuesto completo de instalación de riego tiene que incluir todo esto:",
    },
    {
      tipo: "lista",
      items: [
        "El diseño del sistema por sectores, según el sol, la sombra y lo que hay plantado.",
        "La medición de la presión y el caudal de agua de la casa.",
        "El zanjeo y la reposición del césped que se levanta.",
        "La cañería, el colector y una electroválvula por sector.",
        "Los aspersores emergentes para el césped y las líneas de goteo para canteros y cercos.",
        "El programador y, si lo pedís, el sensor de lluvia o el módulo Wifi.",
        "La prueba sector por sector, la regulación de los aspersores y la explicación de cómo usarlo.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "Al comparar precios, fijate que estén todos los puntos. A veces un presupuesto más barato deja afuera el programador, la reposición del pasto o la prueba final, y la diferencia aparece después.",
    },

    // 3 · Factores: responde «qué hace variar el precio» y explica por qué no hay un número único
    { tipo: "h2", texto: "Qué hace subir o bajar el precio", id: "factores" },
    {
      tipo: "parrafo",
      texto:
        "Dos jardines del mismo tamaño pueden tener presupuestos muy distintos. Estos son los factores que más pesan:",
    },
    {
      tipo: "tabla",
      encabezados: ["Factor", "Por qué cambia el precio"],
      filas: [
        ["Tamaño del jardín", "Más superficie significa más aspersores, más cañería y más metros de zanja."],
        ["Cantidad de sectores", "Cada sector suma una electroválvula y su cable hasta el programador."],
        ["Aspersión o goteo", "El césped se riega con aspersores y los canteros con goteo: son materiales distintos y muchos jardines necesitan los dos."],
        ["Presión de agua", "Si la red no alcanza, hay que sumar una bomba y un tablero eléctrico. Es uno de los factores que más mueven el presupuesto."],
        ["Suelo y obstáculos", "Tosca, raíces, caminos o contrapisos que hay que cruzar hacen más lento el zanjeo."],
        ["Programador y accesorios", "El módulo Wifi y el sensor de lluvia suman al precio, pero ahorran agua desde el primer verano."],
      ],
    },
    {
      tipo: "enlaces",
      titulo: "Para entender mejor estos factores",
      items: [
        {
          texto: "Riego por goteo o aspersión: cuál conviene",
          detalle: "Las diferencias entre los dos sistemas y dónde usar cada uno.",
          href: "/blog/riego-por-goteo-vs-aspersion",
        },
        {
          texto: "Cuándo hace falta una bomba para el riego",
          detalle: "Instalación de bombas de agua para casas y sistemas de riego.",
          href: "/servicios/bombas-de-agua",
        },
      ],
    },

    // 4 · Ejemplos reales: el aporte propio que no tienen la competencia ni la IA
    { tipo: "h2", texto: "Ejemplos: dónde entra tu jardín", id: "ejemplos" },
    {
      tipo: "parrafo",
      texto:
        "Estos son trabajos reales que hicimos en ⟦DUEÑO: localidades⟧. Te sirven para ubicar tu caso; el precio final sale de la visita.",
    },
    {
      tipo: "tabla",
      encabezados: ["Jardín", "Superficie", "Sectores", "Sistema", "Precio aproximado"],
      filas: [
        ["Chico", "⟦DUEÑO⟧ m²", "⟦DUEÑO⟧", "Césped con aspersores y un cantero con goteo", "⟦DUEÑO⟧"],
        ["Mediano", "⟦DUEÑO⟧ m²", "⟦DUEÑO⟧", "Césped, canteros y cerco vivo", "⟦DUEÑO⟧"],
        ["Grande o con bomba", "⟦DUEÑO⟧ m²", "⟦DUEÑO⟧", "Varios sectores, bomba y tablero", "⟦DUEÑO⟧"],
      ],
    },

    // 5 · Precio por m²: búsqueda real del paso 1 («riego automático precio m2»)
    { tipo: "h2", texto: "¿Conviene calcular el riego por metro cuadrado?", id: "precio-m2" },
    {
      tipo: "parrafo",
      texto:
        "Mucha gente busca el precio del riego automático por m², y como referencia sirve: ⟦DUEÑO: precio de referencia por m², o borrar esta frase⟧. Pero puede engañar. Un jardín de 100 m² con forma irregular, muchos canteros y poca presión puede costar más que uno de 200 m² rectangular y de puro césped. Lo que define el precio no es solo la superficie, sino cuántos sectores y cuántos aspersores hacen falta para regar parejo.",
    },

    // 6 · Kit o profesional: responde a quien compara con los kits de ferretería
    { tipo: "h2", texto: "Kit de ferretería o instalación profesional", id: "kit-o-profesional" },
    {
      tipo: "parrafo",
      texto:
        "Los kits de riego que venden en ferreterías sirven para macetas, un balcón o un cantero chico. Para un jardín con césped, en cambio, el sistema tiene que estar diseñado según la presión de tu casa y dividido en sectores, con la cañería enterrada y los aspersores ubicados para que sus chorros se crucen. Cuando eso no se hace, aparecen manchas secas, aspersores que mojan la pared y sectores que nunca terminan de regar bien.",
    },
    {
      tipo: "destacado",
      variante: "advertencia",
      titulo: "Lo barato que sale caro",
      texto: "⟦DUEÑO: el error más caro que vieron en un riego mal instalado y cuánto costó arreglarlo⟧",
    },

    // 7 · Costo de mantenerlo: completa la decisión de compra
    { tipo: "h2", texto: "Cuánto cuesta mantener el riego", id: "mantenimiento" },
    {
      tipo: "parrafo",
      texto:
        "Una vez instalado, el riego automático gasta poco. Bien programado, usa menos agua que la manguera, porque riega solo lo necesario y en los horarios en que menos se evapora. Con un sensor de lluvia, además, no riega cuando llueve.",
    },
    {
      tipo: "parrafo",
      texto:
        "Lo que sí conviene es una revisión al empezar la temporada: limpiar los filtros, revisar que todos los aspersores suban y giren, y ajustar los tiempos del programador para el verano. ⟦DUEÑO: precio de una revisión, o borrar esta frase⟧.",
    },

    // 8 · Cómo pedir un presupuesto: llamado a la acción natural para quien está por contratar
    { tipo: "h2", texto: "Cómo pedir un presupuesto que se pueda comparar", id: "presupuesto" },
    {
      tipo: "parrafo",
      texto: "Para comparar presupuestos de riego de igual a igual, pedí que detallen:",
    },
    {
      tipo: "lista",
      items: [
        "Cuántos sectores y cuántos aspersores lleva el sistema.",
        "Qué marca de programador y de aspersores se va a instalar.",
        "Si incluye la reposición del césped.",
        "Si hace falta bomba o tablero eléctrico, y si están incluidos.",
        "Cuántos días lleva la instalación.",
        "Qué garantía tiene y qué pasa si un sector queda seco después de instalado.",
      ],
    },

    // 9 · Preguntas frecuentes: dudas antes de contratar, distintas de las de la página de servicio
    { tipo: "h2", texto: "Preguntas frecuentes", id: "preguntas" },
    { tipo: "h3", texto: "¿La visita para el presupuesto se cobra?" },
    { tipo: "parrafo", texto: "⟦DUEÑO: sí o no, y cuánto⟧" },
    { tipo: "h3", texto: "¿Cuántos días lleva la instalación?" },
    {
      tipo: "parrafo",
      texto: "Un jardín de casa típico lleva ⟦DUEÑO⟧ días. Los jardines grandes o con bomba pueden llevar algunos días más.",
    },
    { tipo: "h3", texto: "¿Se puede instalar por etapas?" },
    {
      tipo: "parrafo",
      texto:
        "Sí. Se puede empezar por el césped y dejar el colector preparado para sumar los canteros más adelante. Conviene planificarlo todo desde el principio para no abrir zanjas dos veces.",
    },
    { tipo: "h3", texto: "¿Se rompe el césped al hacer las zanjas?" },
    {
      tipo: "parrafo",
      texto:
        "Las zanjas son angostas y el pasto se levanta con cuidado para volver a colocarlo al final. Con riego se recupera rápido, sobre todo en primavera y verano.",
    },
    { tipo: "h3", texto: "¿El riego automático tiene garantía?" },
    { tipo: "parrafo", texto: "⟦DUEÑO: qué cubre la garantía y por cuánto tiempo⟧" },
    { tipo: "h3", texto: "¿Aumenta mucho la boleta del agua?" },
    {
      tipo: "parrafo",
      texto:
        "Depende de si tu servicio de agua tiene medidor. En cualquier caso, un riego automático bien programado usa menos agua que regar con manguera, porque no desperdicia en caminos ni paredes y no riega cuando llueve.",
    },

    {
      tipo: "enlaces",
      titulo: "Para seguir",
      items: [
        {
          texto: "Pedí presupuesto para tu sistema de riego automático",
          detalle: "Diseño por sectores, instalación y programación en Moreno y zona oeste.",
          href: "/servicios/sistemas-de-riego",
        },
        {
          texto: "Errores que encarecen una instalación de riego",
          detalle: "Los problemas más comunes y cómo evitarlos.",
          href: "/blog/errores-comunes-instalacion-riego",
        },
        {
          texto: "Mantenimiento del riego automático",
          detalle: "Qué revisar al empezar cada temporada.",
          href: "/blog/mantener-filtros-y-valvulas",
        },
      ],
    },
  ],
};
