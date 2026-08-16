import { productos } from '../data/productos'
import ProductCard from '../components/ProductCard'

const ProductIndex = () => {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Nuestros productos
          </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        Productos de jardinería
      </h2>
        

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Descubrí nuestra selección de productos para riego,
            jardinería y paisajismo.
          </p>
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productos.map((producto, index) => (
            <ProductCard
              key={producto.slug}
              producto={producto}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProductIndex