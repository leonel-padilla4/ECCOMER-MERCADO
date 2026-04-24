import { Funnel } from "lucide-react";
import { categorias } from "../data/product";
import { useSearchParams } from "react-router";
import { useState } from "react";

export function CategoriasPage() {
  const [searchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category") || "";

  const [selectCategoria, setSelectCategoria] = useState(categoryFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex gap-6">
        {/* Sidebars filters */}
        <aside className="md:block w-64 bg-white p-5 rounded-2xl">
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
              <button className="w-full text-left px-2 py-1 rounded bg-blue-100 text-blue-600 hover:bg-gray-100">
                Todas
              </button>

              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setSelectCategoria(categoria.id)}
                  className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${
                    selectCategoria === categoria.id
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
            <div className="bg-white rounded-lg p-4 mb-6 flrx items-center justify-between">
                <div className="flex items-center gap-4">
                    <label className="text-sm text-gray-800 font-bold">Ordenar Por:</label>
                    <select className="px-3 py-1 border rounded">
                        <option value="----"selected----></option>
                        <option value="relevance">Mas Relevante</option>
                        <option value="price-low">Menor Precio</option>
                        <option value="price-high">Mayor Precio</option>
                        <option value="rating">Mejor Calificados</option>
                    </select>
                </div>
            </div>
        </div>


      </div>
    </div>
  );
}
