import React, {useState} from 'react';
import { Tabs, Tab, Nav, Row, Col, Form } from 'react-bootstrap';

export default function AdminViewBig() {
	const [adminPage, setadminPage] = useState(<Profile />);
	const [key, setKey] = useState("profile");
	return(
		<Tab.Container activeKey={key} onSelect={k => setKey(k)} className="p-3">
			<Row>
				<Col xs={3} className="m-0 px-5 py-3">
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="profile">My Profile</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link eventKey="users">Users</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link eventKey="products">Products</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link eventKey="orders">Orders</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>

				<Col xs={9} className="col-8 p-3">
					<Tab.Content>
						<Tab.Pane eventKey="profile">
							<Profile />
						</Tab.Pane>

						<Tab.Pane eventKey="users">
							<Users />
						</Tab.Pane>

						<Tab.Pane eventKey="products">
							<Products />
						</Tab.Pane>

						<Tab.Pane eventKey="orders">
							<Orders />
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}

function Profile() {
	const name = localStorage.getItem("fullName");
	return(
		<div>
			<h3>Welcome {name}</h3>
			<hr />
			
		</div>
	)
}

function Users() {
	return(
		<div>
			<h3>Manage Users</h3>
			<hr />
			

		</div>
	)
}

function Products() {
	return(
		<div>
			<h3>Manage Products</h3>
			<hr />
			
		</div>
	)
}

function Orders() {
	return(
		<div>
			<h3>Manage Orders</h3>
			<hr />
			
		</div>
	)
}