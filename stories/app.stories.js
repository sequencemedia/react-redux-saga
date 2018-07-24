/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from 'app/store';
import App from 'app/components/hello-world';

const state = {};
const store = configureStore(state);

storiesOf('App', module)
  .add('Default', () => (
    <Provider store={store}>
      <App />
    </Provider>
  ));
