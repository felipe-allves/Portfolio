import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Tailwind", level: 80 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 65 },
  { name: "Node.js", level: 50 },
];

const technologies = [
  "Git", "GitHub", "VS Code", "Vite", 
  "Netlify", "Figma", "Cursor Composer", "React Router DOM",
  "Responsive Design", "Windows", "Linux"
];

const audiovisual = [
  "Captura de Foto", "Captura de Vídeo", "Iluminação", 
  "Edição de Vídeo", "CapCut"
];

const learning = ["Python", "Java"];

const Knowledge = () => {
  return (
    <section id="knowledge" className="knowledge-section">
      <div className="knowledge-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="knowledge-header"
        >
          <h2 className="knowledge-title">
            Meus <span className="knowledge-highlight">Conhecimentos</span>
          </h2>
          <p className="knowledge-description">
            Tecnologias e ferramentas que utilizo no dia a dia.
          </p>
        </motion.div>

        <div className="knowledge-grid">
          {/* Skills with progress */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="knowledge-skills"
          >
            <h3 className="knowledge-subtitle">
              Front-end & Back-end
            </h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="skill-item"
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="skill-bar-fill"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="knowledge-categories"
          >
            <div className="knowledge-category">
              <h3 className="knowledge-subtitle">
                Ferramentas & Tecnologias
              </h3>
              <div className="tech-tags">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="tech-tag tech-tag-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="knowledge-category">
              <h3 className="knowledge-subtitle">
                Audiovisual
              </h3>
              <div className="tech-tags">
                {audiovisual.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="tech-tag tech-tag-accent"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="knowledge-category">
              <h3 className="knowledge-subtitle">
                Em Aprendizado
              </h3>
              <div className="tech-tags">
                {learning.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="tech-tag tech-tag-primary"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;