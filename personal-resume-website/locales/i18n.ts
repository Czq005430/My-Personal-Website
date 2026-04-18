
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { i18nConfig } from './i18nConfig';

const initOptions = {
  ...i18nConfig,
  load: 'languageOnly' as const,
  fallbackLng: 'zh',
  backend: {
    loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(initOptions);

export default i18n;
