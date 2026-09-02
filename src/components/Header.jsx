import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </header>
    )
}

export default Header