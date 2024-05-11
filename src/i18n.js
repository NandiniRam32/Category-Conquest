import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Translations from './Translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: Translations,
      },
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;