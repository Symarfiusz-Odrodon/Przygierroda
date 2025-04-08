import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importowanie tłumaczeń
import pl from './tlumaczenia/pl.json';
import en from './tlumaczenia/en.json';
import de from './tlumaczenia/de.json';
import ru from './tlumaczenia/ru.json';
import { debug } from 'console';

i18n
  .use(LanguageDetector) // Użycie detektora języka
  .use(initReactI18next) // Użycie i18next w React
  .init({
    debug: true,
    resources: {
      pl: { translation: pl },
      en: { translation: en },
      de: { translation: de },
      ru: { translation: ru },
    },
    fallbackLng: 'de', // Język domyślny
    interpolation: {
      escapeValue: false, // React już zabezpiecza przed XSS
    },
    detection: {  // Opcjonalne: konfiguracja wykrywania języka
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  });

export default i18n;