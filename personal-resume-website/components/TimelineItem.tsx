
import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  details: string[];
  skills?: string[];
  link?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subtitle, details, skills, link }) => {
  const heading = (
    <span>
      {title} — <span className="inline-block">{subtitle}</span>
    </span>
  );

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500 sm:col-span-2" aria-label={date}>
            {date}
        </header>
        <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                <div>
                    {link ? (
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-teal-300 focus-visible:text-sky-500 dark:focus-visible:text-teal-300 group/link text-base" href={link} target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in a new tab)`}>
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          {heading}
                      </a>
                    ) : (
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 text-base">
                        {heading}
                      </span>
                    )}
                </div>
            </h3>
            <ul className="mt-2 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                {details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
            {skills && (
                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {skills.map(skill => (
                        <li key={skill} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-600 dark:bg-teal-400/10 dark:text-teal-300">{skill}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
};

export default TimelineItem;
