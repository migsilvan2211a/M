import Swal from 'sweetalert2';

export default function serverMessage(data, toCheck) {
	let message = data.message;
	let error = data.error;
	if(message === toCheck)
		Swal.fire("Success!", toCheck, "success")
	else if(message)
		Swal.fire("Oops!", message, 'error')
	else if(error)
		Swal.fire("Oops!", error, 'error')
}