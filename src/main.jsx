import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';
import './styles.scss';
import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <>
      <AuthProvider>
        <App />
      </AuthProvider>
    </>

    <Toaster />
  </>
);
