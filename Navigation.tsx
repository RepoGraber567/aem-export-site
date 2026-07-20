import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Leaf, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'navAbout', href: '#about' },
    { key: 'navSpecifications', href: '#specifications' },
    { key: 'navLogistics', href: '#logistics' },
    { key: 'navContact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm text-green-900' : 'bg-transparent text-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Leaf className={`h-8 w-8 ${isScrolled ? 'text-green-700' : 'text-red-500'}`} />
            <span className="font-bold text-xl tracking-tight">AEM</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium hover:text-red-500 transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all ${
                isScrolled 
                  ? 'border-green-900/20 hover:border-red-500 bg-white text-green-900 shadow-sm' 
                  : 'border-white/30 hover:border-white bg-white/10 text-white backdrop-blur-sm'
              }`}
              title="Toggle Language"
            >
              <Globe className="h-4 w-4" />
              <div className="flex items-center gap-1 text-xs font-bold tracking-wider">
                <span className={`transition-all duration-300 ${language === 'EN' ? 'opacity-100 text-red-500' : 'opacity-40'}`}>EN</span>
                <span className="opacity-30">|</span>
                <span className={`transition-all duration-300 ${language === 'RU' ? 'opacity-100 text-red-500' : 'opacity-40'}`}>RU</span>
              </div>
            </button>

            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-sm font-semibold transition-colors ${
                isScrolled
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-white text-green-900 hover:bg-gray-100'
              }`}
            >
              {t('navRequestAllocation')}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
