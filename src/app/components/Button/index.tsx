/**
 * React Boilerplate
 * Button component
 * Created by Mateusz Skwierczyński
 *
 * Components that are part of our design system, that are used in multiple screens can be stored in separate folder.
 * In case of more complex components, the business logic can be also separated to another file.
 */

import React from 'react';
import './index.scss';

/** Button props */
type ButtonProps = {
	/** Button text */
	text: string;
	/** onclick */
	onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
};

/** Button */
export default function Button({ text, onClick }: ButtonProps): JSX.Element {
	return <button onClick={onClick}>{text}</button>;
}
