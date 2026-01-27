import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Bot Analyzer",
    description: "Plataforma de análise de código JavaScript com gamificação. Sistema de pontos por análises e tracking de evolução.",
    tags: ["React", "Vite", "Node.js", "Express", "Google Gemini AI"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    liveUrl: "https://botanalyzer.netlify.app",
    repoUrl: "https://github.com/felipe-allves/bot_analyzer",
  },
  {
    title: "PaletaMestre",
    description: "Gerador de paletas de cores harmoniosas para designers e desenvolvedores. Sistema de travamento de cor e exportação.",
    tags: ["React 19", "Vite", "Tailwind CSS", "Context API"],
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
    liveUrl: "https://paletamestre.netlify.app",
    repoUrl: "https://github.com/felipe-allves/PaletaMestre",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-title">
            Meus <span>Projetos</span>
          </h2>
          <p className="projects-description">
            Projetos complexos, hospedados e funcionais que demonstram minhas habilidades.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay" />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={16} />
                    Ver Site
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;