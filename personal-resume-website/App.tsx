
import React from 'react';
import { useTranslation } from 'react-i18next';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import { shouldShowSidebarHero } from './utils/branding';

function App() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const showSidebarHero = shouldShowSidebarHero(language);
  const SectionDivider = () => <div className="my-12 lg:my-16 h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />;
  
  return (
    <div className="text-slate-700 dark:text-slate-300 font-sans leading-relaxed antialiased selection:bg-sky-300 selection:text-sky-900 dark:selection:bg-teal-300 dark:selection:text-teal-900">
      <TopNav />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        {showSidebarHero ? (
          <div className="lg:flex lg:justify-between lg:gap-16">
            <div className="lg:w-2/5">
              <Hero />
            </div>
            <main className="lg:w-3/5 lg:py-24">
              <FadeInSection>
                <About />
              </FadeInSection>
              <SectionDivider />
              <FadeInSection>
                <Experience />
              </FadeInSection>
              <SectionDivider />
              <FadeInSection>
                <Projects />
              </FadeInSection>
              <SectionDivider />
              <FadeInSection>
                <Research />
              </FadeInSection>
              <SectionDivider />
              <FadeInSection>
                <Education />
              </FadeInSection>
              <FadeInSection>
                <Footer />
              </FadeInSection>
            </main>
          </div>
        ) : (
          <>
            <About />
            <SectionDivider />
            <div className="lg:flex lg:justify-between lg:gap-16">
              <div className="lg:w-2/5">
                <Hero sticky="center" className="lg:py-16 py-12" />
              </div>
              <main className="lg:w-3/5 lg:py-16">
                <FadeInSection>
                  <Experience />
                </FadeInSection>
                <SectionDivider />
                <FadeInSection>
                  <Projects />
                </FadeInSection>
                <SectionDivider />
                <FadeInSection>
                  <Research />
                </FadeInSection>
                <SectionDivider />
                <FadeInSection>
                  <Education />
                </FadeInSection>
                <FadeInSection>
                  <Footer />
                </FadeInSection>
              </main>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
