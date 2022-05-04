const validateLetterNum  = function (string) {
	let hasNumber = false;
	let hasLetter = false;
	let stringIndex = 0;

	if (!string) return;

	for (stringIndex; stringIndex < string.length; stringIndex += 1) {
		let element = string[stringIndex];

		if (isNaN(element)) {
				hasLetter = true;
		}

		if (!isNaN(element)) {
				hasNumber = true;
		} 
	}

	return hasLetter && hasNumber;
}
const hasEmailFormat = function (email) {
	return email.length > 10 && email.includes('@') && email.includes('.com');
}

const validateEmail = function(email, emailError) {
	if (!email) return;
	if (!hasEmailFormat(email)) {
		emailError.style.visibility = "visible";
		email.classList = "invalid-input";
	}
}

const validatePassword = function(password, passwordError) {
	if (!password) return;
	if (!validateLetterNum(password)) {
		passwordError.style.visibility = "visible";
		password.classList = "invalid-input";
	}
}

window.onload = function () {
	let email = document.querySelector(".email-field");
	let password = document.querySelector(".password-field");
	let emailError = document.querySelector(".email-error");
	let passwordError = document.querySelector(".password-error");

  email.addEventListener("blur", (event) => validateEmail(event.target.value, emailError));
	email.addEventListener("focus", function () {
		emailError.style.visibility = "hidden";
		email.classList -= "invalid-input";
	});

  password.addEventListener("blur", (event) => validatePassword(event.target.value, passwordError));
	password.addEventListener("focus", function () {
		passwordError.style.visibility = "hidden";
		password.classList -= "invalid-input";
	});
}

function onSubmit(event) {
	event.stopPropagation();
	event.preventDefault();

	const email = event.target[1].value;
	const password = event.target[2].value;

	let url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
	url += `email=${email}`;
	url += `&password=${password}`;

	fetch(url)
		.then(response => response.json())
		.then((data) => {
			if (data.success) {
				alert('Login success');
			} else {
				const errors = data.errors ? data.errors.map(({ msg }) => msg) : data.msg;
				
				alert(data.errors ? errors.join('\n') : errors);
			}
		}
	);
}
