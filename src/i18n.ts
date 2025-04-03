import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importowanie tłumaczeń
import pl from './tłumaczenia/pl.json';
import en from './tłumaczenia/en.json';
import de from './tłumaczenia/de.json';
import ru from './tłumaczenia/ru.json';

i18n
  .use(LanguageDetector) // Użycie detektora języka
  .use(initReactI18next) // Użycie i18next w React
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
      de: { translation: de },
      ru: { translation: ru },
    },
    fallbackLng: 'pl', // Język domyślny
    debug: false, // Włączenie debugowania
    interpolation: {
      escapeValue: false, // React już zabezpiecza przed XSS
    },
    detection: {  // Opcjonalne: konfiguracja wykrywania języka
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

  export default i18n;