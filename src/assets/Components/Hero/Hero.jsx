import react from 'react'
import './Hero.css'

import PhotoProfile from '../../images/PhotoProfile.jpg'

function Hero () {
    return(
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="image">
                    <img src={PhotoProfile} alt="Foto" />
                </div>
            <div className="text-hero">
                <h1>Olá, Eu sou o <span>Felipe Alves</span></h1>
                <p>
                    Desenvolvedor Frontend Junior especializado em criação de sites. Esperiencia em HTML5, CSS3,
                    Javascript. Atulamente estou utilizando React com jsx em projetos,  
  buscando sempre criar interfaces interativas, rápidas e com código limpo,  
  enquanto aprimoro minhas habilidades na prática.  
                </p>
            </div>
            </div>
        </section>
    )
}

export default Hero