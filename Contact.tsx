import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const sanitizeHTML = (str: string) => {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side Rate Limiting (Throttle: 10 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setErrorMessage('Please wait before submitting another request.');
      return;
    }
    setLastSubmitTime(now);

    setIsSubmitting(true);
    setErrorMessage('');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Anti-Spam & Bot Protection (Honeypot Architecture)
    if (formData.get('bot_field')) {
      // Silently drop the request but fake success for the bot
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return;
    }

    // Fail-Safe Form Validation & Sanitization
    const sanitizedData = new FormData();
    const dangerousPattern = /(<script.*?>.*?<\/script>)|(<.*?on\w+=.*?>)|(javascript:)|(union\s+select)|(drop\s+table)/i;
    
    for (let [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        if (dangerousPattern.test(value)) {
          setErrorMessage('Security Alert: Malicious input detected. Request blocked.');
          setIsSubmitting(false);
          return;
        }
        sanitizedData.append(key, sanitizeHTML(value));
      } else {
        sanitizedData.append(key, value);
      }
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: sanitizedData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Reload after 2 seconds
      } else {
        setErrorMessage(t('contactFormError'));
      }
    } catch (error) {
      setErrorMessage(t('contactFormError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-green-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6 tracking-tight text-white">{t('contactTitle')}</h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-md">
              {t('contactSubtitle')}
            </p>

            <div className="bg-green-900/50 p-8 rounded-sm border border-green-800">
              <h3 className="text-xl font-bold mb-6 text-white">{t('contactERTitle')}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-green-800 rounded-sm flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gray-200" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{t('contactERDir')}</div>
                    <a href="mailto:abdullahkhaled5567@gmail.com" className="font-medium hover:text-red-400 transition-colors break-all">abdullahkhaled5567@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-green-800 rounded-sm flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gray-200" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{t('contactERPhone')}</div>
                    <a href="tel:+201006933088" className="font-medium hover:text-red-400 transition-colors">+20 1006933088</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-green-800 rounded-sm flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gray-200" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{t('contactERHQ')}</div>
                    <div className="font-medium">{t('contactERCairo')}</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-green-800 grid grid-cols-1 gap-4">
                <a 
                  href="https://wa.me/201006933088" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 px-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  {t('contactConnWA')}
                </a>
                <a 
                  href="https://t.me/aakhd_7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold py-3 px-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('contactConnTG')}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form action="https://formsubmit.co/abdullahkhaled5567@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="bot_field">Do not fill this out</label>
                <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t('contactFormName')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    pattern="^[^<>=;{}]+$"
                    title="Special characters like <, >, =, ; are not allowed"
                    className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-sm"
                    placeholder={t('contactFormNamePH')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t('contactFormEmail')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-sm"
                    placeholder={t('contactFormEmailPH')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">{t('contactFormCompany')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  pattern="^[^<>=;{}]+$"
                  title="Special characters like <, >, =, ; are not allowed"
                  className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-sm"
                  placeholder={t('contactFormCompanyPH')}
                />
              </div>
              <div>
                <label htmlFor="volume" className="block text-sm font-medium text-gray-300 mb-2">{t('contactFormVolume')}</label>
                <input
                  type="number"
                  id="volume"
                  name="volume"
                  min="1"
                  required
                  className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-sm"
                  placeholder={t('contactFormVolumePH')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t('contactFormReqs')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-sm"
                  placeholder={t('contactFormReqsPH')}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full text-white font-bold py-4 px-8 rounded-sm transition-colors disabled:opacity-90 disabled:cursor-not-allowed ${isSuccess ? 'bg-green-600 hover:bg-green-600' : 'bg-red-600 hover:bg-red-700'}`}
              >
                {isSubmitting ? t('contactFormSending') : isSuccess ? t('contactFormSuccess') : t('contactFormSubmit')}
              </button>
              {errorMessage && (
                <div className="text-red-400 text-sm mt-2 text-center">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
