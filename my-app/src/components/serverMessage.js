import Swal from 'sweetalert2';

export default function serverMessage(data, toCheck) {
	let message = data.message;
	let error = data.error;
	if(message && message.toLowerCase().includes(toCheck.toLowerCase()))
		Swal.fire("Success!", message, "success")
	else if(message)
		Swal.fire("Oops!", message, 'error')
	else if(error)
		Swal.fire("Oops!", error, 'error')
}