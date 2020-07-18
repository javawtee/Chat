import { all, takeLatest, call, put } from 'redux-saga/effects';
import types from 'reduxSrc/types';

function* GET_GREETING(payload) {
  yield put({
    type: types.FAKE_ACTION,
    payload: `HELLO ${payload.name}`
  })
}

export default function* appSaga() {
  yield all([
    takeLatest(types.GET_GREETING, GET_GREETING),
  ])
}