export const i18nConfig = {
  debug: false,
  supportedLngs: ['zh', 'en'],
  load: 'languageOnly',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
};
