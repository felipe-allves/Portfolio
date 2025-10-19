import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbFileTypeJsx } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

import './Knowledge.css'

function Knowledge () {
    return(
        <section className="knowledge">
            <h1 className="section-title">Conhecimentos</h1>
            <div className="knowledge-container">
                <div className="knowledge-itens">
                    <h2>Tecnologias</h2>
                    <div className="knowledge-content">
                        <div className="knowledge-grid">
                            <div className="tech-itens">
                                <FaHtml5 className="icon"/>
                                <span>HTML</span>
                            </div>
                            <div className="tech-itens">
                                <FaCss3 className="icon"/>
                                <span>CSS</span>
                            </div>
                            <div className="tech-itens">
                                <RiJavascriptFill className="icon"/>
                                <span>JAVASCRIPT</span>
                            </div>
                            <div className="tech-itens">
                                <TbFileTypeJsx className="icon"/>
                                <span>REACT</span>
                            </div>
                            <div className="tech-itens">
                                <FaBootstrap className="icon"/>
                                <span>BOOTSTRAP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="knowledge-container">
                <div className="knowledge-itens">
                    <h2>Ferramentas & DevOps</h2>
                    <div className="knowledge-content">
                        <div className="knowledge-grid">
                            <div className="tech-itens">
                               <VscVscode className="icon"/>
                                <span>vs code</span>
                            </div>
                            <div className="tech-itens">
                                <FaGitAlt className="icon"/>
                                <span>Git</span>
                            </div>
                            <div className="tech-itens">
                                <IoLogoFigma className="icon"/>
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Knowledge