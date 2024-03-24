import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import en_language from './translations/en/global.json';
import kh_language from './translations/kh/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  lng: 'en',
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false,
  },
  resources:{
    en:{
      global:en_language
    },
    kh:{
      global:kh_language
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
