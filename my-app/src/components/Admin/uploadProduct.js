import serverMessage from '../serverMessage';
import fetchAdminData from './fetchAdminData';

export default function uploadProduct(name, setName, description, setDescription, price, setPrice, stock, setStock, setData) {
	fetch(`https://infinite-sea-39312.herokuapp.com/products/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
			name: name,
			description: description,
			price: price,
			stock: stock
		})
	}).then(res => res.json())
	.then(data => {
		serverMessage(data, "Product saved successfully"); 
		fetchAdminData(setData, "products", "/products/findAll")
	})
		setName('');
		setDescription('');
		setPrice('');
		setStock('');
}