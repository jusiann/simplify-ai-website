import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './config/i18n';
import './index.css';
import App from './App';

// Loading fallback for i18n initialization
function I18nLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-text-secondary">SimplifAI</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<I18nLoader />}>
      <App />
    </Suspense>
  </StrictMode>
);
