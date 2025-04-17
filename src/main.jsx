import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';
import './styles.scss';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
