import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import { Workbox } from 'workbox-window';

// Register Service Worker
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');
  
  wb.addEventListener('installed', (event) => {
    if (event.isUpdate) {
      if (confirm('New content is available! Click OK to refresh.')) {
        window.location.reload();
      }
    }
  });

  wb.register();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);