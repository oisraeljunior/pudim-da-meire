import React, { Suspense } from 'react';
import Hero from './components/Hero';
import FloatingButton from './components/FloatingButton';

const Menu = React.lazy(() => import('./components/Menu'));
const HowToEnjoy = React.lazy(() => import('./components/HowToEnjoy'));
const SocialProof = React.lazy(() => import('./components/SocialProof'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Hero />
      <div style={{ overflowX: 'hidden', position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-cream)' }}>
        <Suspense fallback={<div>Carregando...</div>}>
          <Menu />
          <HowToEnjoy />
          <SocialProof />
          <Footer />
        </Suspense>
      </div>
      <FloatingButton />
    </>
  );
}

export default App;
