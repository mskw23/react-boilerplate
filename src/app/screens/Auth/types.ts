/**
 * React Project Structure
 * Auth screen types
 * Created by Mateusz Skwierczyński
 *
 * All types are stored in a separate file so we can have a easy access to them. In addition,
 * thanks to TypeScript we can have a really good understanding the purpose of each file.
 */

import { Status } from 'ducks/types';

export interface AuthLogicProps {
	/** auth redux request */
	auth(data: string): void;
	/** error */
	error?: string;
	/** status */
	status: Status;
}

/** Duck props */
export interface AuthViewProps {
	/** submit fn */
	handleSubmit(event: React.FormEvent): void;
	/** error */
	error?: string;
	/** pending */
	status: Status;
	/** value */
	value: string;
	/** handle value fn */
	handleValueChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface AuthViewBaseProps {
	/** value */
	value: string;
	/** on value change fn */
	onValueChange(event: React.ChangeEvent<HTMLInputElement>): void;
	/** on submit fn */
	onSubmit(event: React.FormEvent): void;
}

export interface AuthViewPendingProps {}

export interface AuthViewSuccessProps {}

export interface AuthViewFailureProps {
	/** error msg */
	msg: string;
}
