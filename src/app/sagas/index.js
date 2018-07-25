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

import * as api from 'app/api/hello-world';

function* helloWorld({ message }) {
  try {
    const response = yield call(api.helloWorld, { message });
    yield put(helloWorldSuccess(response));
  } catch ({ message: m = 'No error message defined' }) {
    yield put(helloWorldFailure(m));
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
