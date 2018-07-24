import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from 'app/reducers';
import sagas from 'app/sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(state) {
  /*
   *  Mount the store
   */
  const store = createStore(
    reducers,
    state,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  );

  /*
   *  Initialise the sagas
   */
  sagaMiddleware.run(sagas);

  return store;
}
