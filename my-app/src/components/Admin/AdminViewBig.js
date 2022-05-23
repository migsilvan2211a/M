import React, { useState, useContext } from 'react';
import { Tab, Nav, Row, Col, Form, Table, Button, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Swal from "sweetalert2"
import AdminContext from '../Contexts/AdminContext'


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

function MyTable({header, data, search, category}) {
	let myProp = {header, data, search, category};
	let myData = data;
	let myProp2 = {header, myData, category}
	return(
		<Table striped bordered hover>
			<thead>
				<tr>
					{
						header.map(x => {
							return(<th>{x}</th>)
						})
					}
					<th>Update</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{
					(data.message) ?
					<tr>No Data Yet</tr> :
					(search) ?
					<TableSearch {...myProp} /> :
					<TableData {...myProp2} />
				}
			</tbody>
		</Table>
	)
}

function TableData({header, myData, category}) {
	const {setData} = useContext(AdminContext)	

	const deleter = (id) => {
		fetch(`https://infinite-sea-39312.herokuapp.com/${category}/delete/${id}`, 
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}
		).then(res => res.json())
		.then(data => {serverMessage(data, "Product successfully deleted" ); fetchAdminData(setData, "products", "/products/findAll")})
	}

	return(
		<> 
			{
				myData.map(x => { //print the items					
					return (
					<tr key={x._id}>
						{
							header.map(y => {
								return (<td>{`${x[y]}`}</td>)
							})
						}
						<td>
							<Button>Update</Button>
						</td>
						<td>
							<Button onClick={e => deleter(x._id) } >Delete</Button>
						</td>
					</tr>)
				})
			} 
		</>		
	);
}

function TableSearch({header, data, search, category}) {
	let mySearch = search.toLowerCase();
	let myData = data.filter(x => {
		return JSON.stringify(x).toLowerCase().includes(mySearch)
	})
	let myProps = {header, myData, category}

	return(
		<TableData {...myProps} />
	);
}

function fetchAdminData(setData, type, link) {
	let header = []
	if(type === "users")
		 header = [
			"_id",
			"fName",
			"lName",
			"email",
			"phone",
			"bday",
			"isAdmin",
			"address"
		];
	else if(type === "products")
		 header = [
			"_id",
			"name",
			"description",
			"prodIndx",
			"price",
			"stock",
			"isActive",
			"createdOn"
	]
	else if(type === "orders")
		 header = [
			"_id",
			"customer",
			"ordIndx",
			"totalAmount",
			"purchasedOn",
			"productOrders"
	]

	let myData = {
		header,
		data: []
	};

	fetch(`https://infinite-sea-39312.herokuapp.com${link}`, {
		headers: {
			authorization: `Bearer ${localStorage.getItem("token")}`
		}
		})
		.then(res => res.json())
		.then(data => {myData.data = data; setData(myData)})
	
	
	return;
}

function CreateProduct() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const {setData} = useContext(AdminContext);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [stock, setStock] = useState('');	

	function uploadProduct() {

		fetch(`https://infinite-sea-39312.herokuapp.com/products/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price,
				stock: stock
			})
		}).then(res => res.json())
		.then(data => {
			serverMessage(data, "Product saved successfully"); 
			fetchAdminData(setData, "products", "/products/findAll")
		})
			setName('');
			setDescription('');
			setPrice('');
			setStock('');
	}

	return(
		<>
			<Button onClick={handleShow}>New Product</Button>
			<Modal show={show} onHide={handleClose} backdrop="static" centered >
				<Modal.Header closeButton >
					<Modal.Title>Create New Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>Product Name:</Form.Label>
							<Form.Control type="text" onChange={e => setName(e.target.value)} value={name} required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Description:</Form.Label>
							<Form.Control type="text" onChange={e => setDescription(e.target.value)} value={description} required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Price:</Form.Label>
							<Form.Control type="text" onChange={e => setPrice(e.target.value)} value={price} required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Stock:</Form.Label>
							<Form.Control type="text" onChange={e => setStock(e.target.value)} value={stock} required/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={uploadProduct}>Submit</Button>
				</Modal.Footer>
			</Modal>
		</>
	
	);

}

function serverMessage(data, toCheck) {
	let message = data.message;
	let error = data.error;
	if(message === toCheck)
		Swal.fire("Success!", toCheck, "success")
	else if(message)
		Swal.fire("Oops!", message, 'error')
	else if(error)
		Swal.fire("Oops!", error, 'error')
}