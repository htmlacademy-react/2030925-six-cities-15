import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/app/app';
import { Cards } from './mocks/cards';
import { AuthorizationStatus } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppComponent
      placesCount={5}
      authorizationStatus={AuthorizationStatus.Auth}
      cards={Cards}
    />
  </React.StrictMode>
);
