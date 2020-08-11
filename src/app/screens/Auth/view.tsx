/**
 * React Boilerplate
 * Auth screen view
 * Created by Mateusz Skwierczyński
 *
 * This is a main view file of the screen section. This is a 'presentational' part of the screen.
 * In here we can just focus on the visual part, separating our mindset from the data management.
 * We're retrieving all necesary state and methods as properties and then, we can easily distribute
 * and assign them.
 */

import React from 'react';
import { AuthViewProps, AuthViewBaseProps, AuthViewFailureProps } from './types';
import Button from 'components/Button';
import { Status } from 'ducks/types';
import './index.scss';

const AuthBase = ({ value, onValueChange, onSubmit }: AuthViewBaseProps) => (
	<form onSubmit={onSubmit}>
		<label>
			Name:
			<input type="text" name="name" value={value} onChange={onValueChange} />
		</label>
		<input type="submit" value="Send" />
	</form>
);

const AuthPending = () => <div>Pending...</div>;

const AuthSuccess = () => <div>Success</div>;

const AuthFailure = ({ msg }: AuthViewFailureProps) => <div>{msg}</div>;

/** Auth view component */
export default function Auth({
	handleSubmit,
	error,
	status,
	value,
	handleValueChange,
}: AuthViewProps): JSX.Element | null {
	// When dealing with some kind of component status, it's, in general, a good idea to create
	// a separate enum so we can deliver a individual sub-component when it's necessary.

	switch (status) {
		case Status.idle:
			return <AuthBase value={value} onValueChange={handleValueChange} onSubmit={handleSubmit} />;
		case Status.pending:
			return <AuthPending />;
		case Status.success:
			return <AuthSuccess />;
		case Status.failure:
			return <AuthFailure msg={error || ''} />;
		default:
			return null;
	}
}
