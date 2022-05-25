import Swal from 'sweetalert2'
import {Navigate} from 'react-router-dom';

export default function invalidCredentials() {
	if (localStorage.getItem("token")) {
		Swal.fire("Session Timed Out", "Please log in again", "warning");
		localStorage.clear();
	}
	else
		Swal.fire("Please log in", "Please log in again", "warning");
		
	return (<Navigate to="/login" />)
}