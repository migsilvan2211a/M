//import { MyTable } from './TableMaker';

import { Row, Col } from 'react-bootstrap'

function Profile() {
	const name = localStorage.getItem("fullName");
	return(
		<div>
			<h3>Welcome {name}</h3>
			<hr />

		</div>
	)
}

function Cart({ search, setSearch, data }) { //data is user info
	return(
		<></>
	)
}

function Orders() {
	return <> </>
}

export {Profile, Cart, Orders}