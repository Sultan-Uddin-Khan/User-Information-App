//Selector
 const form = document.getElementById('form');
 const name = document.getElementById('name');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const phone = document.getElementById('phone');
 const slug = document.getElementById('slug');
 const homepage = document.getElementById('homepage');
 const password = document.getElementById('password');




//event for clicking Submit button 
form.addEventListener('submit', e => {
	e.preventDefault();
	//function input receiving
	receiveInputs();
});

//function for receiving input
function receiveInputs() {
	// trim to remove the whitespaces
	const nameValue = Name.value.trim();
	const userNameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const slugValue = slug.value.trim();
	const homePageValue = homepage.value.trim();
	const passwordValue = password.value.trim();
	
 	if(nameValue === '') {
 		setErrorFor(Name, 'Name cannot be blank');
 	} else if(nameValue.length>=20){
		setErrorFor(Name, 'Name is too long');
	}else if(/\d/.test(nameValue)){
		setErrorFor(Name, 'Name should not contain number');
	}else {
 		setSuccessFor(Name);
 	}

     if(userNameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email)
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Phone number cannot be blank');
	} else if (!isPhoneNumber(phoneValue)) {
		setErrorFor(phone, 'Not a valid phone number');
	} else {
		setSuccessFor(phone);
	}
	
    if(slugValue === '') {
		setErrorFor(slug, 'Slug cannot be blank');
	} else if (!isSlug(slugValue)) {
		setErrorFor(slug, 'Not a valid slug');
	} else {
		setSuccessFor(slug);
	}
	
    if(homePageValue === '') {
		setErrorFor(homepage, 'url cannot be blank');
	} else if (!isHomepage(homePageValue)) {
		setErrorFor(homepage, 'Not a valid url');
	} else {
		setSuccessFor(homepage);
	}
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(!isPassword(passwordValue)) {
		setErrorFor(password, 'Password is not valid');
	} else{
		setSuccessFor(password);
	}
}

function copyPassword(){
	const passwordInput2 = document.querySelector('#password');
    passwordInput2.addEventListener('input', (event) => {
    passwordInput2.value = event.target.value;
});
}


//function for setting error
function setErrorFor(input, message) {
	 const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message
}



//function for setting success
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';		
}

//function for email validation
function isEmail(email) {
	return /\w{2,}.?\w{2,}\@\w{2,20}\.\w{2,10}(\.\w{2,10})?/.test(email);
}

// //function for phone number validation
function isPhoneNumber(phoneNumber) {
	return /\+?(88)?01(4|5|6|7|8|9)\d{8}/.test(phoneNumber);
}

//function for slug number validation
function isSlug(slug) {
	return /^[A-Za-z0-9]((-|\.)?[A-Za-z0-9])*$/.test(slug);
}

//function for homepage validation
function isHomepage(homepage) {
	return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(homepage);
}


// function for Random Password Generator
function generatePassword(){
  var password = $('#password');
  password= Math.random().toString(36).slice(-10); 
  document.getElementById("password").value = password;
}

//function for password validation
function isPassword(password) {
	return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

function copyPassword(){;
	var copyText = document.getElementById("password");
    navigator.clipboard.writeText(copyText.value);	
}
 

