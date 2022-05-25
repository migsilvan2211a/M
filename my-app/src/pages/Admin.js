import React, {useState, useEffect} from 'react';
import AdminViewBig from '../components/Admin/AdminViewBig';
import AdminViewSmall from '../components/Admin/AdminViewSmall';
import { useMediaQuery } from 'react-responsive'
import { AdminProvider } from '../components/Contexts/AdminContext';
import { useNavigate } from 'react-router-dom'
import serverMessage from '../components/Commons/serverMessage';

export default function Admin() {
	const navi = useNavigate();
	useEffect(() => {
		fetch(`https://infinite-sea-39312.herokuapp.com/login/adminOnly`, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json"
			}
		}).then(res => res.json())
		.then(data => {
			if (data.error){
				serverMessage(data, "");
				navi("/")
			}
		})
	}, [])
	const isSmall = useMediaQuery({ maxWidth: 768});
	let [data, setData] = useState();
	return(
		<div>
			<AdminProvider value={{data, setData}}>
			{
				isSmall ?
				<AdminViewSmall /> :
				<AdminViewBig />
			}
			</AdminProvider>
		</div>
	);
}