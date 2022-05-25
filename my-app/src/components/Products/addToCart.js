import invalidCredentials from '../Commons/invalidCredentials'
import { Navigate } from 'react-router-dom'
import serverMessage from '../Commons/serverMessage'

export default function AddToCart({id, quantity}) { //prodId, orderNum
	console.log("hi")
	fetch(`https://infinite-sea-39312.herokuapp.com/orders/updateCart`, {
		method: "PUT",
		headers: {
			authorization: `Bearer ${localStorage.getItem("token")}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			productId: id,
			orderNum: quantity
		})
	}).then(res => res.json()).then(data => { 
		if (data.error == "Invalid Credentials")
			return invalidCredentials();
		serverMessage(data, "cart"); 
	});

	return (<Navigate to="/products" />)
}
