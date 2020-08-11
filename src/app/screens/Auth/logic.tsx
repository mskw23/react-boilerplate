/**
 * Project Name
 * Component/Feature Name
 * Created by Mateusz Skwierczyński
 *
 * The purpose of this file is to separate component business logic from the 'view' itself.
 * Thanks to following the 'Presentational and Container Components' pattern it's much easier
 * to test and find any potential business logig bugs without the need to looking through UI view.
 * It's also a great place to define hooks and functions. Thanks to this approach we can create
 * a separate environment for part of dev team responsible for managing local state and comunicating
 * with global state.
 */

import React, { useState } from 'react';
import View from './view';
import { AuthLogicProps } from './types';

/** React 'container' component  */
function AuthLogic(props: AuthLogicProps): JSX.Element {
	// Retrieving all properties.
	const { auth, error, status } = props;

	// Defining state and other necessary objects and functions.
	const [value, setValue] = useState('');
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		auth(value);
	};
	const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value;

		setValue(val);
	};

	// The final step is to define a new object containing a reference to all necessary values.
	const newProps = { handleSubmit, error, status, value, handleValueChange };

	// Now we can just pass those values directly into our View component
	return <View {...newProps} />;
}

export default AuthLogic;
