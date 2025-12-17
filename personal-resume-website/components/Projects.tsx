
import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import ProjectCard from './ProjectCard';
import type { ProjectItem } from '../types';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) as ProjectItem[];

  return (
    <Section id="projects">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-8">
        {t('projects.title')}
      </h2>
      <div className="flex flex-col space-y-12 group/list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
