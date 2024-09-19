import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pl: {
        translation: {
            oNas:"O Nas",
            naszeGry: "Nasze Gry",
            kontakt: "Kontakt",
            media: "Strony Społecznościowe",
            wesprzyjNas: "Wesprzyj Nas",
            praca: "Praca",
            regulamin: "Regulamin",
            witamy: "Witamy w Przygierrodzie!",
        },
      },
      en: {
        translation: {
            oNas:"About us",
            naszeGry: "Our Games",
            kontakt: "Contact",
            media: "Social Medias",
            wesprzyjNas: "Support us!",
            praca: "Jobs",
            regulamin: "Bylaws",
            witamy: "Welcome to Gamesnature!",
        },
      },
      de: {
        translation: {
            oNas:"Über uns",
            naszeGry: "Unsere Spielen",
            kontakt: "Kontakt",
            media: "Soziale Medien",
            wesprzyjNas: "Unterstützen Sie uns!",
            praca: "Jobs",
            regulamin: "Satzung",
            witamy: "Willkommen nach Spielensnatur!",
        },
      },
      ru: {
        translation: {
            oNas:  "О нас",
            naszeGry: "Наши Игры",
            kontakt: "Контакт",
            media: "Социальные Сети",
            wesprzyjNas: "Поддержите нас!",
            praca: "Работа",
            regulamin: "Правила",
            witamy: "Привет в приигрроде!",
        },
      },
    }
  });

export default i18n;