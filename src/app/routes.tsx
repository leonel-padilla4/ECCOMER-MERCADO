import { createBrowserRouter } from "react-router";
import { RootLayout } from "./pages/RootLayout";
import { HomePage } from "./pages/HomePage";

export const router = createBrowserRouter([

    {
        path: '/',
        Component:RootLayout,
        children:[
            {
                index:true,Component: HomePage
            },
            {
             path:'*',
             Component: () =>(
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-xl text-gray-600">Pagina No Encontrada</p>
                </div>
             )   
            }

        ]

    }

])