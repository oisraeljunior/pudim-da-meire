import React from 'react';
import { motion } from 'framer-motion';
import { Hourglass } from 'lucide-react';
import './Menu.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Menu = () => {
  return (
    <section className="menu bg-cream-dark">
      <div className="container">
        <div className="menu-header">
          <h2>Escolha o seu momento de doçura</h2>
        </div>
        
        <motion.div 
          className="menu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="menu-card" variants={cardVariants}>
            <div className="card-image-placeholder">
              <img src="/tradicional.webp" alt="Pudim Tradicional" width="400" height="220" loading="lazy" />
            </div>
            <div className="card-content">
              <h3>Mini Pudim Tradicional</h3>
              <p>O nosso clássico absoluto, com a calda de caramelo perfeita, em tamanho individual.</p>
            </div>
          </motion.div>
          
          <motion.div className="menu-card" variants={cardVariants}>
            <div className="card-image-placeholder">
              <img src="/abacaxi.webp" alt="Pudim Abacaxi" width="400" height="220" loading="lazy" />
            </div>
            <div className="card-content">
              <h3>Com Calda de Abacaxi</h3>
              <p>O frescor tropical combinando com a nossa receita de base.</p>
            </div>
          </motion.div>
          
          <motion.div className="menu-card" variants={cardVariants}>
            <div className="card-image-placeholder">
              <img src="/maracuja.webp" alt="Pudim Maracujá" width="400" height="220" loading="lazy" />
            </div>
            <div className="card-content">
              <h3>Com Calda de Maracujá</h3>
              <p>O equilíbrio perfeito entre o doce e o cítrico.</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="highlight-banner"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pulse-border"></div>
          <div className="highlight-content">
            <div className="highlight-icon-wrapper">
              <Hourglass size={48} className="hourglass-icon" />
            </div>
            <p className="highlight-text">
              <strong>Vem aí:</strong> O nosso Pudim Tradicional em Tamanho Família para você compartilhar com quem ama. Aguarde!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
