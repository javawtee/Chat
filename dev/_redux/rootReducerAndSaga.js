import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// APP
import _rApp from './app/_rApp';
import _sApp from './app/_sApp';


export const rootReducer = combineReducers({
  _rApp,
});


export function* rootSaga() {
  yield all([_sApp(),])
};