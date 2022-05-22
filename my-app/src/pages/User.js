import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';
export default function User() {
	const {user} = useContext(UserContext);
	const name = localStorage.getItem('fullName')

	return(
		<div className="row">
			<div>
			</div>
			<div className="p-5 m-5 border border-black">
				<h1>Welcome {name}</h1>
			</div>
		</div>
	)
}