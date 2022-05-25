import serverMessage from '../Commons/serverMessage';
import fetchAdminData from './fetchAdminData';
import invalidCredentials from '../Commons/invalidCredentials'

export default function uploadProduct(name, setName, description, setDescription, price, setPrice, stock, setStock, setData, imgURL, setImgURL, style, setStyle) {
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
			stock: stock,
			img: {
				link: imgURL,
				style: style
			}
		})
	}).then(res => res.json())
	.then(data => {
		if (data.error == "Invalid Credentials")
			return invalidCredentials();
		serverMessage(data, "Product saved successfully"); 
		fetchAdminData(setData, "products", "/products/getAll")
	})
			setDescription('');
			setPrice('');
			setStock('');
			setImgURL('');

	}