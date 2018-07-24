/* eslint import/prefer-default-export: "off" */

import {
  call,
  put,
  takeLatest,
  fork
} from 'redux-saga/effects';

import {
  HELLO_WORLD_REQUESTED,
  helloWorldSuccess,
  helloWorldFailure
} from 'app/actions/hello-world';

const helloWorldApi = () => Promise.resolve({});

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld({ payload }) {
  try {
    const text = yield call(helloWorldApi, payload);
    yield put(helloWorldSuccess(text));
  } catch ({ message = 'No error message defined' }) {
    yield put(helloWorldFailure(message));
  }
}

export function* helloWorldSaga() {
  yield takeLatest(HELLO_WORLD_REQUESTED, helloWorld);
}

export default function* rootSaga() {
  yield [
    fork(helloWorldSaga)
  ];
}
