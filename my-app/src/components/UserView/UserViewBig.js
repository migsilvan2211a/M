import React, { useState, useContext } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import UserContext2 from '../Contexts/UserContext2';
import fetchUserData from './fetchUserData';
import { Profile, Cart, Orders } from './ViewTabs';


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
							<Nav.Link onClick={e => {setSearch(''); fetchUserData(setData)}} eventKey="profile">My Profile</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchUserData(setData)}} eventKey="cart">My Cart</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchUserData(setData)}} eventKey="orders">My Orders</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>

				<Col xs={9} className="p-3">
					<Tab.Content >
						<Tab.Pane eventKey="profile" mountOnEnter unmountOnExit >
							<Profile />
						</Tab.Pane>

						<Tab.Pane eventKey="cart" mountOnEnter unmountOnExit >
							<Cart {...myProp} />
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





