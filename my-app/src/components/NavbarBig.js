import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useContext } from 'react';
import UserContext from '../UserContext';
export default function NavbarBig() {
	const {user} = useContext(UserContext);
	return(
		<>
		<Navbar expand="lg" className="container-fluid py-0 px-3 m-0 d-flex justify-content-between ">
			<div className="d-flex p-0 m-0">
				<Navbar.Brand className="m-0 px-2 py-0" id='MNavbar'>M</Navbar.Brand>
				<div className="d-flex justify-self-start pt-3 pb-0 m-0">
					<Link className="px-2 py-0 m-0 myLink" to="/">Home</Link>
					<Link className="px-2 py-0 m-0 myLink" to="/products">Products</Link>
					<Link className="px-2 py-0 m-0 myLink" to="/about" >About Us</Link>
					<Link className="px-2 py-0 m-0 myLink" to="/contact" >Contact Us</Link>
				</div>
			</div>
			
			<div className="d-flex justify-self-end p-0 m-0">
				{	(user.token) ? 
					<>
						{
							(user.isAdmin == "true") ?
							<Nav.Link as={Link} className="p-1" to="/admin">Admin Dashboard</Nav.Link>:
							<Nav.Link as={Link} className="p-1" to="/user">My Account</Nav.Link>
						}
					
					<Nav.Link as={Link} className="p-1" to="/logout">Logout</Nav.Link>
					</>
					:
						
					<>
						<Nav.Link as={Link} className="p-1" to="/login" >Log in</Nav.Link>
						<Nav.Link as={Link} className="p-1" to="/register" >Sign up</Nav.Link>
					</>
				}
			</div>
		</Navbar>
		<hr className="m-0 peach" />
		</>

	);
}