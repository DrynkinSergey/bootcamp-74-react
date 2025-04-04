import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';
import './styles.scss';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
