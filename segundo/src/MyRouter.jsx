import { createBrowserRouter } from "react-router-dom"

import App from "./App";
import PaginaErro from "./Pages/PaginaErro";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<PaginaErro/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/login",
                element:<Login/>
            },
            
            {
                path:"/sobre",
                element:<Sobre/>
            },
            {
                path:"/cad",
                element:<Cadastro/>
            },
            {
                path:"/cont",
                element:<Contato/>
            },

        ],
    },
]);

export default router