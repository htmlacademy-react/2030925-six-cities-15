import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/app/app';
import { Cards } from './mocks/cards';
import { AuthorizationStatus, CITIES } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppComponent
      authorizationStatus={AuthorizationStatus.Auth}
      cards={Cards}
      cities={CITIES}
    />
  </React.StrictMode>
);
