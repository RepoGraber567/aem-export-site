import { motion } from 'motion/react';import { ArrowRight, Globe, ShieldCheck, Ship } from 'lucide-react';import { useLanguage } from './LanguageContext';export function Hero() {  const { t } = useLanguage();  return (    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">      <div         className="absolute inset-0 z-0"        style={{          backgroundImage: 'url("https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=2000")',          backgroundPosition: 'center',          backgroundSize: 'cover',        }}      >        <div className="absolute inset-0 bg-green-950/75" />      </div>            <div className="relative z-10 flex-grow flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">          <motion.div            initial={{ opacity: 0, y: -20 }}            animate={{ opacity: 1, y: 0 }}            transition={{ duration: 0.7, delay: 0.1 }}            className="mb-8 inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium tracking-wide shadow-2xl"          >            <div className="bg-red-500 rounded-full p-1">              <Globe className="h-4 w-4 text-white" />            </div>            <span className="uppercase text-sm tracking-widest font-semibold">{t('heroTagline')}</span>          </motion.div>                    <motion.h1             className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-tight"            initial={{ opacity: 0, y: 20 }}import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, Ship } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-green-950/75" />
      </div>
      
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium tracking-wide shadow-2xl"
          >
            <div className="bg-red-500 rounded-full p-1">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <span className="uppercase text-sm tracking-widest font-semibold">{t('heroTagline')}</span>
          </motion.div>
          
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t('heroSubtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm text-lg font-semibold transition-all hover:scale-105"
            >
              {t('heroInitiate')}
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Gulf Block */}
            <div className="flex-1 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-5 flex items-start gap-4 hover:bg-black/60 transition-colors duration-300 shadow-xl group">
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck className="h-5 w-5 text-gray-300" />
              </div>
              <div className="text-left flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-gray-100 font-medium text-sm tracking-wide">{t('heroGulf')}</h3>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">{t('heroEst')}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {t('heroGulfDesc1')}<span className="text-gray-200 font-medium">{t('heroGulfDesc2')}</span>{t('heroGulfDesc3')}
                </p>
              </div>
            </div>

            {/* Port Deliveries Block */}
            <div className="flex-1 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-5 flex items-start gap-4 hover:bg-black/60 hover:border-red-900/30 transition-colors duration-300 shadow-xl group relative overflow-hidden">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none">
                  <Ship className="w-48 h-48 text-white" />
               </div>
               
               <div className="bg-red-500/10 p-2.5 rounded-lg border border-red-500/20 shrink-0 text-red-400 group-hover:scale-105 transition-transform relative z-10">
                 <Ship className="h-5 w-5" />
               </div>
               <div className="text-left flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-gray-100 font-medium text-sm tracking-wide">{t('logPortTitle')}</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.2em] text-red-400/80 uppercase">{t('logPortPriority')}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light pr-14">
                    {t('logPortDesc')}
                  </p>
                  
                  <div className="absolute bottom-0 right-0 flex items-baseline gap-1 opacity-90">
                    <span className="text-2xl font-serif font-light text-white leading-none">12-15</span>
                    <span className="text-[9px] font-bold tracking-widest text-red-400 uppercase">{t('logPortDays')}</span>
                  </div>
               </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}

