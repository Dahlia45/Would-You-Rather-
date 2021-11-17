import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Login from './components/Login';
import PrivateApp from './components/PrivateApp';
import { handleInitialData } from './actions/shared';
import logo from './logo.png';


class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser, loadingBar } = this.props;

		if (loadingBar.default === undefined || loadingBar.default === 1) {
			//loading
			return (
                <div class="d-flex justify-content-center">
				<div className=" spinner-grow center " >
					<Spinner
						animation="grow" 
						role="status"
						variant="primary"
						className="my-5"
					>
						<span className="sr-only"></span>
					</Spinner>
				</div>
				</div>
			);
		} else {
			return <Fragment>{!authedUser ? 
			<div class="text-center">
			<img src={logo} class="rounded" alt="logo" />
			<Login /> 
			</div>
			: <PrivateApp />}</Fragment>;
		}
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);
