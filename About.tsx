import { motion } from 'motion/react';
import { ShieldCheck, Award, FileCheck, CircleDollarSign, TrendingUp, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white text-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6 tracking-tight text-gray-900">{t('aboutTitle')}</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('aboutSubtitle')}
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-sm flex items-center justify-center">
                  <CircleDollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{t('aboutPricingTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('aboutPricingDesc')}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-sm flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{t('aboutVolumeTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('aboutVolumeDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-sm flex items-center justify-center">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{t('aboutOpsTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('aboutOpsDesc')}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="h-8 w-8 text-green-700" />
                <span className="font-semibold">{t('aboutCert1Title')}</span>
                <span className="text-sm text-gray-500">{t('aboutCert1Desc')}</span>
              </div>
              <div className="flex flex-col gap-2">
                <Award className="h-8 w-8 text-green-700" />
                <span className="font-semibold">{t('aboutCert2Title')}</span>
                <span className="text-sm text-gray-500">{t('aboutCert2Desc')}</span>
              </div>
              <div className="flex flex-col gap-2">
                <FileCheck className="h-8 w-8 text-green-700" />
                <span className="font-semibold">{t('aboutCert3Title')}</span>
                <span className="text-sm text-gray-500">{t('aboutCert3Desc')}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="relative rounded-sm overflow-hidden shadow-xl col-span-2 h-64">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fragaria_virginiana_2427.JPG/1280px-Fragaria_virginiana_2427.JPG" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Strawberry field" />
            </div>
            <div className="relative rounded-sm overflow-hidden shadow-xl h-full">
               <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Strawberries_for_sale_at_Mahabaleshwar.jpg" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Fresh crates" />
            </div>
            <div className="relative rounded-sm overflow-hidden shadow-xl h-full group">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/1280px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Fresh harvest" />
               <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-3xl font-bold mb-1">{t('aboutCapacityCount')}</div>
                    <div className="text-sm font-light text-gray-200">{t('aboutCapacityDesc')}</div>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 bg-green-900 p-8 md:p-12 rounded-sm border border-green-800 text-center max-w-5xl mx-auto shadow-2xl"
        >
          <h3 className="font-serif text-2xl md:text-4xl font-bold mb-4 text-white">{t('aboutMultiCommodityTitle')}</h3>
          <p className="text-lg text-green-100 leading-relaxed max-w-2xl mx-auto mb-10">
            {t('aboutMultiCommodityDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { key: 'potatoes', image: 'https://images.pexels.com/photos/36400786/pexels-photo-36400786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', classes: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
              { key: 'onions', image: 'https://images.pexels.com/photos/17140078/pexels-photo-17140078.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', classes: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
              { key: 'tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800', classes: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
              { key: 'grapes', image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&q=80&w=800', classes: 'md:col-span-2 aspect-[2/1] md:aspect-auto' },
            ].map((item) => (
              <div key={item.key} className={`group relative bg-white/10 border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col justify-end shadow-xl ${item.classes}`}>
                <img src={item.image} alt={t(item.key)} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent transition-opacity group-hover:opacity-80" />
                <div className="relative p-6 z-10 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className={`font-serif font-bold tracking-wide text-2xl block drop-shadow-md text-white`}>{t(item.key)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 relative overflow-hidden rounded-xl border border-white/10 bg-black/60 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-left group shadow-2xl">
            <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800" alt="Various produce" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-green-950/40 mix-blend-multiply pointer-events-none" />
            
            <div className="relative z-10 mb-4 md:mb-0 drop-shadow-lg">
              <h4 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">{t('aboutMore')}</h4>
              <p className="text-sm text-green-50 max-w-md font-light leading-relaxed">
                {t('aboutMoreDesc')}
              </p>
            </div>
            <a href="#contact" className="relative z-10 hidden md:flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-green-950 transition-all duration-300 font-medium text-sm tracking-wide">
              {t('heroInitiate')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

