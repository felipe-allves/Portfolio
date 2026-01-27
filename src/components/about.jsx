import { motion } from "framer-motion";
import { Code, Lightbulb, Video, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Código Limpo",
    description: "Escrevo código organizado, seguindo boas práticas de desenvolvimento.",
  },
  {
    icon: Lightbulb,
    title: "Autodidata",
    description: "Aprendo constantemente novas tecnologias e metodologias.",
  },
  {
    icon: Video,
    title: "Audiovisual",
    description: "Experiência em produção e edição de foto, vídeo e iluminação.",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h2 className="about-title">
            Sobre <span className="about-highlight">Mim</span>
          </h2>
          <p className="about-description">
            Desenvolvedor Web com sólida base em React, JavaScript e Node.js, 
            e experiência complementar em produção e edição audiovisual. 
            Busco minha primeira oportunidade profissional para contribuir 
            com soluções técnicas criativas e multidisciplinares.
          </p>
        </motion.div>

        {/* Education Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="about-education-wrapper"
        >
          <div className="about-education-badge">
            <GraduationCap className="about-education-icon" />
            <span className="about-education-text">
              Cursando 3º ano do Ensino Médio • Previsão: Dez/2026
            </span>
          </div>
        </motion.div>

        <div className="about-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="about-feature-card"
            >
              <div className="about-feature-icon-wrapper">
                <feature.icon className="about-feature-icon" />
              </div>
              <h3 className="about-feature-title">
                {feature.title}
              </h3>
              <p className="about-feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;