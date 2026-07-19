import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specs } from './components/Specs';
import { Logistics } from './components/Logistics';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function PageContent() {
  const { isTransitioning } = useLanguage();
  
  return (
    <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 blur-sm translate-y-2' : 'opacity-100 blur-0 translate-y-0'}`}>
      <main>
        <Hero />
        <About />
        <Specs />
        <Logistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans bg-white selection:bg-red-500/30">
        <Navigation />
        <PageContent />
      </div>
    </LanguageProvider>
  );
}

