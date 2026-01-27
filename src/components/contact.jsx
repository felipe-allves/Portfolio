import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_ekez7z5',
        'template_yho11qb',
        formData,
        '_ZU7zj4iOX0e56_M4'
      );
      
      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-title">
            Vamos <span className="contact-highlight">Conversar?</span>
          </h2>
          <p className="contact-description">
            Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3 className="contact-subtitle">
              Informações de Contato
            </h3>
            
            <a
              href="mailto:felipealves1484@gmail.com"
              className="contact-item contact-item-link"
            >
              <div className="contact-icon-wrapper">
                <Mail className="contact-icon" />
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">felipealves1484@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/5561995646238"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item contact-item-link"
            >
              <div className="contact-icon-wrapper">
                <MessageCircle className="contact-icon" />
              </div>
              <div>
                <p className="contact-label">WhatsApp</p>
                <p className="contact-value">(61) 99564-6238</p>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin className="contact-icon" />
              </div>
              <div>
                <p className="contact-label">Localização</p>
                <p className="contact-value">Taguatinga Sul, DF - Brasil</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Seu nome"
                className="form-input"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Seu email"
                className="form-input"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                rows={5}
                name="message"
                placeholder="Sua mensagem"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'success' && (
              <p className="form-message form-message-success">
                Mensagem enviada com sucesso!
              </p>
            )}
            {status === 'error' && (
              <p className="form-message form-message-error">
                Erro ao enviar. Tente novamente.
              </p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="form-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>Enviando...</>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensagem
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;