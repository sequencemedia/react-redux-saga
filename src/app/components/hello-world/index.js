import { connect } from 'react-redux';

import App from './component';

export default connect(({ helloWorld }) => ({ ...helloWorld }), (dispatch) => ({ dispatch }))(App);
