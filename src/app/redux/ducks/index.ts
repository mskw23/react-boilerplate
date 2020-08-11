import { fork, SimpleEffect } from 'redux-saga/effects';
import auth, { saga as authSaga } from './auth';

/** Root saga */
function* rootSaga(): IterableIterator<SimpleEffect<'FORK'>> {
	yield fork(authSaga);
}

const reducers = { auth };

export { rootSaga, reducers };
