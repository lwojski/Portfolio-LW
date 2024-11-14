import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/logo.png'
import githubLogo from '../../assets/github-mark.svg'
import linkedinLogo from '../../assets/linkedin-mark.svg'
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
            <div className="header-left">
                <Link to="/">
                    <img src={logo} alt="Logo Lilian" className="logo" />
                </Link>
                <a
                    href="https://github.com/lwojski"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={githubLogo}
                        alt="Github"
                        className="header-icon"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/lilian-wojciechowski-3911b3333"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={linkedinLogo}
                        alt="Linkedin"
                        className="header-icon"
                    />
                </a>
            </div>
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
