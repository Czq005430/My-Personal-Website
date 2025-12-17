
import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import type { ResearchItem } from '../types';
import { ExternalLinkIcon } from './icons/SocialIcons';

const Research: React.FC = () => {
  const { t } = useTranslation();
  const researchItems = t('research.items', { returnObjects: true }) as ResearchItem[];

  return (
    <Section id="research">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-8">
        {t('research.title')}
      </h2>
      <div className="flex flex-col space-y-12 group/list">
        {researchItems.map((item, index) => (
          <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.period}>
                {item.period}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                    <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 group/link text-base">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>{item.topic} · <span className="inline-block">{item.supervisor}</span></span>
                        </span>
                    </div>
                </h3>
                <ul className="mt-2 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    {item.description.map((detail, idx) => <li key={idx}>{detail}</li>)}
                </ul>
                {item.publications && item.publications.map((pub, pubIndex) => (
                    <div className="mt-4" key={pubIndex}>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-300 focus-visible:text-sky-500 dark:focus-visible:text-teal-300 text-sm" href={pub.link} target="_blank" rel="noreferrer noopener">
                            <span>{pub.title}<ExternalLinkIcon /></span>
                        </a>
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Research;
