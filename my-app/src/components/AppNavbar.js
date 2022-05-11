import {Navbar, Nav} from 'react-bootstrap';

const AppNavbar = () => {
	return(
		<Navbar expand="sm" className="py-2 p-3">
			<Navbar.Brand className="m-0 pe-3"href="#home">MStore</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav.Link className="p-2" href="#home">Home</Nav.Link>
				<Nav.Link className="p-2" href="#products">Products</Nav.Link>
				<Nav.Link className="p-2" href="#about">About Us</Nav.Link>
				<Nav.Link className="p-2" href="#contact">Contact Us</Nav.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default AppNavbar;