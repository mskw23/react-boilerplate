export interface BaseAction {
	/** Action type */
	type: string;
}

export enum Status {
	idle,
	pending,
	success,
	failure,
}
