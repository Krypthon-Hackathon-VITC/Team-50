import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="835976447481-7bg5ns797or88b255ui3650hsfee227m.apps.googleusercontent.com">
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);

reportWebVitals();
