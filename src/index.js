import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Auth0Provider
    domain="dev-0ahjg66tbe8q2xaw.us.auth0.com"
    clientId="XD5NEfdpsKHnHlpCDFmpEnEN7Hzk1PSp"
    redirectUri="http://localhost:3000"
    audience="http://localhost:3000"
    scope="offline_access"
  >
    <App />
  </Auth0Provider>,

  {/* <Auth0Provider
    domain="tradersconnect.eu.auth0.com"
    clientId="Ry5rvELSICMCNlZMFzzKsq8WdoT5VeN1"
    redirectUri={window.location.origin}
    audience="http://localhost:10000"
    connection="Username-Password-Authentication"
    scope="openid profile email user_metadata read:users user_id id"
  >
    <App />
  </Auth0Provider> */}
  </React.StrictMode>
);
