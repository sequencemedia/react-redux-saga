import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'app/store';
import Routes from 'app/routes';

{
  const app = document.getElementById('app');
  if (app) {
    const state = JSON.parse(app.getAttribute('data-state') || '{}');
    const store = configureStore(state);

    const App = (
      <Provider store={store}>
        <Routes />
      </Provider>
    );

    ReactDOM.render(
      App,
      app
    );

    app.removeAttribute('data-state');
  }
}
