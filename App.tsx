import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { VisualProofSection } from './components/Gallery';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { IMAGES } from './constants';

function App() {
  return (
    <div className="font-sans text-stone-900 bg-stone-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <div id="resultados">
          <VisualProofSection data={IMAGES} />
        </div>
        <Benefits />
        <Contact />
      </main>
      <WhatsAppFloat />
    </div>
  );
}

export default App;