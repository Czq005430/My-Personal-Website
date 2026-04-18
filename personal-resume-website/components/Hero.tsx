
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitHubIcon, MailIcon } from './icons/SocialIcons';
import { getHeroDisplayName, shouldUseEditorialHero } from '../utils/branding';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const displayName = getHeroDisplayName(language, t('name'));
  const useEditorialHero = shouldUseEditorialHero(language);
  const heroNameLines = t('hero.nameLines', { returnObjects: true }) as string[] | string;
  const nameLines = Array.isArray(heroNameLines) ? heroNameLines : [displayName];

  if (useEditorialHero) {
    return (
      <header className="hero-editorial lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-center lg:py-24 py-16">
        <div className="hero-editorial__content">
          <div className="hero-editorial__copy">
            <p className="hero-editorial__eyebrow">{t('hero.eyebrow')}</p>
            <p className="hero-editorial__intro">{t('hero.intro')}</p>
            <div className="hero-editorial__name">
              {nameLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <p className="hero-editorial__role">{t('hero.roleLine')}</p>
            <div className="hero-editorial__divider" />
            <p className="hero-editorial__summary">{t('hero.summary')}</p>
            <div className="hero-editorial__cta-row">
              <a className="hero-editorial__cta hero-editorial__cta--primary" href="#projects">
                {t('hero.primaryCta')}
              </a>
              <a className="hero-editorial__cta hero-editorial__cta--secondary" href="#about">
                {t('hero.secondaryCta')}
              </a>
            </div>
          </div>

          <div className="hero-editorial__visual">
            <div className="hero-editorial__card">
              <div className="hero-editorial__card-inner">
                <img src={t('avatarUrl')} alt={t('name')} className="hero-editorial__image" />
              </div>
            </div>
          </div>
        </div>

        <ul className="hero-editorial__socials" aria-label="Social media">
          <li className="flex items-center">
            <a className="flex items-center text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-300 transition-colors" href={t('socials.github')} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
              <GitHubIcon />
              <span className="ml-3 text-sm">Czq005430</span>
            </a>
          </li>
          <li className="flex items-center">
            <a className="flex items-center text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-300 transition-colors" href={t('socials.email')} aria-label="Email">
              <MailIcon />
              <span className="ml-3 text-sm">3098802452@qq.com</span>
            </a>
          </li>
        </ul>
      </header>
    );
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24 py-20">
      <div>
        <img src={t('avatarUrl')} alt={t('name')} className="rounded-xl w-48 mb-6 object-cover" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
          <a href="/">{displayName}</a>
        </h1>
        <h2 className="mt-3 text-lg md:text-xl font-medium tracking-tight text-slate-900 dark:text-slate-200">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-600 dark:text-slate-400">
          {t('motto')}
        </p>
      </div>

       <ul className="flex flex-col items-start space-y-4 mt-8" aria-label="Social media">
          <li className="flex items-center">
              <a className="flex items-center text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-300 transition-colors" href={t('socials.github')} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <GitHubIcon />
                  <span className="ml-3 text-sm">Czq005430</span>
              </a>
          </li>
          <li className="flex items-center">
              <a className="flex items-center text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-300 transition-colors" href={t('socials.email')} aria-label="Email">
                  <MailIcon />
                  <span className="ml-3 text-sm">3098802452@qq.com</span>
              </a>
          </li>
      </ul>
    </header>
  );
};

export default Hero;
