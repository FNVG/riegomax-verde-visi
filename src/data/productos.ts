export interface BloqueProducto {
  tipo:
    | 'h2'
    | 'h3'
    | 'parrafo'
    | 'lista'
    | 'imagen'
    | 'tabla'
    | 'destacado'
    | 'enlaces'
  contenido?: string
  items?: string[]
  src?: string
  alt?: string
  titulo?: string
  columnas?: string[]
  filas?: string[][]
  enlaces?: {
    texto: string
    url: string
  }[]
}

export interface Producto {
  slug: string
  nombre: string
  categoria: string
  descripcion: string
  imagen: string
  precio?: string
  caracteristicas: string[]
  contenido: BloqueProducto[]
}

export const productos: Producto[] = [
  {
    slug: 'fleje-chapa-bordes-canteros-caminos-oxido-marron',
    nombre: 'Flejes de metal color óxido para delimitar canteros y caminos',
    categoria: 'Bordes y delimitadores',
    descripcion:
      'Fleje de chapa metálica con acabado bajo óxido marrón, ideal para delimitar canteros, caminos y diferentes sectores del jardín de manera práctica y estética.',
    imagen: '/images/productos/fleje-chapa-oxido-marron.jpg',
    precio: undefined,

    caracteristicas: [
      'Fabricado en chapa metálica',
      'Acabado bajo óxido marrón',
      'Ideal para bordes de canteros',
      'Permite delimitar caminos y sectores del jardín',
      'Aporta un acabado decorativo y moderno',
      'Instalación práctica',
      'Ayuda a mantener definidos los límites del jardín'
    ],

    contenido: [
      {
        tipo: 'h2',
        contenido: 'Descripción del producto'
      },
      {
        tipo: 'parrafo',
        contenido:
          'El fleje de chapa para bordes de canteros y caminos es una solución práctica para delimitar diferentes espacios del jardín. Su acabado bajo óxido marrón permite integrarlo visualmente con espacios verdes, piedras, tierra y otros elementos naturales.'
      },
      {
        tipo: 'h2',
        contenido: 'Características'
      },
      {
        tipo: 'lista',
        items: [
          'Chapa metálica para delimitación de espacios.',
          'Color y acabado bajo óxido marrón.',
          'Diseñado para utilizarse en jardines y espacios exteriores.',
          'Permite separar visualmente canteros, caminos y zonas de césped.',
          'Contribuye a obtener bordes prolijos y definidos.'
        ]
      },
      {
        tipo: 'h2',
        contenido: 'Usos'
      },
      {
        tipo: 'lista',
        items: [
          'Delimitación de canteros.',
          'Separación entre césped y caminos.',
          'Delimitación de senderos.',
          'Separación de diferentes materiales de jardín.',
          'Diseño y terminación de espacios exteriores.'
        ]
      },
      {
        tipo: 'h2',
        contenido: 'Ventajas'
      },
      {
        tipo: 'parrafo',
        contenido:
          'Además de cumplir una función práctica, el fleje aporta una terminación estética al jardín. Permite crear líneas definidas y mantener separados distintos sectores, facilitando el mantenimiento y mejorando la organización visual del espacio.'
      },
      {
        tipo: 'destacado',
        titulo: 'Ideal para proyectos de paisajismo',
        contenido:
          'Una alternativa sencilla para crear bordes definidos en canteros, caminos y diferentes sectores de espacios verdes.'
      }
    ]
  },

  // ============================================================
  // MANTA ANTI-HELADA
  // ============================================================

  {
    slug: 'tela-manta-anti-helada',
    nombre: 'Tela Manta Anti-helada',
    categoria: 'Protección de cultivos',
    descripcion:
      'Tela manta anti-helada diseñada para proteger plantas, cultivos y especies ornamentales frente a las bajas temperaturas y las heladas.',
    imagen: '/images/productos/manta-antihelada.jpg',
    precio: undefined,

    caracteristicas: [
      'Protege plantas y cultivos frente a las heladas',
      'Ayuda a reducir el impacto de las bajas temperaturas',
      'Material liviano y fácil de manipular',
      'Permite cubrir plantas de diferentes tamaños',
      'Fácil de colocar y retirar',
      'Ideal para huertas, jardines y viveros',
      'Permite proteger cultivos durante períodos de frío'
    ],

    contenido: [
      {
        tipo: 'h2',
        contenido: 'Descripción del producto'
      },
      {
        tipo: 'parrafo',
        contenido:
          'La tela manta anti-helada es una solución práctica para proteger plantas, cultivos y especies ornamentales durante períodos de bajas temperaturas. Su utilización permite crear una capa de protección sobre las plantas, ayudando a reducir el impacto de las heladas.'
      },

      {
        tipo: 'h2',
        contenido: 'Características'
      },
      {
        tipo: 'lista',
        items: [
          'Diseñada para la protección de plantas frente a las bajas temperaturas.',
          'Ayuda a disminuir los efectos de las heladas sobre los cultivos.',
          'Material liviano y sencillo de manipular.',
          'Puede utilizarse sobre plantas, canteros y cultivos.',
          'Fácil de colocar y retirar según las necesidades del cultivo.'
        ]
      },

      {
        tipo: 'h2',
        contenido: 'Usos'
      },
      {
        tipo: 'lista',
        items: [
          'Protección de huertas durante períodos de frío.',
          'Protección de plantas ornamentales.',
          'Protección de cultivos frente a heladas.',
          'Uso en jardines y espacios verdes.',
          'Protección temporal de plantas en viveros.',
          'Cobertura de plantas sensibles a las bajas temperaturas.'
        ]
      },

      {
        tipo: 'h2',
        contenido: '¿Cómo utilizarla?'
      },
      {
        tipo: 'parrafo',
        contenido:
          'La manta se coloca sobre las plantas que se desean proteger, procurando cubrirlas adecuadamente durante los períodos de mayor riesgo de heladas. Puede sujetarse de manera que permanezca estable y retirarse cuando las condiciones climáticas vuelvan a ser favorables.'
      },

      {
        tipo: 'h2',
        contenido: 'Ventajas'
      },
      {
        tipo: 'lista',
        items: [
          'Protección sencilla frente a las heladas.',
          'Fácil colocación y manipulación.',
          'Permite proteger diferentes tipos de plantas.',
          'Ayuda a reducir el riesgo de daños ocasionados por las bajas temperaturas.',
          'Una solución práctica para jardines, huertas y cultivos.'
        ]
      },

      {
        tipo: 'destacado',
        titulo: 'Protegé tus plantas durante el invierno',
        contenido:
          'La manta anti-helada es una alternativa práctica para brindar protección adicional a plantas y cultivos durante períodos de bajas temperaturas.'
      }
    ]
  }
]

export function getProducto(slug: string): Producto | undefined {
  return productos.find((producto) => producto.slug === slug)
}