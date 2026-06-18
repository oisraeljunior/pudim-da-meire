import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  return (
    <section className="social-proof">
      <div className="container">
        <h2>Parceiros que espalham nossa doçura:</h2>
        
        <div className="partners-list">
          <div className="partner-item">
            <div className="partner-logo-placeholder">
              <img src="/tudbom.webp" alt="TudBom Salgados" width="210" height="210" loading="lazy" />
            </div>
            <span>TudBom Salgados</span>
          </div>
          
          <div className="partner-item">
            <div className="partner-logo-placeholder">
              <img src="/bendita.webp" alt="Bendita Coxinha" width="210" height="210" loading="lazy" />
            </div>
            <span>Bendita Coxinha</span>
          </div>
          
          <div className="partner-item">
            <div className="partner-logo-placeholder">
              <img src="/panificadora.webp" alt="Panificadora Sonho Meu" width="210" height="210" loading="lazy" />
            </div>
            <span>Panificadora Sonho Meu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
