import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/logo.png'
import './header.scss'

function Header() {
    const handleProjectsClick = () => {
        scroll.scrollTo(document.querySelector('.gallery').offsetTop, {
            smooth: 'true',
            duration: 500,
        })
    }

    const handleContactClick = () => {
        scroll.scrollTo(document.querySelector('.home-form').offsetTop, {
            smooth: 'true',
            duration: 1000,
        })
    }

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo Lilian" className="logo" />
            </Link>
            <nav>
                <button onClick={handleProjectsClick} className="nav-link">
                    Projets
                </button>
                <button onClick={handleContactClick} className="nav-link">
                    Contact
                </button>
            </nav>
        </header>
    )
}

export default Header
