import { connect } from 'react-redux';

import App from './component';

export default connect(({ app }) => ({ app }))(App);
