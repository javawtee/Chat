import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from './rootReducerAndSaga';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     // initialState
//     {},
//     // Redux devtools connection
//     (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//   )
// );

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
