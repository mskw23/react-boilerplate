/**
 * React Boilerplate
 * Auth screen index
 * Created by Mateusz Skwierczyński
 *
 * This is a entry file to our screen. This file's main goal is to deliver
 * the ready-to-use component with all functionalities merged together.
 * In this file we're connecting the component to redux store. It's also,
 * at the same time, the last station of the screen structure pipeline.
 *
 * The overall pipeline looks like this:
 * view -> logic -> index -> client
 */

import { connect } from 'react-redux';
import Logic from './logic';
import { request } from 'ducks/auth/actions';
import { Dispatch } from 'redux';
import { AuthState } from 'ducks/auth/reducers';

type StateType = {
	/** Auth state type */
	auth: AuthState;
};

const mapStateToProps = ({ auth }: StateType) => ({
	status: auth.status,
	error: auth.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	auth: (data: string) => dispatch(request(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logic);
