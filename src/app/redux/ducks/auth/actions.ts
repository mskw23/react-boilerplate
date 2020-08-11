import { REQUEST, SUCCESS, FAILURE } from './types';

export const request = (data: string) => ({ type: REQUEST, data });
export const success = () => ({ type: SUCCESS });
export const failure = (error: string) => ({ type: FAILURE, error });
