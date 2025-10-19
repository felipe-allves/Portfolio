import React, { useState } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import './Certificates.css'


import rocketseat from '../../images/Certificates/Rocketseat.png'

function Certificates() {
    const [showAllCertificates, setShowAllCertificates] = useState (false)

    const certificates = [
        {
            img: rocketseat,
            title: "Minicurso React Native",
            conclusion: "Concluído em 17 de Julho de 2025",
            link: "https://app.rocketseat.com.br/certificates/36b1e1d6-1363-4642-9bc2-844b729cabaa"
        },
        {
            img: rocketseat,
            title: "NLW #20",
            conclusion: "Concluído em 11 de Julho de 2025",
            link: "https://app.rocketseat.com.br/certificates/c92b616f-baf1-4025-8c3a-299908473108"
        },
        {
            img: rocketseat,
            title: " Posicionamento nas redes sociais",
            conclusion: "Concluído em 18 de Julho de 2025",
            link: "https://app.rocketseat.com.br/certificates/3c6c066f-f4b5-485a-b465-9e47476adcce"
        },
    ]

    const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, 3)

    return(
        <section id="certificates" className="projects-container">
            <h1>Certificados</h1>
            <div className="main-container">
                <div className="projects-grid">
                    {visibleCertificates.map((certificate, index) => (
                        <div className="project-card" key={index}>
                            <img src={certificate.img} alt={certificate.title} />
                            <h2>{certificate.title}</h2>
                            <p>{certificate.conclusion}</p>
                            <a 
                                href={certificate.link}
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                   <LiaCertificateSolid/> Ver Certificado
                                </a>
                        </div>
                    ))}
                </div>

                {!showAllCertificates && certificates.length > 3 && (
                    <div className="button-container">
                        <button
                        className="load-more-btn"
                        onClick={() => setShowAllCertificates(true)}
                        >
                            Ver mais Certificados
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Certificates