import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";

export const router_app = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contacto",
        element: <Contacto />
    },
    {
        path: "/servicios",
        element: <Servicios />
    }
]