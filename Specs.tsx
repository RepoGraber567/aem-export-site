import { motion } from 'motion/react';import { Droplets, Ruler, Clock, Thermometer, Snowflake, Package } from 'lucide-react';import { useLanguage } from './LanguageContext';export function Specs() {  const { t } = useLanguage();  const varieties = [    { nameKey: 'varFestivalName', descKey: 'varFestivalDesc', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800' },    { nameKey: 'varFortunaName', descKey: 'varFortunaDesc', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800' },    { nameKey: 'varSensationName', descKey: 'varSensationDesc', image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=800' },    { nameKey: 'varKamarosaName', descKey: 'varKamarosaDesc', image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800' }  ];  return (    <section id="specifications" className="py-24 bg-gray-50 text-green-950">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="text-center mb-16">          <motion.h2             className="font-serif text-4xl font-bold mb-4 tracking-tight text-gray-900"            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true }}          >            {t('specsTitle')}          </motion.h2>          <motion.p             className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true }}            transition={{ delay: 0.1 }}          >            {t('specsDesc')}          </motion.p>        </div>import { motion } from 'motion/react';
import { Droplets, Ruler, Clock, Thermometer, Snowflake, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Specs() {
  const { t } = useLanguage();

  const varieties = [
    { nameKey: 'varFestivalName', descKey: 'varFestivalDesc', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800' },
    { nameKey: 'varFortunaName', descKey: 'varFortunaDesc', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800' },
    { nameKey: 'varSensationName', descKey: 'varSensationDesc', image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=800' },
    { nameKey: 'varKamarosaName', descKey: 'varKamarosaDesc', image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section id="specifications" className="py-24 bg-gray-50 text-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-4xl font-bold mb-4 tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('specsTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('specsDesc')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 text-left">
          <motion.div 
            className="group bg-white p-8 rounded-sm border border-gray-100 flex flex-col gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-red-50 p-4 rounded-sm text-red-600 flex-shrink-0 group-hover:bg-red-100 transition-colors">
                <Thermometer className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('specsFreshTitle')}</h3>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg">{t('specsFreshDesc')}</p>
            </div>
          </motion.div>

          <motion.div 
            className="group bg-white p-8 rounded-sm border border-gray-100 flex flex-col gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-blue-50 p-4 rounded-sm text-blue-600 flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                <Snowflake className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('specsFrozenTitle')}</h3>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">{t('specsFrozenDesc1')}</p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                  <p className="text-gray-600"><strong className="text-gray-900">{t('specsFrozenPlusTitle')}</strong> {t('specsFrozenPlusDesc')}</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                  <p className="text-gray-600"><strong className="text-gray-900">{t('specsFrozenIqfTitle')}</strong> {t('specsFrozenIqfDesc')}</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative overflow-hidden bg-green-950 p-10 md:p-12 rounded-xl text-center max-w-4xl mx-auto mb-20 shadow-xl group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200" 
            alt="Custom Packaging" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-black/80 mix-blend-multiply pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-md border border-white/20 shadow-lg group-hover:bg-white/20 transition-colors duration-300">
              <Package className="h-8 w-8 text-green-50" />
            </div>
            <p className="text-xl md:text-2xl font-serif text-white leading-relaxed font-light max-w-2xl mx-auto tracking-wide drop-shadow-lg">
              {t('specsCustomPkg')}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-16 w-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Droplets className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('specsBrixTitle')}</h3>
            <p className="text-gray-600">{t('specsBrixDesc')}</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="h-16 w-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Ruler className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('specsRetailTitle')}</h3>
            <p className="text-gray-600">{t('specsRetailDesc')}</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-16 w-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t('specsShelfLifeTitle')}</h3>
            <p className="text-gray-600">{t('specsShelfLifeDesc')}</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {varieties.map((variety, index) => (
            <motion.div
              key={variety.nameKey}
              className="group relative overflow-hidden bg-green-950 text-white p-6 rounded-sm min-h-[300px] flex flex-col justify-end shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={variety.image} 
                alt={t(variety.nameKey)} 
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/80 to-transparent z-0" />
              <div className="relative z-10">
                <h4 className="font-serif text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">{t(variety.nameKey)}</h4>
                <p className="text-sm text-gray-300">{t(variety.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
