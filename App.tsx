import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Specs } from './Specs';
import { Logistics } from './Logistics';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { LanguageProvider, useLanguage } from './LanguageContext';

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
