import React, { useState, useContext } from 'react';
import { Tab, Nav, Row, Col, Form } from 'react-bootstrap';
import AdminContext from '../Contexts/AdminContext';
import fetchAdminData from './fetchAdminData';
import { MyTable } from './TableMaker';
import CreateProduct from './CreateProduct';


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
							<Nav.Link onClick={e => {setSearch('')}} eventKey="profile">My Profile</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchAdminData(setData, "users", "/users/getAll") }} eventKey="users">Users</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchAdminData(setData, "products", "/products/findAll") }} eventKey="products">Products</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link onClick={e => {setSearch(''); fetchAdminData(setData, "orders", "/orders/getAll") }} eventKey="orders">Orders</Nav.Link>
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

function Profile() {
	const name = localStorage.getItem("fullName");
	return(
		<div>
			<h3>Welcome {name}</h3>
			<hr />

		</div>
	)
}

function Users({data, ...props}) {
	let myProp = { ...data, ...props, category: "users" }
	return(
		<div>
			<h3>Manage Users</h3>
			<hr />
			<Search {...props} />
			<div className="overflow-auto mt-3">
				{
					(data) ? <MyTable {...myProp} /> : <></>
				}
			</div>

		</div>
	)
}

function Products({data, ...props}) {
	let myProp = { ...data, ...props, category: "products" }
	return(
		<div>
			<h3>Manage Products</h3>
			<hr />
			<Row>
				<Col xs={10}>
					<Search {...props} className="m-0 p-0 col"/>
				</Col>
				<Col xs={2}>				
					<CreateProduct className="m-0 p-0 col"/>
				</Col>
			</Row>
			<div className="overflow-auto mt-3">
				{
					(data) ? <MyTable {...myProp} /> : <></>
				}
			</div>

			
		</div>
	)
}

function Orders({data, ...props}) {
	let myProp = { ...data, ...props, category: "orders" }
	return(
		<div>
			<h3>Manage Orders</h3>
			<hr />
			<Search {...props} />
			<div className="overflow-auto mt-3">
				{
					(data) ? <MyTable {...myProp} /> : <></>
				}
			</div>

		</div>
	)
}

function Search({search, setSearch}) {
	
	return(
		
			<Form>
				<Form.Group>
					<div className="d-flex flex-row align-items-center">
						<Form.Label className="p-0 m-0 me-2 fitHeight d-inline-flex">Search: </Form.Label>
						<Form.Control type="text" onChange={e => {setSearch(e.target.value);}} value={search} />
					</div>
				</Form.Group>
			</Form>
		
	)
}





