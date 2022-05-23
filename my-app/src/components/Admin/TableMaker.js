import React, {useContext} from 'react';
import AdminContext from '../Contexts/AdminContext';
import fetchAdminData from './fetchAdminData';
import serverMessage from '../serverMessage';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

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
		.then(data => {serverMessage(data, "Successfully deleted" ); fetchAdminData(setData, category, "/products/findAll")})
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

export {TableSearch, MyTable, TableData}