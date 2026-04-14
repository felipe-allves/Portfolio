import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import photo from "../assets/images/PhotoProfile.PNG"

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-photo-wrapper"
        >
          <div className="hero-photo">
            <img src={photo} alt="Felipe Alves" className="hero-photo-img" />
          </div>
          <div className="hero-photo-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Oi, eu sou o <span>Felipe Alves</span>
          </h1>
          
          <p className="hero-description">
            Desenvolvedor Web com sólida base em React, JavaScript e Node.js. 
            Autodidata e focado em boas práticas, busco criar soluções técnicas criativas.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="https://wa.me/5561995646238"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn hero-btn-whatsapp"
            >
              <MessageCircle size={20} />
              WhatsApp
            </motion.a>
            
            <motion.a
              href="/FelipeAlves-desenvolvedor-web.pdf" download="FelipeAlves-desenvolvedor-web.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn hero-btn-cv"
            >
              <FileText size={20} />
              Currículo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;