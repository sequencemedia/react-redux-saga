import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from 'app/store';
import Routes from 'app/routes';

storiesOf('App', module)
  .add('With initial state', () => {
    const state = { helloWorld: { message: 'With initial state' } };
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  })
  .add('Without initial state', () => {
    const state = {};
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  });
