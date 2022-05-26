//full logic for password and verify password forms only

export default function passwordChecker(pass, verPass, fName, lName) {

	let result = {bool: true, message: []};
	let fNameLower = fName.toLowerCase().split(" ");
	let lNameLower = lName.toLowerCase().split(" ");
	let passLower = pass.toLowerCase();
	let verPassLower = verPass.toLowerCase();

	if (fName == "" && lName == ""){ 
		return result;}

	if (pass == "" && verPass == ""){ 
		return result;}
	
	for (let i = 0 ; i < fNameLower.length ; i++){
		if ( fName != "" && (passLower.includes(fNameLower) || verPassLower.includes(fNameLower))){
			result.bool = false;
			result.message.push("Password must not contain your name");
			return result;
		}
	}

	for (let i = 0 ; i < lNameLower.length ; i++){
		if ( lName != "" && (passLower.includes(lNameLower) || verPassLower.includes(lNameLower))){
			result.bool = false;
			result.message.push("Password must not contain your name");
			return result;
		}
	}
	
	if (pass == verPass) {
		let upper = /[A-Z]/;
		let lower = /[a-z]/;
		let number = /[0-9]/;
		let special = /[#?!@$%^&*-]/;
		let length = /.{8,}/;
		let main = /[A-Za-z0-9#?!@$%^&*-].{8,}$/;
		if(pass.match(main) == null) {
			console.log("HEY")
			if (pass.match(upper) === null){
				result.bool = false;
				result.message.push("Password must have at least 1 uppercase letter")
			}
			if (pass.match(lower) === null){
				result.bool = false;
				result.message.push("Password must have at least 1 lowercase letter")
			}
			if (pass.match(number) === null){
				result.bool = false;
				result.message.push("Password must have at least 1 number")
			}
			if (pass.match(special) === null){
				result.bool = false;
				result.message.push(`Password must have at least 1 special character`)
			}
			if (pass.match(length) === null){
				result.bool = false;
				result.message.push("Password must be at least 8 characters in length")
			}
			return result;
		}
		else
			return result;
	}
	else {
		console.log("else")
		result.bool = false;
		result.message.push("Passwords do not match");
		return result;
	}
	
}