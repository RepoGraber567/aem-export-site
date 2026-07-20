import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-green-950 border-t border-green-900 py-8 text-center text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} AEM. {t('footerRights')}</p>
        <p className="mt-2 text-xs text-green-800">{t('footerDesc')}</p>
      </div>
    </footer>
  );
}
