/**
 * React Boilerplate
 * Redux main file
 * Created by Mateusz Skwierczyński
 *
 *
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { reducers, rootSaga } from './ducks';

const sagaMiddleware = createSagaMiddleware();
const middleware = [];
middleware.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export default store;
