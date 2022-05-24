import React, { useContext, useState } from 'react';
import AdminContext from '../Contexts/AdminContext';
import fetchAdminData from './fetchAdminData';
import serverMessage from '../serverMessage';
import { Button, Table, Modal } from 'react-bootstrap';
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
		const {setData} = useContext(AdminContext)	
		const [show, setShow] = useState(false);
		const handleShow = () => setShow(true);
		const handleClose = () => setShow(false);
		function updateFinal() {
			fetch(`https://infinite-sea-39312.herokuapp.com/${category}/update/${x._id}`, 
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}
			).then(res => res.json())
			.then(data => {serverMessage(data, "Successfully updated" ); fetchAdminData(setData, category, `/${category}/findAll`)})
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
						<Button onClick={updateFinal}>Yes</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}

export {TableSearch, MyTable, TableData}