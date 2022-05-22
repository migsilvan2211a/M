import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useContext } from 'react';
import UserContext from '../UserContext';

export default function NavbarSmall() {
	const {user} = useContext(UserContext);
	console.log(typeof user);
	return(
		<Navbar expand="lg" className="px-3 py-0 m-0" bg="dark" variant="dark">
			<Navbar.Brand className="m-0 pe-3 py-0 white-text" id="MNavbar">M</Navbar.Brand>
			<Navbar.Toggle/>
			<Navbar.Collapse>
				<Nav>
				<Nav.Link as={Link} className="p-1" to="/">Home</Nav.Link>
				<Nav.Link as={Link} className="p-1" to="/products">Products</Nav.Link>
				<Nav.Link as={Link} className="p-1" to="/about" >About Us</Nav.Link>
				<Nav.Link as={Link} className="p-1" to="/contact" >Contact Us</Nav.Link>
				{	!user.token ? 
					<>
						<Nav.Link as={Link} className="p-1" to="/login" >Log in</Nav.Link>
						<Nav.Link as={Link} className="p-1" to="/register" >Sign up</Nav.Link>
					</> :
						<>
							{(user.isAdmin === true) ? <Nav.Link as={Link} className="p-1" to="/admin">Admin Dashborad</Nav.Link> : 
							<Nav.Link as={Link} className="p-1" to="/user">My Account</Nav.Link>}
							<Nav.Link as={Link} className="p-1" to="/logout">Logout</Nav.Link>
						</>
				}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}