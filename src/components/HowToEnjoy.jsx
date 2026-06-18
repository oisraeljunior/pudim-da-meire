import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Store, PartyPopper } from 'lucide-react';
import './HowToEnjoy.css';

const HowToEnjoy = () => {
  return (
    <section className="how-to-enjoy">
      <div className="container">
        <div className="how-to-header">
          <h2>Da nossa cozinha para a sua vida</h2>
        </div>
        
        <div className="enjoy-list">
          <motion.div 
            className="enjoy-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="enjoy-image-placeholder">
              <img src="/retirada.webp" alt="Serviço de Retirada" />
            </div>
            <div className="enjoy-text">
              <h3>Para Retirada</h3>
              <p>Encomende o seu e venha buscar nos bairros Jardim Brasília ou Mansour.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="enjoy-item reverse"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="enjoy-image-placeholder">
              <img src="/parceiros.webp" alt="Para Parceiros" />
            </div>
            <div className="enjoy-text">
              <h3>Para Parceiros</h3>
              <p>Fornecimento recorrente para lanchonetes e restaurantes. Leve o sabor de casa para os seus clientes.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="enjoy-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="enjoy-image-placeholder">
              <img src="/eventos.webp" alt="Para Eventos" />
            </div>
            <div className="enjoy-text">
              <h3>Para Eventos</h3>
              <p>Casamentos, formaturas e celebrações. Fazemos entregas para grandes quantidades (sob consulta).</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToEnjoy;
