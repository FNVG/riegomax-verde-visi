import { Link, useParams } from 'react-router-dom'
import { getProducto } from '../data/productos'

const ProductoDetalle = () => {
  const { slug } = useParams<{ slug: string }>()

  const producto = slug ? getProducto(slug) : undefined

  useEffect(() => {
  if (!producto) {
    document.title = 'Producto no encontrado | Riegomax'
    return
  }

  const title = `${producto.nombre} | Riegomax`
  const description = producto.descripcion

  // Convierte /images/productos/... en una URL completa
  const imageUrl = new URL(
    producto.imagen,
    window.location.origin
  ).href

  document.title = title

  const setMeta = (
    name: string,
    content: string,
    attribute: 'name' | 'property' = 'name'
  ) => {
    let meta = document.querySelector(
      `meta[${attribute}="${name}"]`
    ) as HTMLMetaElement | null

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', content)
  }

  // SEO
  setMeta('description', description)

  // Open Graph
  setMeta('og:title', title, 'property')
  setMeta('og:description', description, 'property')
  setMeta('og:image', imageUrl, 'property')
  setMeta('og:type', 'product', 'property')

  // Twitter
  setMeta('twitter:card', 'summary_large_image')
  setMeta('twitter:title', title)
  setMeta('twitter:description', description)
  setMeta('twitter:image', imageUrl)
}, [producto])
  // Producto no encontrado
  if (!producto) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>

          <p className="text-gray-600 mb-6">
            El producto que estás buscando no existe o ya no está disponible.
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            ← Volver 
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">

      {/* Hero del producto */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="text-sm text-green-600 hover:text-green-700 font-medium"
            >
              ← Volver 
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Imagen */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-green-700 text-sm font-semibold rounded-full shadow-sm">
                  {producto.categoria}
                </span>
              </div>
            </div>

            {/* Información */}
            <div>
              <p className="text-sm uppercase tracking-wider font-semibold text-green-600 mb-3">
                Producto
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {producto.nombre}
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {producto.descripcion}
              </p>

              {/* Precio */}
              <div className="mt-6">
                {producto.precio ? (
                  <>
                    <span className="block text-sm text-gray-500">
                      Precio
                    </span>

                    <span className="text-2xl font-bold text-gray-900">
                      {producto.precio}
                    </span>
                  </>
                ) : (
                  <span className="text-base font-medium text-gray-600">
                    Consultar precio
                  </span>
                )}
              </div>

              {/* Características */}
              {producto.caracteristicas.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Características principales
                  </h2>

                  <ul className="space-y-3">
                    {producto.caracteristicas.map((caracteristica, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                        <span>{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Botón de consulta */}
              <div className="mt-8">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Consultar por este producto
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contenido detallado */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {producto.contenido.map((bloque, index) => {

            switch (bloque.tipo) {

              case 'h2':
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-5 first:mt-0"
                  >
                    {bloque.contenido}
                  </h2>
                )

              case 'h3':
                return (
                  <h3
                    key={index}
                    className="text-xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {bloque.contenido}
                  </h3>
                )

              case 'parrafo':
                return (
                  <p
                    key={index}
                    className="text-base md:text-lg text-gray-600 leading-8 mb-6"
                  >
                    {bloque.contenido}
                  </p>
                )

              case 'lista':
                return (
                  <ul
                    key={index}
                    className="space-y-3 mb-8"
                  >
                    {bloque.items?.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )

              case 'imagen':
                return (
                  <figure
                    key={index}
                    className="my-10"
                  >
                    <img
                      src={bloque.src}
                      alt={bloque.alt || producto.nombre}
                      className="w-full rounded-2xl shadow-sm"
                    />

                    {bloque.contenido && (
                      <figcaption className="mt-3 text-sm text-gray-500 text-center">
                        {bloque.contenido}
                      </figcaption>
                    )}
                  </figure>
                )

              case 'destacado':
                return (
                  <div
                    key={index}
                    className="my-8 p-6 md:p-8 bg-green-50 border-l-4 border-green-600 rounded-r-xl"
                  >
                    {bloque.titulo && (
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {bloque.titulo}
                      </h3>
                    )}

                    <p className="text-gray-700 leading-relaxed">
                      {bloque.contenido}
                    </p>
                  </div>
                )

              case 'tabla':
                return (
                  <div
                    key={index}
                    className="my-8 overflow-x-auto rounded-xl border border-gray-200"
                  >
                    <table className="w-full text-left">
                      {bloque.columnas && (
                        <thead className="bg-gray-50">
                          <tr>
                            {bloque.columnas.map((columna, columnaIndex) => (
                              <th
                                key={columnaIndex}
                                className="px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200"
                              >
                                {columna}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}

                      <tbody>
                        {bloque.filas?.map((fila, filaIndex) => (
                          <tr
                            key={filaIndex}
                            className="border-b border-gray-100 last:border-0"
                          >
                            {fila.map((celda, celdaIndex) => (
                              <td
                                key={celdaIndex}
                                className="px-5 py-4 text-sm text-gray-600"
                              >
                                {celda}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )

              case 'enlaces':
                return (
                  <div
                    key={index}
                    className="my-8 space-y-3"
                  >
                    {bloque.enlaces?.map((enlace, enlaceIndex) => (
                      <a
                        key={enlaceIndex}
                        href={enlace.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-green-600 hover:text-green-700 hover:underline font-medium"
                      >
                        {enlace.texto} →
                      </a>
                    ))}
                  </div>
                )

              default:
                return null
            }
          })}

        </div>
      </section>

      {/* Volver a productos */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8 border-t border-gray-200">
            <Link
              to="/productos"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              ← Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

export default ProductoDetalle