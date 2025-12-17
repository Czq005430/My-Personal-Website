
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 scroll-mt-16 lg:scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;