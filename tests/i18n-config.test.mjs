import test from 'node:test';
import assert from 'node:assert/strict';
import i18next from 'i18next';
import { i18nConfig } from '../personal-resume-website/locales/i18nConfig.js';

test('将 zh-CN 解析为 zh 语言包', async () => {
  const instance = i18next.createInstance();

  await instance.init({
    ...i18nConfig,
    lng: 'zh-CN',
    resources: {
      zh: { translation: { greeting: '你好' } },
      en: { translation: { greeting: 'Hello' } },
    },
    backend: undefined,
    react: undefined,
    initImmediate: false,
  });

  assert.equal(instance.resolvedLanguage, 'zh');
  assert.equal(instance.t('greeting'), '你好');
});

test('不支持的语言回退到中文', async () => {
  const instance = i18next.createInstance();

  await instance.init({
    ...i18nConfig,
    lng: 'fr-FR',
    resources: {
      zh: { translation: { greeting: '你好' } },
      en: { translation: { greeting: 'Hello' } },
    },
    backend: undefined,
    react: undefined,
    initImmediate: false,
  });

  assert.equal(instance.resolvedLanguage, 'zh');
  assert.equal(instance.t('greeting'), '你好');
});
