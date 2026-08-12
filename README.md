# 🛒 ECCOMER-MERCADO — Sistema Web de E-commerce

Tienda en línea construida con React y TypeScript que permite explorar productos por categoría y gestionar un carrito de compras con cálculo dinámico de totales.

## 🚀 Funcionalidades

- Catálogo de productos con imagen, precio, calificación y descripción
- Navegación por categorías
- Carrito de compras:
  - Agregar productos
  - Eliminar productos
  - Actualizar cantidad
  - Cálculo automático del total
- Interfaz responsive con componentes reutilizables (ProductCard, Header)

## 🛠️ Tecnologías utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Material UI (MUI)**
- **React Router**
- **Context API** (manejo global del estado del carrito)

## 📂 Estructura del proyecto

```
src/
├── app/
│   ├── components/    # ProductCard, Header
│   ├── context/        # CartContext (estado global del carrito)
│   ├── data/            # Catálogo de productos
│   └── pages/           # HomePage, CategoriasPage, RootLayout
└── styles/              # Estilos globales, Tailwind, temas
```

## 📦 Instalación y uso

```bash
git clone https://github.com/leonel-padilla4/ECCOMER-MERCADO.git
cd ECCOMER-MERCADO
npm install
npm run dev
```

La aplicación se ejecutará en modo desarrollo con Vite (por defecto en `http://localhost:5173`).

## 📸 Capturas

_(agrega aquí 1-2 screenshots de la app: catálogo y carrito de compras)_

## 👤 Autor

**Leonel Padilla Torres**
Estudiante de Desarrollo de Software — SENATI
[github.com/leonel-padilla4](https://github.com/leonel-padilla4)
