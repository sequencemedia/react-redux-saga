import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { requestHelloWorld } from 'app/actions/hello-world';

export default class App extends Component {
  handleClick = () => {
    const { dispatch } = this.props;

    const dateTime = new Date();
    const text = dateTime.toLocaleString('en-GB', { timeZone: 'UTC' });

    dispatch(requestHelloWorld(text));
  }

  render() {
    const { helloWorld } = this.props;

    return (
      <div className="hello-world">
        <h1>
          {helloWorld}
        </h1>
        <button type="submit" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

App.defaultProps = {
  dispatch: () => { /* no op */ },
  helloWorld: 'Hello, World!'
};

App.propTypes = {
  dispatch: PropTypes.func,
  helloWorld: PropTypes.string
};
