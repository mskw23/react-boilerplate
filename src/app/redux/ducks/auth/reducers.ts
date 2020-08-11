import ActionType, { REQUEST, SUCCESS, FAILURE } from './types';
import { Status } from 'ducks/types';

export type AuthState = {
	/** User data */
	data: string;
	/** Error */
	error?: string;
	/** Pending */
	status: Status;
};

export const initialState: AuthState = {
	data: '',
	error: undefined,
	status: Status.idle,
};

const reducer = (state = initialState, action: ActionType): AuthState => {
	switch (action.type) {
		case REQUEST:
			return {
				...state,
				status: Status.pending,
			};
		case SUCCESS:
			return {
				...state,
				status: Status.success,
			};
		case FAILURE:
			return {
				...state,
				error: action.error,
				status: Status.failure,
			};
		default:
			return state;
	}
};

export default reducer;
