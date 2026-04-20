
import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import type { EducationItem } from '../types';
import { ExternalLinkIcon } from './icons/SocialIcons';

const Education: React.FC = () => {
  const { t } = useTranslation();
  const educationItems = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <Section id="education">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-8">
        {t('education.title')}
      </h2>
      <div className="flex flex-col space-y-8 group/list">
        {educationItems.map((item, index) => (
            <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.period}>
                    {item.period}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        {item.link ? (
                            <a href={item.link} target="_blank" rel="noreferrer noopener" className="group/link text-base" aria-label={`${item.school} (opens in a new tab)`}>
                                <span className="inline-block text-slate-800 dark:text-slate-200 group-hover/link:text-sky-500 dark:group-hover/link:text-teal-300 transition-colors">
                                    {item.school}
                                    <ExternalLinkIcon />
                                </span>
                            </a>
                        ) : (
                            <div className="text-base">{item.school}</div>
                        )}
                        <div className="text-slate-500 dark:text-slate-400 text-sm">{item.degree}</div>
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.courses}</p>
                    {item.language ? (
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            {item.language}
                        </p>
                    ) : null}
                </div>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
