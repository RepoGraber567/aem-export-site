import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'RU';

interface Translations {
  [key: string]: {
    EN: string;
    RU: string;
  };
}

const translations: Translations = {
  // Navigation
  navAbout: { EN: 'About', RU: 'О компании' },
  navSpecifications: { EN: 'Specifications', RU: 'Спецификации' },
  navLogistics: { EN: 'Logistics', RU: 'Логистика' },
  navContact: { EN: 'Contact', RU: 'Контакты' },
  navRequestAllocation: { EN: 'Request Allocation', RU: 'Запросить квоту' },

  // Hero
  heroTagline: { EN: 'Over 1,000,000+ Tons Exported Globally', RU: 'Более 1,000,000+ тонн экспортируется по всему миру' },
  heroTitle: { EN: 'Enterprise Strawberry Cultivation & Global Logistics', RU: 'Промышленное выращивание клубники и глобальная логистика' },
  heroSubtitle: { EN: 'Uncompromising precision. End-to-end cold-chain integrity. Scalable supply for tier-one federal retail.', RU: 'Бескомпромиссная точность. Целостность непрерывной холодильной цепи. Масштабируемые поставки для федерального ритейла первого эшелона.' },
  heroInitiate: { EN: 'Initiate Partnership', RU: 'Инициировать партнерство' },
  heroEst: { EN: 'Est. 2015', RU: 'Осн. 2015' },
  heroGulf: { EN: 'Gulf Region & Beyond', RU: 'Ближний Восток и далее' },
  heroGulfDesc1: { EN: 'Trusted Gulf supplier expanding massive scale into the ', RU: 'Надежный поставщик на Ближнем Востоке, расширяющий масштаб на ' },
  heroGulfDesc2: { EN: 'Russian market', RU: 'рынок РФ' },
  heroGulfDesc3: { EN: '.', RU: '.' },

  // About
  aboutTitle: { EN: 'Scale Meets Absolute Precision', RU: 'Масштаб и Абсолютная Точность' },
  aboutSubtitle: { EN: 'As a vertically integrated agricultural enterprise, we maintain strict architectural control over the entire lifecycle of our produce.', RU: 'Как вертикально интегрированный агропромышленный холдинг, мы осуществляем строгий архитектурный контроль над всем жизненным циклом нашей продукции.' },
  aboutPricingTitle: { EN: 'Most Competitive Pricing', RU: 'Максимально конкурентное ценообразование' },
  aboutPricingDesc: { EN: 'Because we own the farms and manage the logistics, we offer the most competitive pricing framework in the Middle East.', RU: 'Поскольку мы владеем фермами и управляем логистикой, мы предлагаем самую конкурентоспособную ценовую структуру на Ближнем Востоке.' },
  aboutVolumeTitle: { EN: 'Massive Volume Fulfillment', RU: 'Обеспечение огромных объемов' },
  aboutVolumeDesc: { EN: 'Our robust seasonal capacities exceeding 1,000,000+ tons guarantee unyielding supply continuity for federal retail networks.', RU: 'Наши колоссальные сезонные мощности, превышающие 1,000,000+ тонн, гарантируют бесперебойность поставок для федеральных розничных сетей.' },
  aboutOpsTitle: { EN: 'Operational Excellence', RU: 'Операционное превосходство' },
  aboutOpsDesc: { EN: 'We execute fast, smooth, and frictionless operations, managing complex port deliveries with zero delays under stringent frameworks.', RU: 'Мы осуществляем быстрые, бесперебойные и безотказные операции, управляя сложными портовыми поставками без задержек в рамках строгих протоколов.' },
  aboutCert1Title: { EN: 'GlobalG.A.P.', RU: 'GlobalG.A.P.' },
  aboutCert1Desc: { EN: 'Certified Production', RU: 'Сертифицированное производство' },
  aboutCert2Title: { EN: 'BRCGS', RU: 'BRCGS' },
  aboutCert2Desc: { EN: 'Food Safety Std.', RU: 'Стандарт безопасности пищевых продуктов' },
  aboutCert3Title: { EN: 'EAEU', RU: 'ЕАЭС' },
  aboutCert3Desc: { EN: 'Rosselkhoznadzor Compliant', RU: 'Соответствие требованиям Россельхознадзора' },
  aboutCapacityCount: { EN: '1,000,000+', RU: '1,000,000+' },
  aboutCapacityDesc: { EN: 'Tons Capacity', RU: 'Тонн мощности' },

  aboutMultiCommodityTitle: { EN: 'Multi-Commodity Expansion', RU: 'Многотоварная экспансия' },
  aboutMultiCommodityDesc: { EN: 'We are capable of sourcing and supplying virtually any fruit or vegetable demanded by the Russian market. While we specialize in massive volumes of staples, our enterprise logistics network can scale to meet any agricultural requirement.', RU: 'Мы способны найти и поставить практически любые фрукты и овощи, востребованные на российском рынке. Хотя мы специализируемся на колоссальных объемах основных продуктов, наша корпоративная логистическая сеть может масштабироваться для удовлетворения любых сельскохозяйственных потребностей.' },
  potatoes: { EN: 'Premium Potatoes', RU: 'Картофель премиум-класса' },
  onions: { EN: 'Export Onions', RU: 'Экспортный лук' },
  tomatoes: { EN: 'Fresh Tomatoes', RU: 'Свежие томаты' },
  grapes: { EN: 'Table Grapes', RU: 'Столовый виноград' },
  aboutMore: { EN: '...and any other produce', RU: '...и любые другие продукты' },
  aboutMoreDesc: { EN: 'Leveraging our enterprise logistics to source and supply virtually any fruit or vegetable demanded by the Russian market.', RU: 'Используя нашу корпоративную логистику, мы находим и поставляем практически любые фрукты и овощи, востребованные на российском рынке.' },

  // Specs
  specsTitle: { EN: 'Engineering Unrivaled Produce', RU: 'Создание непревзойденной продукции' },
  specsDesc: { EN: 'Designed with empirical precision to withstand the rigors of global transit. We execute a seamless Dual Supply Modality tailored for enterprise scalability.', RU: 'Разработано с эмпирической точностью, чтобы выдерживать суровые условия глобальных транзитных перевозок. Мы реализуем бесперебойную Модель Двойных Поставок (Dual Supply Modality), адаптированную для корпоративного масштабирования.' },
  specsFreshTitle: { EN: 'Fresh Supply', RU: 'Свежая продукция' },
  specsFreshDesc: { EN: 'Premium fresh strawberries. Customizable packaging tailored precisely for Russian retail supermarket shelves in +0.5°C CA Reefers.', RU: 'Премиальная свежая клубника. Индивидуализированная упаковка, разработанная специально для полок российских супермаркетов при транспортировке в рефконтейнерах с контролируемой атмосферой (CA Reefers) при +0.5°C.' },
  specsFrozenTitle: { EN: 'Frozen Supply', RU: 'Замороженная продукция (IQF)' },
  specsFrozenDesc1: { EN: 'Divided into two distinct preservation streams:', RU: 'Разделено на два различных направления консервации:' },
  specsFrozenPlusTitle: { EN: 'Plus:', RU: 'Плюс:' },
  specsFrozenPlusDesc: { EN: 'Temperature-controlled (+0.5°C to +1.5°C) frozen strawberries packed for specialized processing.', RU: 'Замороженная клубника с контролируемой температурой (+0.5°C до +1.5°C), упакованная для специализированной переработки.' },
  specsFrozenIqfTitle: { EN: 'IQF:', RU: 'IQF:' },
  specsFrozenIqfDesc: { EN: 'Blast-frozen (-18°C) capabilities packed in bulk for heavy industrial processing usage, ensuring massive volume stability.', RU: 'Мощности шоковой заморозки (-18°C) с упаковкой навалом (bulk) для использования в тяжелой промышленной переработке, обеспечивая стабильность огромных объемов.' },
  specsCustomPkg: { EN: 'We customize the packaging entirely based on the client\'s end-use to ensure perfect alignment with your operational requirements.', RU: 'Мы полностью индивидуализируем упаковку в зависимости от конечного использования клиентом, чтобы обеспечить идеальное соответствие вашим эксплуатационным требованиям.' },
  specsBrixTitle: { EN: 'Optimized Brix Profiles', RU: 'Оптимизированные профили Brix' },
  specsBrixDesc: { EN: 'Consistently yielding >8° Brix, maximizing consumer retention and premium tier placement.', RU: 'Стабильно дает >8° Brix, максимизируя лояльность потребителей и размещение в премиум-сегменте.' },
  specsRetailTitle: { EN: 'Precise Retail Calibration', RU: 'Точная розничная калибровка' },
  specsRetailDesc: { EN: 'Rigorously graded 25-35mm fruit ensuring flawless punnet presentation for retail shelves.', RU: 'Строго откалиброванные плоды размером 25-35 мм, обеспечивающие безупречную презентацию в контейнерах (punnets) на розничных полках.' },
  specsShelfLifeTitle: { EN: 'Exceptional Shelf-Life', RU: 'Исключительный срок годности' },
  specsShelfLifeDesc: { EN: 'Cultivars selected for superior structural integrity, withstanding extended maritime transit without degradation.', RU: 'Сорта отобраны за превосходную структурную целостность, выдерживающую длительные морские перевозки без деградации.' },
  varFestivalName: { EN: 'Festival', RU: 'Фестиваль (Festival)' },
  varFestivalDesc: { EN: 'Renowned for deep red color and exceptional firmness, making it ideal for long transits.', RU: 'Сорт известен глубоким красным цветом и исключительной твердостью, что делает его идеальным для длительных перевозок.' },
  varFortunaName: { EN: 'Fortuna', RU: 'Фортуна (Fortuna)' },
  varFortunaDesc: { EN: 'Early season variety with excellent size and distinct, sweet flavor profile.', RU: 'Раннеспелый сорт отличного размера с ярко выраженным сладким вкусовым профилем.' },
  varSensationName: { EN: 'Sensation', RU: 'Сенсация (Sensation)' },
  varSensationDesc: { EN: 'Premium appearance with high gloss and perfect conical shape.', RU: 'Премиальный внешний вид, сияющий блеск и идеальная коническая форма.' },
  varKamarosaName: { EN: 'Kamarosa', RU: 'Камароза (Kamarosa)' },
  varKamarosaDesc: { EN: 'Robust variety yielding consistently large, durable fruit.', RU: 'Надежный сорт, дающий неизменно крупные, устойчивые к хранению плоды.' },

  // Logistics
  logisticsTitle: { EN: 'Logistical Supremacy', RU: 'Логистическое превосходство' },
  logisticsSubtitle: { EN: 'We execute our supply chain operations with military-grade precision, guaranteeing that massive volumes arrive in pristine, retail-ready condition across continental borders.', RU: 'Мы осуществляем операции в цепочке поставок с военной точностью, гарантируя, что колоссальные объемы прибудут в идеальном, готовом к розничной продаже состоянии через континентальные границы.' },
  logConfigTitle: { EN: 'Retail & Bulk Configuration', RU: 'Розничная и оптовая комплектация' },
  logConfigDesc: { EN: 'Retail-ready punnets packed within reinforced structural master cartons, alongside industrial IQF bulk processing configurations for enterprise requirements.', RU: 'Готовые к розничной продаже контейнеры, упакованные в усиленные структурные мастер-картонные коробки, наряду с конфигурациями для промышленной обработки IQF (индивидуальная быстрая заморозка) для корпоративных нужд.' },
  logReeferTitle: { EN: 'Controlled Atmosphere Protocols', RU: 'Протоколы контролируемой атмосферы (CA Reefers)' },
  logReeferDesc: { EN: 'Uncompromising thermal locks maintained flawlessly between +0.5°C to +1.5°C, leveraging state-of-the-art CA reefer technology from harvest through destination.', RU: 'Бескомпромиссные температурные режимы безупречно поддерживаются на уровне от +0.5°C до +1.5°C с использованием новейших технологий рефрижераторных контейнеров с контролируемой атмосферой (CA reefer) от сбора урожая до пункта назначения.' },
  logPortTitle: { EN: 'Frictionless Port Deliveries', RU: 'Бесперебойные портовые поставки' },
  logPortPriority: { EN: 'Priority', RU: 'Приоритет' },
  logPortDays: { EN: 'Days', RU: 'Дней' },
  logPortDesc: { EN: 'Direct maritime logistics to Novorossiysk and St. Petersburg. Accelerated CIF execution for mitigated transit latency.', RU: 'Прямая морская логистика в Новороссийск и Санкт-Петербург. Ускоренная доставка CIF для минимизации задержек в пути.' },
  logOrganicTitle: { EN: '100% Organic Compliance', RU: '100% органическое соответствие' },
  logOrganicDesc: { EN: 'Our entire yield is 100% Organic and fully backed by GlobalG.A.P., BRCGS, and EAEU/Rosselkhoznadzor compliance, ensuring absolute regulatory confidence.', RU: 'Весь наш урожай на 100% органический и полностью обеспечен сертификатами GlobalG.A.P., BRCGS, а также соответствует требованиям ЕАЭС/Россельхознадзора, что гарантирует абсолютную уверенность в соблюдении нормативных требований.' },

  // Contact
  contactTitle: { EN: 'Secure Strategic Volume', RU: 'Обеспечить стратегические объемы' },
  contactSubtitle: { EN: 'Initiate strategic dialogue for guaranteed seasonal allocations. Our partnerships are exclusively reserved for global tier-one retail networks and enterprise wholesalers.', RU: 'Инициируйте стратегический диалог для гарантированного получения сезонных квот. Наше партнерство предназначено исключительно для глобальных розничных сетей первого эшелона (Tier-1) и крупных корпоративных оптовиков.' },
  contactERTitle: { EN: 'Enterprise Relations', RU: 'Корпоративные связи' },
  contactERDir: { EN: 'Global Director of Commercial Operations', RU: 'Глобальный директор по коммерческим операциям' },
  contactERPhone: { EN: 'Direct Line (WhatsApp/Telegram)', RU: 'Прямая линия (WhatsApp/Telegram)' },
  contactERHQ: { EN: 'Headquarters', RU: 'Штаб-квартира' },
  contactERCairo: { EN: 'Cairo, Egypt', RU: 'Каир, Египет' },
  contactConnWA: { EN: 'Connect on WhatsApp', RU: 'Связаться через WhatsApp' },
  contactConnTG: { EN: 'Connect on Telegram', RU: 'Связаться через Telegram' },

  contactFormName: { EN: 'Name', RU: 'Имя (Name)' },
  contactFormNamePH: { EN: 'John Doe', RU: 'Иван Иванов' },
  contactFormEmail: { EN: 'Corporate Email', RU: 'Корпоративный E-mail' },
  contactFormEmailPH: { EN: 'j.doe@company.ru', RU: 'i.ivanov@company.ru' },
  contactFormCompany: { EN: 'Company Name', RU: 'Название компании' },
  contactFormCompanyPH: { EN: 'Retail Chain / Importer', RU: 'Розничная сеть / Импортер' },
  contactFormVolume: { EN: 'Weekly Volume (Tons)', RU: 'Еженедельный объем (Тонны)' },
  contactFormVolumePH: { EN: 'e.g. 20', RU: 'например, 20' },
  contactFormReqs: { EN: 'Additional Requirements', RU: 'Дополнительные требования' },
  contactFormReqsPH: { EN: 'Specify packaging needs, port of discharge, etc.', RU: 'Укажите требования к упаковке, порт назначения (CIF) и т.д.' },
  contactFormSubmit: { EN: 'Request Allocation', RU: 'Запросить квоту' },
  contactFormSending: { EN: 'Sending...', RU: 'Отправка...' },
  contactFormSuccess: { EN: 'Request Submitted Successfully!', RU: 'Запрос успешно отправлен!' },
  contactFormError: { EN: 'There was a problem submitting your request. Please try again.', RU: 'Возникла проблема при отправке запроса. Пожалуйста, попробуйте еще раз.' },

  // Footer
  footerDesc: { EN: 'Architecting agricultural export excellence. Vertical integration delivering pristine quality across borders.', RU: 'Выстраивание архитектуры передового опыта сельскохозяйственного экспорта. Вертикальная интеграция, обеспечивающая безупречное качество без границ.' },
  footerRights: { EN: 'All rights reserved.', RU: 'Все права защищены.' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLanguage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(prev => (prev === 'EN' ? 'RU' : 'EN'));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // slight delay for DOM update
    }, 300); // Wait for fade out animation
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key; // Fallback to key if not found
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
