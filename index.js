const fName = document.querySelector('#txt-first-name');
const lName = document.querySelector('#txt-last-name');
const fullName = document.querySelector('#span-full-name');

fName.addEventListener('keyup', (event) => {
	fullName.innerHTML = fName.value + " " + lName.value;
});

lName.addEventListener('keyup', (event) => {
	fullName.innerHTML = fName.value + " " + lName.value;
});