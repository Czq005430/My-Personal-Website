import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './personal-resume-website/App';  // 更新路径
import './public/locales/i18n'; // Initialize i18next

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={
      <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 font-sans min-h-screen w-full flex items-center justify-center">
        <p>Loading...</p>
      </div>
    }>
      <App />
    </Suspense>
  </React.StrictMode>
);
