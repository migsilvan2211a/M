function checkDivisibility(dividend, divisor) {
	if(dividend % divisor == 0)
		console.log(`${dividend} is divisible by ${divisor}`);
	else
		console.log(`${dividend} is not divisible by ${divisor}`)
}

checkDivisibility(0)