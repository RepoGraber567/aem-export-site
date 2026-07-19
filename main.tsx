import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Client-Side Clickjacking Protection (Frame-Busting)
try {
  if (window.self !== window.top && window.top !== null) {
    window.top.location = window.self.location;
  }
} catch (e) {
  // Catch DOMException if embedded in cross-origin iframe
  console.warn('Frame-busting blocked by cross-origin policy.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
