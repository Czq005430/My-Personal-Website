
import { useState, useEffect } from 'react';

export const useScrollSpy = (
  selectors: string[],
  options?: IntersectionObserverInit
) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        if (intersectingEntries.length > 0) {
            // Find the entry that is most visible
            intersectingEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            setActiveId(intersectingEntries[0].target.id);
        }
    }, { rootMargin: '0px 0px -40% 0px', threshold: 0.2, ...options });

    const elements = selectors.map(id => document.getElementById(id)).filter(el => el !== null) as Element[];
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [selectors, options]);

  return activeId;
};
