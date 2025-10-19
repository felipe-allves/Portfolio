import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si"
import './Footer.css'

function Footer () {
    return(
        <section id="contact" className="contact-container">
            <div className="main-container">
                <h1 className="title">Entre em contato</h1>
                <p className="description">Como posso colaborar com o seu projeto?</p>
                <div className="social-links">
                    <a href="https://github.com/felipe-allves" target="_blank" title="Github"><SiGithub/></a>
                    <a href="https://instagram.com/f_alvsz" target="_blank" title="Instagram"><SiInstagram/></a>
                    <a href="https://www.linkedin.com/in/felipe-allves/" target="_blank" title="Linkedin"><SiLinkedin/></a>
                    <a href="mailto:felipealves1484@gmail.com" target="_blank" title="Email"><SiGmail/></a>
                </div>
            </div>
        </section>
    )
}

export default Footer