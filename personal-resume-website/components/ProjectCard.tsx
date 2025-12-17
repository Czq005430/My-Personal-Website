
import React from 'react';
import { ExternalLinkIcon } from './icons/SocialIcons';

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, stack, link }) => {
  return (
    <div className="group relative grid pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10">
            <h3>
                <a className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-teal-300 focus-visible:text-sky-500 dark:focus-visible:text-teal-300 group/link text-base" href={link || '#'} target="_blank" rel="noreferrer noopener" aria-label={`${name} (opens in a new tab)`}>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                        {name}
                        {link && <ExternalLinkIcon />}
                    </span>
                </a>
            </h3>
            <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">{description}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {stack.map(tech => (
                     <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-600 dark:bg-teal-400/10 dark:text-teal-300">{tech}</div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default ProjectCard;