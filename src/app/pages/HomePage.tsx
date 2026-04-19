import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { categorias, products } from "../data/product";
import { ProductCard } from "../components/ProductCard";

export function HomePage() {
  const ofertas = products.filter((product) => product.originalPrice);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Banner  */}

      <div className="bg-gradient-to-r from-blue-600 to-pink-300 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">!Bienvenido A Mercado Libre</h1>

        <p className="text-xl mb-6">
          Descubre Miles de Productos con envio gratis y las mejores ofertas
        </p>

        <Link
          to="/productos"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold 
                    hover:bg-gray-100 transition-colors
                    "
        >
          Ver Todos los productos
        </Link>
      </div>
      {/* Categorias */}

      <section className="mb-12">
        <div className="flex item-center justify-between ab-6">
          <h2 className="text-2xl font-bold">Categorias</h2>

          <Link
            to="/categorias"
            className=" text-blue-700 flex items-center gap-1"
          >
            Ver todas
            <ChevronRight className="w-6 h-6 mt-1" />
          </Link>
        </div>

        <div className="grid grid-rows-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              to={"productos?categoria=${categoria.id}"}
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-4xl mb-2">{categoria.icon}</div>
              <div className="text-sm font-medium">{categoria.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ofertas */}

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Ofertas del Dia</h2>
          <Link
            to="/productos?ofertas=true"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            Ver Todas
            <ChevronRight className="w-6 h-6 mt-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ofertas.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Productos Destacados */}

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Productos Destacados</h2>
          <Link
            to="/productos?destacados=true"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            Ver Todas
            <ChevronRight className="w-6 h-6 mt-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Beneficios */}

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-lg font-bold mb-2">Envío gratis</h3>
            <p className="text-gray-500">En miles de productos seleccionados</p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-lg font-bold mb-2">Pago seguro</h3>
            <p className="text-gray-500">Protegemos tus datos y compras</p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-lg font-bold mb-2">Devolución gratis</h3>
            <p className="text-gray-500">
              Tienes 30 días desde que recibes el producto
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
