// src/app/layout.tsx

"use client";

import Cookie from "js-cookie";
import { Provider } from 'react-redux';
import { store } from '../app/redux/store';
import { useEffect } from 'react';
import i18n from './components/i18n'; 
import SwitchLanguage from '../app/components/SwitchLanguage'; 

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    i18n.changeLanguage(Cookie.get("locale") || 'es'); 
  }, []);

  return (
    <html lang="es">
      <body>
        <Provider store={store}>
          <SwitchLanguage /> 
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
