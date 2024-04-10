import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/app/app';
import { Cards } from './mocks/cards';
import { CITIES } from './const';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthStatusAction, fetchQuestionAction } from './store/api-action';
import ErrorMessageComponent from './components/error-message-component/error-message-component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchQuestionAction());
store.dispatch(checkAuthStatusAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessageComponent/>
      <AppComponent
        cards={Cards}
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>
);
