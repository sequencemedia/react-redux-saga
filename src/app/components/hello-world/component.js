import React from 'react';
import PropTypes from 'prop-types';

const App = ({ helloWorld }) => (
  <h1>
    {helloWorld}
  </h1>
);

App.defaultProps = {
  helloWorld: 'Hello, World!'
};

App.propTypes = {
  helloWorld: PropTypes.string
};

export default App;
