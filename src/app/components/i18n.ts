import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React ya se encarga de esto
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta a los archivos de traducción
    },
  });

export default i18n;



