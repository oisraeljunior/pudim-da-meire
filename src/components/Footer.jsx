import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Pudim da Meire</h3>
          <p>O verdadeiro sabor de receita de mãe.</p>
        </div>
        <div className="footer-links">
          <p className="footer-link-item">
            <MapPin size={18} />
            <span>Uberlândia, MG (Jardim Brasília / Mansour)</span>
          </p>
          <p className="footer-link-item">
            <Phone size={18} />
            <span>(34) 9719-2116</span>
          </p>
          <a href="https://instagram.com/opudimdameire" target="_blank" rel="noopener noreferrer" className="footer-link-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>@opudimdameire</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Feito com amor por Meire &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
