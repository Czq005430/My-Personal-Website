export const i18nConfig = {
  debug: false,
  supportedLngs: ['zh', 'en'],
  load: 'languageOnly',
  fallbackLng: 'zh',
  initImmediate: false,
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

export const createI18nOptions = (overrides = {}) => ({
  ...i18nConfig,
  ...overrides,
});
