import React, {useContext} from 'react';
import AdminContext from '../Contexts/AdminContext';
import fetchAdminData from './fetchAdminData';
import serverMessage from '../serverMessage';
import { Button } from 'react-bootstrap';

export default function TableData({header, myData, category}) {
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