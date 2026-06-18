import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url(/background.webp)' }}>
      <div className="hero-overlay"></div>
      <div className="hero-container container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/logo.png" alt="Pudim da Meire" className="hero-logo" />
          <span className="slogan">Doçura que acolhe.</span>
          <h1>Mais que um doce, um abraço em forma de pudim.</h1>
          <p className="subheadline">
            Feito com carinho e ingredientes selecionados. O verdadeiro sabor de receita de mãe, pertinho de você.
          </p>
          <a href="https://wa.me/553497192116" className="btn-primary hero-btn" target="_blank" rel="noopener noreferrer">
            Pedir meu Pudim agora 🤍
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
