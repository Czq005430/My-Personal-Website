
import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import { shouldUseEditorialAbout } from '../utils/branding';
import Typewriter from './Typewriter';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const useEditorialAbout = shouldUseEditorialAbout(language);
  const heroNameLines = t('hero.nameLines', { returnObjects: true }) as string[] | string;
  const nameLines = Array.isArray(heroNameLines) ? heroNameLines : [t('name')];

  if (useEditorialAbout) {
    const roleParts = String(t('hero.roleLine'))
      .split('|')
      .map((part) => part.trim())
      .filter(Boolean);

    return (
      <Section id="about" className="py-0">
        <div className="hero-editorial hero-editorial--about">
          <div className="hero-editorial__content">
            <div className="hero-editorial__copy">
              <p className="hero-editorial__eyebrow">{t('hero.eyebrow')}</p>
              <p className="hero-editorial__intro">{t('hero.intro')}</p>
              <div className="hero-editorial__name">
                {nameLines.map((line) => (
                  <span key={line} className="hero-editorial__name-line">
                    {line}
                  </span>
                ))}
              </div>
              <p className="hero-editorial__role">
                <Typewriter words={roleParts} />
              </p>
              <div className="hero-editorial__divider" />
              <p className="hero-editorial__summary">{t('hero.summary')}</p>
              <div className="hero-editorial__cta-row">
                <a className="hero-editorial__cta hero-editorial__cta--primary" href="#projects">
                  {t('hero.primaryCta')}
                </a>
                <a className="hero-editorial__cta hero-editorial__cta--secondary" href="#experience">
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
        </div>
      </Section>
    );
  }

  return (
    <Section id="about">
       <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-8">
          {t('about.title')}
        </h2>
      <div className="space-y-4 text-slate-600 dark:text-slate-400">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
      </div>
    </Section>
  );
};

export default About;
