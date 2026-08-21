/**
 * Application entry point.
 *
 * Imports global styles and renders the App.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/typography.css';
import { DesignSystemPreview } from './components/DesignSystemPreview';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.VITE_PREVIEW_DESIGN_SYSTEM === 'true' ? (
      <DesignSystemPreview />
    ) : (
      <App />
    )}
  </StrictMode>,
);
