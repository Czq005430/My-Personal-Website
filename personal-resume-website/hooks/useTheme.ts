
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') as Theme || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    root.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    window.document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return [theme, toggleTheme];
};
