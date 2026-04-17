
import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import { DownloadIcon } from './icons/SocialIcons';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
       <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-8">
          {t('about.title')}
        </h2>
      <div className="space-y-4 text-slate-600 dark:text-slate-400">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
      </div>
      <div className="mt-12">
        <a href="/chenzhenqian_cv.pages" download="chenzhenqian_cv.pages" className="inline-flex items-center font-medium leading-tight text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <DownloadIcon />
            <span>{t('about.download_cv')}</span>
        </a>
      </div>
    </Section>
  );
};

export default About;
