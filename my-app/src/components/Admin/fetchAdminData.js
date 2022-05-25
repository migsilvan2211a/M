import invalidCredentials from '../Commons/invalidCredentials'

export default function fetchAdminData(setData, type, link) {
	let header = []
	if(type === "users")
		 header = [
			"_id",
			"fName",
			"lName",
			"email",
			"phone",
			"bday",
			"isAdmin",
			"address"
		];
	else if(type === "products")
		 header = [
			"_id",
			"name",
			"description",
			"prodIndx",
			"price",
			"stock",
			"isActive",
			"createdOn"
	]
	else if(type === "orders")
		 header = [
			"_id",
			"customer",
			"ordIndx",
			"totalAmount",
			"purchasedOn",
			"productOrders"
	]

	let myData = {
		header,
		data: []
	};

	fetch(`https://infinite-sea-39312.herokuapp.com${link}`, {
		headers: {
			authorization: `Bearer ${localStorage.getItem("token")}`
		}
		})
		.then(res => res.json())
		.then(data => {
			if (data.error == "Invalid Credentials")
				return invalidCredentials();
			myData.data = data;
			setData(myData)})
	
	
	return;
}
