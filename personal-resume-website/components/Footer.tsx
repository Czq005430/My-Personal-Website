
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="max-w-md pt-16 pb-16 text-sm text-slate-500 dark:text-slate-500 sm:pb-0">
        <p>
            {t('footer')}
        </p>
    </footer>
  );
};

export default Footer;
