
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitHubIcon, MailIcon } from './icons/SocialIcons';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24 py-20">
      <div>
        <img src={t('avatarUrl')} alt={t('name')} className="rounded-xl w-48 mb-6 object-cover" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
          <a href="/">{t('name')}</a>
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