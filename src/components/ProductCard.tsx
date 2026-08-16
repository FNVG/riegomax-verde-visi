import { Link } from 'react-router-dom'
import type { Producto } from '../data/productos'

interface ProductCardProps {
  producto: Producto
  index?: number
}

const ProductCard = ({ producto, index = 0 }: ProductCardProps) => {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Categoría */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-green-700 rounded-full shadow-sm">
            {producto.categoria}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">

        {/* Nombre */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
          {producto.nombre}
        </h3>

        {/* Descripción */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {producto.descripcion}
        </p>

        {/* Características */}
        {producto.caracteristicas.length > 0 && (
          <ul className="mt-4 space-y-2">
            {producto.caracteristicas.slice(0, 3).map((caracteristica, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
                <span>{caracteristica}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Precio y botón */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-4">

          {producto.precio ? (
            <div>
              <span className="text-xs text-gray-500 block">
                Precio
              </span>
              <span className="text-lg font-bold text-gray-900">
                {producto.precio}
              </span>
            </div>
          ) : (
            
            <a
            href={`https://wa.me/5491159247748?text=${encodeURIComponent(
              `Hola, quisiera consultar el precio del producto: ${producto.nombre}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
          >
            Consultar precio
          </a>
          )}

          <Link
            to={`/productos/${producto.slug}`}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            Ver producto
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </div>
    </article>
  )
}

export default ProductCard