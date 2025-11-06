import React, { useState } from "react";
import { FaGithub } from 'react-icons/fa'
import './Projects.css';

import npm from '../../images/Projects/npm.png';
import python from '../../images/Projects/python.png';
import horaInteligete from '../../images/Projects/site.png';
import codeSnap from '../../images/Projects/site (2).png';
import doceDelicia from '../../images/Projects/DoceDelicia.png'
import codeDocs from '../../images/Projects/CodeDocs.png'
import paletamestre from '../../images/Projects/PaletaMestre.png'

function Projects() {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const projects = [
        {
            img: doceDelicia,
            title: "DoceDelicia",
            description: "Site institucional da Doce Delícia, uma confeitaria artesanal fictícia com foco em apresentar produtos, especialidades, história e canais de contato. Desenvolvido com React JS, estilo global em CSS puro e layout totalmente responsivo.",
            link: "https://github.com/felipe-allves/DoceDelicia-Confeitaria-Artesanal-em-React"
        },
        {
            img: codeDocs,
            title: "CodeDocs",
            description: "Documentação completa e organizada das principais linguagens de programação, feita em React para facilitar seu aprendizado e consulta rápida.",
            link: "https://github.com/felipe-allves/CodeDocs"
        },
        {
            img: paletamestre,
            title: "PaletaMestre",
            description: "Gerador de paletas de cores aleatorias para projetos, design, etc. Feito com intuito de ajudar quem quer cores rápidas.",
            link: "https://github.com/felipe-allves/PaletaMestre"
        },
        {
            img: horaInteligete,
            title: "Hora Inteligente",
            description: "Um sistema de hora em HTML, CSS, JS, com função determinada para uma certa hora do dia, aparecerá uma frase embaixo da hora.",
            link: "https://github.com/felipeassisdev/Hora-Inteligente"
        },
        {
            img: python,
            title: "Spicetify",
            description: "Automação para a instalação do spicetify",
            link: "https://github.com/felipeassisdev/Spicetify"
        },
        {
            img: npm,
            title: "SearchInput",
            description: "Sistema de busca que filtra divs conforme o texto digitado.",
            link: "https://github.com/felipeassisdev/SearchInput"
        },
        {
            img: npm,
            title: "Hours",
            description: "Relógio digital que atualiza automaticamente.",
            link: "https://github.com/felipeassisdev/hours"
        },
        {
            img: npm,
            title: "ShowAlert",
            description: "Módulo de alerta em JavaScript para mensagens personalizadas.",
            link: "https://github.com/felipeassisdev/ShowAlert"
        },
        {
            img: codeSnap,
            title: "CodeSnap",
            description: "Ferramenta para aprender programação.",
            link: "https://github.com/felipeassisdev/CodeSnap"
        }
    ];

    // Quantidade de quantos projetos vão aparecer inicialmente
    const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="projects-container">
            <h1>Projetos</h1>
            <div className="main-container">
                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.img} alt={project.title} />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a 
                                href={project.link} 
                                className="github-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> Ver no Github
                            </a>
                        </div>
                    ))}
                </div>

                {/* Botão "Ver Mais" (só aparece se houver projetos ocultos) */}
                {!showAllProjects && projects.length > 3 && (
                    <div className="button-container">
                        <button 
                            className="load-more-btn" 
                            onClick={() => setShowAllProjects(true)}
                        >
                            Ver Mais Projetos
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;