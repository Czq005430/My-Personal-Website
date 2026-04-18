import test from 'node:test';
import assert from 'node:assert/strict';
import i18next from 'i18next';
import fs from 'node:fs';
import path from 'node:path';
import { createI18nOptions } from '../personal-resume-website/locales/i18nConfig.js';

const zhTranslation = JSON.parse(
  fs.readFileSync(
    path.resolve('public/locales/zh/translation.json'),
    'utf8',
  ),
);

const enTranslation = JSON.parse(
  fs.readFileSync(
    path.resolve('public/locales/en/translation.json'),
    'utf8',
  ),
);

test('将 zh-CN 解析为 zh 语言包', async () => {
  const instance = i18next.createInstance();

  await instance.init(
    createI18nOptions({
      lng: 'zh-CN',
      resources: {
        zh: { translation: { greeting: '你好' } },
        en: { translation: { greeting: 'Hello' } },
      },
      react: undefined,
    }),
  );

  assert.equal(instance.resolvedLanguage, 'zh');
  assert.equal(instance.t('greeting'), '你好');
});

test('不支持的语言回退到中文', async () => {
  const instance = i18next.createInstance();

  await instance.init(
    createI18nOptions({
      lng: 'fr-FR',
      resources: {
        zh: { translation: { greeting: '你好' } },
        en: { translation: { greeting: 'Hello' } },
      },
      react: undefined,
    }),
  );

  assert.equal(instance.resolvedLanguage, 'zh');
  assert.equal(instance.t('greeting'), '你好');
});

test('实际翻译资源会返回对象和数组而不是 key 字符串', async () => {
  const instance = i18next.createInstance();

  await instance.init(
    createI18nOptions({
      lng: 'zh-CN',
      resources: {
        zh: { translation: zhTranslation },
        en: { translation: enTranslation },
      },
      react: undefined,
    }),
  );

  const avatarUrl = instance.t('avatarUrl');
  const experienceItems = instance.t('experience.items', { returnObjects: true });

  assert.equal(avatarUrl, './avatar.jpg');
  assert.ok(Array.isArray(experienceItems));
  assert.ok(experienceItems.length > 0);
});
