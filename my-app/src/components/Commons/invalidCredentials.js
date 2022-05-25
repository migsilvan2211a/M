import Swal from 'sweetalert2'
import {Navigate} from 'react-router-dom';

export default function invalidCredentials() {
	if (localStorage.getItem("token")) {
		Swal.fire("Session Timed Out", "Please log in again", "warning");
		localStorage.clear();
	}
	else
		Swal.fire("Your are note logged in", "Please log in", "warning");
		
	return (<Navigate to="/login" />)
}