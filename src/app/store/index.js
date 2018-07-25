import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from 'app/reducers';
import sagas from 'app/sagas';

/*
 *  "Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware"
 */
export default function configureStore(state) {
  /*
   *  Create the Saga middleware
   */
  const sagaMiddleware = createSagaMiddleware();

  /*
   *  Mount the Store and the Saga middleware
   */
  const store = createStore(
    reducers,
    state,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  );

  /*
   *  Run the Sagas
   */
  sagaMiddleware.run(sagas);

  return store;
}
