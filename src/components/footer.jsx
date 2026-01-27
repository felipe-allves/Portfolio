import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2025 Felipe Alves. Todos os direitos reservados.
        </p>
        
        <div className="footer-social">
          <a
            href="https://github.com/felipe-allves"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/felipe-allves"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;