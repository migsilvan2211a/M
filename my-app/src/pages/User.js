import React, {useEffect, useContext, useState } from 'react';
import UserViewBig from '../components/UserView/UserViewBig';
import UserViewSmall from '../components/UserView/UserViewSmall';
import { useMediaQuery } from 'react-responsive';
import serverMessage from '../components/Commons/serverMessage';
import { useNavigate, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import {UserContextProvider2} from '../components/Contexts/UserContext2'
export default function User() {
	const navi = useNavigate();
	const isSmall = useMediaQuery( { maxWidth: 768 });
	let [data, setData] = useState();

	let x = localStorage.getItem("isAdmin")
	switch(x) {
		case ("true") : 
			Swal.fire("Forbidden Action", "Please login properly with your user account", "error")
			navi('/')
			break;
		case (null) : 
			Swal.fire("Forbidden Action", "Please login first", "error")
			navi('/login')
			return
			break;
		case ("false") : 
			fetch(`https://infinite-sea-39312.herokuapp.com/login/userOnly`, {
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
					return;
				}
			})	
		return(
			<div>
				<UserContextProvider2 value={{data, setData}}>
					{
						isSmall ?
						<UserViewSmall /> :
						<UserViewBig />
					}
				</UserContextProvider2>
			</div>
		)
	}
}