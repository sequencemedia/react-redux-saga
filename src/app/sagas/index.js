/* eslint import/prefer-default-export: "off" */

import {
  call,
  put,
  takeLatest,
  all
} from 'redux-saga/effects';

import {
  HELLO_WORLD_REQUESTED,
  helloWorldSuccess,
  helloWorldFailure
} from 'app/actions/hello-world';

const helloWorldApi = () => Promise.resolve({});

function* helloWorld({ text }) {
  try {
    const response = yield call(helloWorldApi, { text });
    yield put(helloWorldSuccess(response));
  } catch ({ message = 'No error message defined' }) {
    yield put(helloWorldFailure(message));
  }
}

export function* watchHelloWorld() {
  yield takeLatest(HELLO_WORLD_REQUESTED, helloWorld);
}

export default function* rootSaga() {
  yield all([
    watchHelloWorld()
  ]);
}
