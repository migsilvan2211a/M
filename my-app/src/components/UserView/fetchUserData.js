import invalidCredentials from '../Commons/invalidCredentials'

export default function fetchUserData(setData) {

	fetch(`https://infinite-sea-39312.herokuapp.com/users/getUser/${localStorage.getItem("id")}`, {
		headers: {
			authorization: `Bearer ${localStorage.getItem("token")}`
		}
		})
		.then(res => res.json())
		.then(data => {
			if (data.error == "Invalid Credentials")
				return invalidCredentials();
			console.log(data)
			setData(data);	
	})
	
	return;
}
