import React, { useState, useContext } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import UserContext2 from '../Contexts/UserContext2';
import fetchUserData from './fetchUserData';
import { Profile } from './ViewTabs';


export default function UserViewBig() {
	const [key, setKey] = useState("profile");
	const [search, setSearch] = useState('');
	const {data, setData} = useContext(UserContext2);
	
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
							<Nav.Link onClick={e => {setSearch(''); fetchUserData(setData, "profile", "/users/getAll")}} eventKey="profile">My Profile</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchUserData(setData, "cart", "/products/getAll" )}} eventKey="cart">My Cart</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchUserData(setData, "orders", "/orders/getAll" )}} eventKey="orders">My Orders</Nav.Link>
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





