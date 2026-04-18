import test from 'node:test';
import assert from 'node:assert/strict';
import i18next from 'i18next';
import fs from 'node:fs';
import path from 'node:path';
import { createI18nOptions } from '../personal-resume-website/locales/i18nConfig.js';
import {
  getHeroDisplayName,
  shouldShowTopNavBrand,
  shouldUseEditorialAbout,
  shouldShowSidebarHero,
} from '../personal-resume-website/utils/branding.js';

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

test('中文页面品牌展示规则符合要求', () => {
  assert.equal(shouldShowTopNavBrand('zh'), false);
  assert.equal(shouldShowTopNavBrand('en'), true);
  assert.equal(shouldUseEditorialAbout('zh'), false);
  assert.equal(shouldUseEditorialAbout('en'), true);
  assert.equal(shouldShowSidebarHero('zh'), true);
  assert.equal(shouldShowSidebarHero('en'), false);
  assert.equal(getHeroDisplayName('zh', '陈圳铅 Albert Chen'), '陈圳铅');
  assert.equal(getHeroDisplayName('en', 'Albert Chen'), 'Albert Chen');
});

test('中文翻译内容已同步到最新要求', () => {
  assert.equal(zhTranslation.name, '陈圳铅');
  assert.match(zhTranslation.about.p2, /^我做过 Agent 工作流设计/);
  assert.doesNotMatch(zhTranslation.about.p2, /字节跳动与亿纬锂能/);
  assert.match(zhTranslation.experience.items[0].company, /AI Data & Safety/);
  assert.match(zhTranslation.experience.items[0].description[0], /OpenClaw/);
  assert.equal(zhTranslation.experience.items[0].skills.includes('OpenClaw'), true);
  assert.equal(zhTranslation.experience.items[0].skills.includes('OpenCrawl'), false);
  assert.equal(typeof zhTranslation.education.items[0].language, 'string');
  assert.doesNotMatch(zhTranslation.education.items[0].courses, /英语能力/);
});

test('英文版本具备新版 Hero 所需字段', () => {
  assert.equal(enTranslation.name, 'Albert Chen');
  assert.equal(typeof enTranslation.hero.eyebrow, 'string');
  assert.equal(typeof enTranslation.hero.intro, 'string');
  assert.equal(typeof enTranslation.hero.roleLine, 'string');
  assert.equal(typeof enTranslation.hero.summary, 'string');
  assert.equal(typeof enTranslation.hero.primaryCta, 'string');
  assert.equal(typeof enTranslation.hero.secondaryCta, 'string');
  assert.equal(Array.isArray(enTranslation.hero.nameLines), true);
  assert.equal(enTranslation.hero.nameLines.length > 0, true);
  assert.equal(zhTranslation.hero, undefined);
});
