/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from 'app/store';
import Routes from 'app/routes';

storiesOf('App', module)
  .add('Default', () => {
    const state = {};
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  })
  .add('Initial state', () => {
    const state = { helloWorld: { message: 'From initial state' } };
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  });
