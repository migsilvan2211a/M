import Swal from 'sweetalert2';
import {Navigate} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from '../UserContext';
export default function Logout() {
	const {setUser} = useContext(UserContext);
	localStorage.removeItem("isAdmin");
	localStorage.removeItem("email");
	localStorage.removeItem("token");
	localStorage.removeItem("fullName");
	setUser({token: null, email: null, isAdmin: null, fullName: null});
	Swal.fire("Successfully logged out", "", "success")

	return(
		<Navigate to="/" />
	)
}