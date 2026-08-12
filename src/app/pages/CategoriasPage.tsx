import { Funnel, LayoutGrid } from "lucide-react";
import { categorias, products } from "../data/product";
import { useSearchParams } from "react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Skeleton } from "@mui/material";

// Componente skeleton
function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <Skeleton
        variant="rectangular"
        height={200}
        animation="wave"
        sx={{ borderRadius: 2, mb: 1 }}
      />
      <Skeleton animation="wave" width="80%" />
      <Skeleton animation="wave" width="50%" />
      <Skeleton animation="wave" width="60%" height={32} />
    </div>
  );
}

export function CategoriasPage() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";
  const [SelectCategoria, setSelectCategoria] = useState(categoryFilter);
  const loading = products.length === 0;
  const [sortBy, setSortBy] = useState("");
  

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // vamos a filtrar
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    //categoria filtrar
    if (SelectCategoria) {
      filtered = filtered.filter((p) =>
        p.category.toLowerCase() === SelectCategoria.toLowerCase()
      );
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchQuery, SelectCategoria, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        {searchQuery && (
          <h1 className="text-2xl font-bold mb-2">
            {categorias.find((c) => c.id === SelectCategoria)?.name}
          </h1>
        )}

        {SelectCategoria && (
          <p className="text-sm text-gray-500 mt-1">
            Resultados para {SelectCategoria === "all" ? "todos" : SelectCategoria}
          </p>
        )}

        <p className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? "Resultado" : "Resultados"}
        </p>
      </div>

      <div className="flex gap-6 items-start">
        {/* Sidebars filters */}
        <aside className="md:block w-64 bg-white p-5  rounded-2xl h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold flex items-center gap-2">
              <Funnel className="w-5 h-5" />
              Filtro
            </h2>
          </div>

          {/* Categorias */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Categorias</h3>

            <div className="space-y-2">
              <button
                onClick={() => setSelectCategoria("")}
                className={`w-full text-left px-2 py-1 rounded flex items-center gap-2 transition-colors ${SelectCategoria === ""
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                <LayoutGrid className="w-4 h-4" />
                Todas
              </button>

              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setSelectCategoria(categoria.id)}
                  className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${SelectCategoria === categoria.id
                      ? "bg-blue-50 text-blue-600"
                      : ""
                    }`}
                >
                  {categoria.icon} {categoria.name}
                </button>
              ))}
            </div>
          </div>

          {/* Precio Rango */}

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Precio</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value="0"
                  className="w-full px-2 py-1 border rounded"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value="3000"
                  className="w-full px-2 py-1 border rounded"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Envio</h3>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Envio gratis</span>
            </label>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-800 font-bold">
                Ordenar Por:
              </label>
          <select 
  value={sortBy} 
  onChange={(e) => setSortBy(e.target.value)}
  className="px-3 py-1 border rounded"
>
  <option value="" disabled>Selecciona una opción</option>
  <option value="relevance">Mas Relevante</option>
  <option value="price-low">Menor Precio</option>
  <option value="price-high">Mayor Precio</option>
  <option value="rating">Mejor Calificados</option>
</select>
            </div>
          </div>

          {/* Grid con skeleton */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Array(12)
                .fill(null)
                .map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-xl text-gray-600 mb-2">
                No hay productos en esta categoria
              </p>
              <p className="text-gray-500">
                Revisa la categoria o intenta con otros filtros
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
