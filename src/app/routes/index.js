import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from 'app/components/hello-world';
import One from 'app/components/one';
import Two from 'app/components/two';

const Routes = () => (
  <Router>
    <div className="react-router">
      <Switch>
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
        <Route component={App} />
      </Switch>
      <ul>
        <li>
          <Link to="/">
            App
          </Link>
        </li>
        <li>
          <Link to="/one">
            One
          </Link>
        </li>
        <li>
          <Link to="/two">
            Two
          </Link>
        </li>
      </ul>
    </div>
  </Router>
);

export default Routes;
