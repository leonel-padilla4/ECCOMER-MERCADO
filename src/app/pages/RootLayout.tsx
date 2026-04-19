import { Outlet } from 'react-router';
import { Header } from '../components/Header';

export function RootLayout() {

    return (
        <div className="min-h-screen bg-gray-100">

            <Header />

            <main>
                
                <Outlet />
            </main>

            {/* footer */}

            <footer className="bg-white mt-16 border-t">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold mb-4">Acerca de</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Mercado Libre</a></li>
                                <li><a href="#" className="hover:text-blue-600">Investor relations</a></li>
                                <li><a href="#" className="hover:text-blue-600">Tendencias</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Otros sitios</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Developers</a></li>
                                <li><a href="#" className="hover:text-blue-600">Mercado Pago</a></li>
                                <li><a href="#" className="hover:text-blue-600">Mercado Envíos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Ayuda</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Comprar</a></li>
                                <li><a href="#" className="hover:text-blue-600">Vender</a></li>
                                <li><a href="#" className="hover:text-blue-600">Resolución de problemas</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Redes sociales</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                                <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
                                <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
                        <p>Copyright © 1999-2026 MercadoLibre</p>
                    </div>
                </div>
            </footer>

        </div>

    )

}
