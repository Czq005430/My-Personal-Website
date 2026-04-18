
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import zhTranslation from './zh/translation.json';
import enTranslation from './en/translation.json';
import { createI18nOptions } from './i18nConfig';

const initOptions = createI18nOptions({
  load: 'languageOnly' as const,
  fallbackLng: 'zh',
  resources: {
    zh: { translation: zhTranslation },
    en: { translation: enTranslation },
  },
}) as Parameters<typeof i18n.init>[0];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(initOptions);

export default i18n;
