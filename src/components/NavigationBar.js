import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { reSetAuthedUser } from '../actions/authedUser';
import Avatar from './Avatar';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import icon from './icon.png';

function NavigationBar(props) {
	const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<Fragment>
			<Navbar expand="xxl" bg="white" variant="dark" >
				<Navbar.Brand as={Link} to="/">
				   <div class="text-center">   
				     <img src={icon} class="rounded float-start" alt="icon" />
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto my-2 my-lg-0">
						<Nav.Link as={NavLink} to="/" exact>
						<div class=" text-primary shadow-lg p-3 mb-5 bg-body rounded" >Home</div>
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
						<div class=" text-primary shadow-lg p-3 mb-5 bg-body rounded" >New Question</div>
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
						<div class=" text-primary shadow-lg p-3 mb-5 bg-body rounded" >Leaderboard</div>
						</Nav.Link>
					</Nav>
					   <Nav className="align-items-start">
					   <Avatar avatarURL={user.avatarURL} className="mx-3" />
						<DropdownButton
						    className="shadow p-3 mb-5 bg-body rounded"
							variant="info"
							menuVariant="dark"
							title={user.name}
						>
								<Dropdown.Item href="#/action-1" onClick={handleLogout} >Logout </Dropdown.Item>
							</DropdownButton>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);
