import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import HowToEnjoy from './components/HowToEnjoy';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <>
      <Hero />
      <div style={{ overflowX: 'hidden', position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-cream)' }}>
        <Menu />
        <HowToEnjoy />
        <SocialProof />
        <Footer />
      </div>
      <FloatingButton />
    </>
  );
}

export default App;
