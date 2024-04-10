import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/app/app';
import { Cards } from './mocks/cards';
import { AuthorizationStatus, CITIES } from './const';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppComponent
        authorizationStatus={AuthorizationStatus.Auth}
        cards={Cards}
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>
);
