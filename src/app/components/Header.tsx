import { Link } from 'react-router';
import { Search,ShoppingCart,MapPin } from 'lucide-react';


export function Header() {

    return (
        <header className="bg-yellow-400 sticky top-0 z-50 shadow-md">

            <div className="max-w-7xl mx-auto px-4 py-4">

                <div className="flex items-center justify-between gap-4 mb-3">
                    {/* Logo del mercadito */}
                    <Link to="/" className="text-2xl font-bold text-gray-900 hover:opacity-80 transition-opacity">
                        Mercado Libre
                    </Link>

                    {/*Search o Buscar*/}

                    <form className="flex-1 max-w-2xl">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder='Buscar Productos, marcas y mas'
                                className="w-full px-4 
                                py-2 pr-12 
                                rounded-sm 
                                shadow-sm 
                                focus:outline-none 
                                focus:ring2
                                 focus:ring-blue-500
                                  bg-white"
                            />
                            <button
                                type='submit'
                                className='absolute 
                                right-0 top-0
                                 h-full px-4
                                  bg-white 
                                  hover:bg-gray-50 
                                  rounded-r-sm 
                                  transition-colors'
                            >
                               <Search className='W-5 text-gray-600'/>
                            </button>

                        </div>
                    </form>


                    {/* Carritoo */}
                    <Link
                        to='/carrito'
                        className='flex items-center gap-2 bg-white px-3 py-2 rounded-sm hover:bg-gray-50 transition-colors relative'
                    >
                        {/* Logica del carritoo */}

                        <ShoppingCart className='w-5 h-5'/>

                    </Link>
                </div>

                {/* Navegacionn */}

                <nav className='flex items-center gap-6 text-sm'>
                    <button className='flex item-center gap-1 hover:opacity-80'>
                        <MapPin className='w-4 h-4'/>
                        <span>Enviar a Capital</span>
                    </button>

                    <Link to="/categorias" className="hover:opacity-80">
                        Categorias
                    </Link>

                    <Link to="/ofertas" className="hover:opacity-80">
                        Ofertas
                    </Link>

                    <Link to="/historial" className="hover:opacity-80">
                        Historial
                    </Link>

                    <Link to="/cuenta" className="hover:opacity-80 flex items-center gap-1">
                        <span>Mi cuentas</span>
                    </Link>

                </nav>

            </div>

        </header>

    )

}