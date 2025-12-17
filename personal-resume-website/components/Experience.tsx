
import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import TimelineItem from './TimelineItem';
import type { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <Section id="experience">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-8">
          {t('experience.title')}
        </h2>
      <div className="flex flex-col space-y-12 group/list">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            date={exp.date}
            title={exp.title}
            subtitle={exp.company}
            details={exp.description}
            skills={exp.skills}
            link={exp.link}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;