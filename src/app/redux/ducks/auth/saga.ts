import { takeEvery, put, SimpleEffect, PutEffectDescriptor } from 'redux-saga/effects';
import { REQUEST, AuthSuccessAction, AuthFailureAction, AuthRequestAction } from './types';
import { success, failure } from './actions';

/** timeout helper fn */
async function timeout(data: string): Promise<unknown> {
	const ms = 1000;

	return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Duck saga fn */
function* auth({
	data,
}: AuthRequestAction): IterableIterator<
	| Promise<unknown> // timeout fn case
	| SimpleEffect<'PUT', PutEffectDescriptor<AuthSuccessAction>> // success case
	| SimpleEffect<'PUT', PutEffectDescriptor<AuthFailureAction>> // failure case
> {
	try {
		yield timeout(data);
		yield put(success());
	} catch (error) {
		yield put(failure((error as Error).message));
	}
}

/** Root saga fn */
export default function* root(): IterableIterator<SimpleEffect<'FORK'>> {
	yield takeEvery(REQUEST, auth);
}
