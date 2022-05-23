import React, { useState, useContext } from 'react';
import { Tabs, Tab,  Nav, Row, Col } from 'react-bootstrap';
import AdminContext from '../Contexts/AdminContext';
import fetchAdminData from './fetchAdminData';
import { Orders, Users, Products, Profile } from './ViewTabs';


export default function AdminViewSmall() {
	const [key, setKey] = useState("profile");
	const [search, setSearch] = useState('');
	const {data, setData} = useContext(AdminContext);
	
	let myProp ={
			search: search,
			setSearch: setSearch,
			data: data
	};
	
	myProp.data = data;

	const changeTab = (k) => {
		setSearch('');
		if (k === "users") {
			fetchAdminData(setData, "users", "/users/getAll")
		}
		else if(k === "products")
			fetchAdminData(setData, "products", "/products/findAll")
		else if(k === "orders")
			fetchAdminData(setData, "orders", "/orders/getAll")
	}
	return(
		<Tabs activeKey={key} onSelect={k => {setKey(k); changeTab(k)}} mountOnEnter unmountOnExit >
			<Tab eventKey="profile" title="Profile" onClick={e => {setSearch('')}} mountOnEnter unmountOnExit >
				<div className="p-3"><Profile /></div>
			</Tab>

			<Tab eventKey="users" title="Users" mountOnEnter unmountOnExit >
				<div className="p-3"><Users {...myProp}/></div>
			</Tab>

			<Tab eventKey="products" title="Products" mountOnEnter unmountOnExit >
				<div className="p-3"><Products {...myProp}/></div>
			</Tab>

			<Tab eventKey="orders" title="Orders" mountOnEnter unmountOnExit >
				<div className="p-3"><Orders {...myProp}/></div>
			</Tab>
		</Tabs>
	);
}