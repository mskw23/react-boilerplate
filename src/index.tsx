import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/redux';
import App from './app';

/** Root component */
function Root(): JSX.Element {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));
