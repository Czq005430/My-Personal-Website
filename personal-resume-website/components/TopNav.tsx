
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { shouldShowTopNavBrand } from '../utils/branding';

const TopNav: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const sectionIds = ['about', 'experience', 'projects', 'research', 'education'];
    const activeId = useScrollSpy(sectionIds);
    
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setIsOpen(false); // Close mobile menu on click
    };


    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navLinks = [
        { id: 'about', text: t('nav.about') },
        { id: 'experience', text: t('nav.experience') },
        { id: 'projects', text: t('nav.projects') },
        { id: 'research', text: t('nav.research') },
        { id: 'education', text: t('nav.education') }
    ];
    const showBrand = shouldShowTopNavBrand(i18n.resolvedLanguage ?? i18n.language);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm shadow-md' : ''}`}>
            <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <div className="flex items-center justify-between h-16">
                    <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-200">
                        {showBrand ? <a href="#">{t('name')}</a> : null}
                    </div>
                    
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className={`text-sm font-medium transition-colors ${activeId === link.id ? 'text-sky-500 dark:text-teal-300' : 'text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-teal-300'}`}>
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <button onClick={() => changeLanguage('en')} className={`px-2 py-1 text-xs rounded-md transition-colors ${i18n.language === 'en' ? 'bg-sky-400/10 text-sky-600 dark:bg-teal-400/10 dark:text-teal-300' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>EN</button>
                            <span className="mx-1 text-slate-300 dark:text-slate-600">|</span>
                            <button onClick={() => changeLanguage('zh')} className={`px-2 py-1 text-xs rounded-md transition-colors ${i18n.language === 'zh' ? 'bg-sky-400/10 text-sky-600 dark:bg-teal-400/10 dark:text-teal-300' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>ZH</button>
                        </div>
                        
                        {/* Mobile Nav Toggle */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-slate-200" aria-label="Open menu">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Nav Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 bg-white dark:bg-slate-900">
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map(link => (
                                <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className={`block py-2 text-sm text-center rounded-md transition-colors ${activeId === link.id ? 'bg-sky-100 dark:bg-slate-800 text-sky-600 dark:text-teal-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                    {link.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default TopNav;
