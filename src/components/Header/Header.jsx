/* eslint-disable no-undef */
import { useState } from "react"

// Chamando o arquivo css
import './Header.css'

// Importando a imagem de avatar
import Avatar from '../../assets/Avatar.png'

function Header () {
    // Usando o useState para abrir e fechar o menu
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <div className="avatar-container">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                    <div className="mobile-menu">
                        <button className="button-mobile" onClick={toggleMenu}>
                            Menu
                        </button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <button className="mobile-menu close-btn" onClick={toggleMenu}>
                            X
                        </button>
                        <ul className="d-flex">
                            <li><a href="#blog" onClick={() => scrollToSection("blog")}>Blog</a></li>
                            <li><a href="#projetos" onClick={() => scrollToSection("projetos")}>Projetos</a></li>                            
                            <li>
                                <a href="https://wa.me/5562999653508" target="_blank" rel="noopener noreferrer">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header