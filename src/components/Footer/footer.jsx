import githubWhiteLogo from '../../assets/github-white.png'
import linkedinWhiteLogo from '../../assets/linkedin-white.png'
import './footer.scss'

function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <a
                    href="https://github.com/lwojski"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={githubWhiteLogo}
                        alt="Github"
                        className="footer-icon"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/lilian-wojciechowski-3911b3333"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={linkedinWhiteLogo}
                        alt="Linkedin"
                        className="footer-icon"
                    />
                </a>
            </div>
            <p>Lilian Wojciechowski, Tous droits réservés.</p>
        </footer>
    )
}

export default Footer
