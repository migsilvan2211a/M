import React, { useContext, useState } from 'react';
import AdminContext from '../Contexts/AdminContext';
import fetchAdminData from './fetchAdminData';
import serverMessage from '../Commons/serverMessage';
import { Button, Table, Modal, Form, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function TableData({header, myData, category}) {
	return(
		<> 
			{
				myData.map(x => { //print the items x
					let forButton = {x, category};			
					return (
					<tr key={x._id}>
						{
							header.map(y => {
								return (<td>{`${x[y]}`}</td>)
							})
						}
						<td>
							<Updater {...forButton} />
						</td>
						<td>
							<Deleter {...forButton} />
						</td>
					</tr>)
				})
			} 
		</>		
	);
}
//MyTable directly returns table headers then calls the table list components
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
					<tr><td colSpan={6}>No Data Yet</td></tr> :
					(search) ?
					<TableSearch {...myProp} /> :
					<TableData {...myProp2} />
				}
			</tbody>
		</Table>
	) 
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

//the delete/update function is called when you click the delete/update button on admin page. X is the whole document
	function Deleter({x, category}) { 
		const {setData} = useContext(AdminContext)	
		const [show, setShow] = useState(false);
		const handleShow = () => setShow(true);
		const handleClose = () => setShow(false);
		function deleteFinal() {
			fetch(`https://infinite-sea-39312.herokuapp.com/${category}/delete/${x._id}`, 
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}
			).then(res => res.json())
			.then(data => {serverMessage(data, "Successfully deleted" ); fetchAdminData(setData, category, `/${category}/findAll`)})
		}

		return(
			<>
				<Button onClick={handleShow}>Delete</Button>
				<Modal show={show} onHide={handleClose} background="static" centered >
					<Modal.Header closeButton >
						<Modal.Title>Delete</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Are you sure you want to delete this item?</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleClose}>No</Button>
						<Button onClick={deleteFinal}>Yes</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}

	function Updater({x, category}) {
		let updates = {}
		const {setData} = useContext(AdminContext)	
		const [show, setShow] = useState(false);
		const handleShow = () => setShow(true);
		const handleClose = () => {setShow(false); updates = {}};
		
		function updateFinal() {
			let endLink = (category === "users") ? "/setAdmin" : `/update/${x._id}` ;
			fetch(`https://infinite-sea-39312.herokuapp.com/${category}${endLink}`, 
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${localStorage.getItem("token")}`
				},
				body: JSON.stringify({...updates})
			}
			).then(res => res.json())
			.then(data => { serverMessage(data, "Successfully updated" ); fetchAdminData(setData, category, `/${category}/getAll`)})
		}

		function UpdateUser() {
			if (x.isAdmin === true)
				updates = {email: x.email, isAdmin: false}
			else
				updates = {email: x.email, isAdmin: true}
			return(
				<Form>		
					<h3 className="text-center">Notice!</h3>
						
					<p className="text-center my-0">Admins can only change "Admin" status</p>
					{

						(x.isAdmin === "true") ? 
						<p className="text-center my-0">Change User to Admin?</p> :
						<p className="text-center my-0">Change Admin to User only?</p>
					}
				</Form>

			);
		}

		function UpdateProduct() {
			const [description, setDescription] = useState(x.description);
			const [price, setPrice] = useState(x.price);
			const [stock, setStock] = useState();
			const [active, setActive] = useState(x.isActive);

			updates = {
				$set : {
					"description": description,
					"price": price,
					"isActive": active
				},
				$inc : { "stock": stock}
			}
			function ActivateDeactivate() {
				return(
					<Row>	
						<Col xs={3} style={{borderRight: "4px solid grey"}}>
							{
								(active) ?
								<Button onClick={e => setActive(false)}>Deactivate</Button> :
								<Button onClick={e => setActive(true)}>Activate</Button>
							}
						</Col>

						<Col xs={9} className="d-flex align-items-center">
							{(active && x.isActive) ?
							<Form.Text className="text-muted">Product is currently active.</Form.Text> :
								(active) ?
									<Form.Text className="text-muted">Product will be activated.</Form.Text> :
										( !active && !x.isActive ) ?
											<Form.Text className="text-muted">Product is not currently active.</Form.Text> :
												<Form.Text className="text-muted">Product will be deactivated.</Form.Text>
							}
						</Col>
					</Row>
				)
			}

			return(
				<Form>
					
					<Form.Group className="my-3">
						<Form.Label>Name: </Form.Label>
						<Form.Control type="text" value={x.name} disabled />
						<Form.Text className="text'center text-muted">For security purposes, product name cannot be changed.</Form.Text>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label>Description: </Form.Label>
						<Form.Control type="text" onChange={e => setDescription(e.target.value)} value={description} />
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label>Price: </Form.Label>
						<Form.Control type="text" onChange={e => setPrice(e.target.value)} value={price} />
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label>Stock Amount +/-:</Form.Label>
						<Form.Control type="text" onChange={e => setStock(e.target.value)} value={stock} />
						<Form.Text className="text-muted">{`Current Stock: ${x.stock}`}</Form.Text>
					</Form.Group>
	
					<Form.Group>
						<ActivateDeactivate />
					</Form.Group>
					
				</Form>
			);
		}

		function UpdateOrder() {
			return(<></>);
		}
		return(
			<>
				<Button onClick={handleShow}>Update</Button>
				<Modal show={show} onHide={handleClose} background="static" centered >
					<Modal.Header closeButton >
						<Modal.Title>Update {`${category}`}: </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						
						{(category === "users") ? <UpdateUser />:
							(category === "products") ? <UpdateProduct /> :
								<UpdateOrder />}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleClose}>No</Button>
						<Button onClick={e => {updateFinal(); handleClose()}}>Yes</Button>
					</Modal.Footer>
				</Modal>
			</>
		)


		
	}

export {TableSearch, MyTable, TableData}