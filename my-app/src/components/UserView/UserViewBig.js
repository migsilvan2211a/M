import React, { useState } from 'react';
import { Button } from 'react-bootstrap'


export default function UserViewBig() {
	
	const [userPage, setUserPage] = useState(<UserProfile />);

	return(
		<div className="row m-0 p-0">
			<div className="col-2 d-flex flex-column justify-content-center align-items-center">
				<Button className="linkDecor w-50" onClick={e => setUserPage(<UserProfile />)}>Profile</Button>
				<Button className="linkDecor w-50" onClick={e => setUserPage(<UserOrders />)}>My Orders</Button>
				<Button className="linkDecor w-50" onClick={e => setUserPage(<UserCart />)}>My Cart</Button>
			</div>
			<div className="col-10 p-5 border border-black">
				{userPage}
			</div>
		</div>
	)
}

function UserProfile() {
	const name = localStorage.getItem('fullName')
	return(
		<div>
			<h1>Welcome {name}</h1>
		</div>
	);
}

function UserOrders() {
	return(
		<div>
		</div>
	);
}

function UserCart() {
	return(
		<div>
		</div>
	);
}