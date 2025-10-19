import React, { useState } from "react";
import './Header.css'

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header () {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return(
        <header className="nav">
            <nav>
                <div className="nav-container">
                    <div className="logo">
                        <h1>Felipe <span>Alves</span></h1>
                    </div>
                    
                    <button
                        className="hamburger"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
                    </button>

                    <div className={`links ${menuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><a href="#home" onClick={closeMenu}>Início</a></li>
                            <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
                            <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
                            <li><a href="#certificates" onClick={closeMenu}>Certificados</a></li>
                            <li><a href="#Knowledge" onClick={closeMenu}>Habilidades</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header