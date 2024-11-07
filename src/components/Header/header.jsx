import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.scss'

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo Lilian" className="logo" />
            </Link>
            <nav>
                <NavLink to="/" className="nav-link">
                    Projets
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
