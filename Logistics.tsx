import { motion } from 'motion/react';
import { Box, Snowflake, Ship, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Logistics() {
  const { t } = useLanguage();

  return (
    <section id="logistics" className="py-24 bg-white text-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="relative rounded-sm overflow-hidden shadow-xl h-full transform -translate-y-8 group">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                alt="Modern shipping port"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-green-950/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            </div>
            <div className="relative rounded-sm overflow-hidden shadow-xl h-full transform translate-y-8 group">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800" 
                alt="Agricultural logistics"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="font-serif text-4xl font-bold mb-6 tracking-tight text-gray-900">{t('logisticsTitle')}</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('logisticsSubtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Box className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('logConfigTitle')}</h3>
                  <p className="text-gray-600">{t('logConfigDesc')}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Snowflake className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('logReeferTitle')}</h3>
                  <p className="text-gray-600">{t('logReeferDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('logOrganicTitle')}</h3>
                  <p className="text-gray-600">{t('logOrganicDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="absolute -inset-4 bg-red-50 rounded-xl opacity-50 z-0 hidden md:block"></div>
                <div className="flex-shrink-0 mt-1 relative z-10">
                  <div className="bg-red-100 p-2 rounded-full shadow-sm">
                    <Ship className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-red-700 flex items-center gap-2">
                    {t('logPortTitle')}
                    <span className="bg-red-600 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm">{t('logPortPriority')}</span>
                  </h3>
                  <p className="text-gray-800 font-medium">{t('logPortDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

