
export default function phoneChecker(phone) {
	let result = {bool: true, message: ""};

	if ( phone.length > 0 &&  /^[0-9]*$/.test(phone) == false){
		result.message = "Phone number must contain only numbers";
		result.bool = false;
		return result;
	}

	if (phone.length > 0 && phone.length !== 11){
		result.message = "Phone number must be 11 digits"
		result.bool = false;
		return result;
	}

	if (phone.length > 3  && !prefixChk(phone)){
		result.message = "Phone number is invalid";
		result.bool = false;
		return result;
	}
	return result;

}

function prefixChk(phone) {
	let prefixPhone = phone.substring(0, 5);
	console.log(prefixPhone)
	let prefix4 = ["0817", "0905", "0906", "0907", "0908", "0909", "0910", "0912", "0915", "0916", "0917", "0918", "0919", 
	"0920", "0921", "0922", "0923", "0924", "0925", "0926", "0927", "0928", "0929", "0930", "0931", "0932", "0933", "0934", "0935", 
	"0936", "0937", "0938", "0939", "0940", "0941", "0942", "0943", "0945", "0946", "0947", "0948", "0949", "0950", "0951", "0953", 
	"0954", "0955", "0956", "0961", "0965", "0966", "0967", "0973", "0974", "0975", "0976", "0977", "0978", "0979", "0994", "0995", 
	"0996", "0997", "0998", "0999"]
	let prefix5 = ["09173", "09175", "09176", "09178", "09253", "09255", "09256", "09257", "09258"]

	for (let i = 0 ; i < prefix5.length ; i++) {
		if (prefixPhone.includes(prefix5[i]))
			return true;
	}
	for (let i = 0 ; i < prefix4.length ; i++) {
		if (prefixPhone.includes(prefix4[i]))
			return true;
	}

	return false;

}