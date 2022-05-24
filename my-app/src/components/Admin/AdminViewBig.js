import React, { useState, useContext } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import AdminContext from '../Contexts/AdminContext';
import fetchAdminData from './fetchAdminData';
import { Orders, Users, Products, Profile } from './ViewTabs';


export default function AdminViewBig() {
	const [key, setKey] = useState("profile");
	const [search, setSearch] = useState('');
	const {data, setData} = useContext(AdminContext);
	
	let myProp ={
			search: search,
			setSearch: setSearch,
			data: data
	};
	
	myProp.data = data;

	

	return(
		<Tab.Container activeKey={key} onSelect={k => setKey(k)} mountOnEnter unmountOnExit  >
			<Row className="p-0 m-0" >
				<Col xs={3} className="m-0 px-4 py-3">
					<Nav variant="pills" className="flex-column" >
						<Nav.Item>
							<Nav.Link onClick={e => setSearch('')} eventKey="profile">My Profile</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchAdminData(setData, "users", "/users/getAll")}} eventKey="users">Users</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchAdminData(setData, "products", "/products/getAll" )}} eventKey="products">Products</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchAdminData(setData, "orders", "/orders/getAll" )}} eventKey="orders">Orders</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>

				<Col xs={9} className="p-3">
					<Tab.Content >
						<Tab.Pane eventKey="profile" mountOnEnter unmountOnExit >
							<Profile />
						</Tab.Pane>

						<Tab.Pane eventKey="users" mountOnEnter unmountOnExit >
							<Users {...myProp} />
						</Tab.Pane>

						<Tab.Pane eventKey="products" mountOnEnter unmountOnExit >
							<Products {...myProp} />
						</Tab.Pane>

						<Tab.Pane eventKey="orders" mountOnEnter unmountOnExit >
							<Orders {...myProp} />
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}





