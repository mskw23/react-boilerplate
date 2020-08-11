export const REQUEST = 'auth/REQUEST';
export const SUCCESS = 'auth/SUCCESS';
export const FAILURE = 'auth/FAILURE';

import { BaseAction } from 'ducks/types';

export interface AuthRequestAction extends BaseAction {
	/** Duck Request Data */
	data: string;
}
export interface AuthSuccessAction extends BaseAction {}

export interface AuthFailureAction extends BaseAction {
	/** Duck error */
	error: string;
}

export default interface AuthInterfaces
	extends AuthRequestAction,
		AuthSuccessAction,
		AuthFailureAction {}
