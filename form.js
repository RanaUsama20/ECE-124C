const form = document.getElementById('form');
const username = document.getElementById('username');

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phonenumber = document.getElementById('phonenumber');

const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const phonenumberValue = phonenumber.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim(); 

  if(usernameValue === '') {
    setErrorFor(username, 'Address cannot be blank');
  } else {
    setSuccessFor(username);
  }
  if(firstnameValue === '') {
    setErrorFor(firstname, 'firstname cannot be blank');
  } else {
    setSuccessFor(firstname);
  }
  if(lastnameValue === '') {
    setErrorFor(lastname, 'lastname cannot be blank');
  } else {
    setSuccessFor(lastname);
  }

  if(phonenumberValue.length != 11) {
    setErrorFor(phonenumber, 'Please enter a valid phone number');
    flag = 1;
  } else {
    setSuccessFor(phonenumber);
  }
  
  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }
  var letterNumber = /^[0-9a-zA-Z]+$/;

  if(password.value === '' ) {
    setErrorFor(password, 'Password cannot be blank');
    return false;
  }
  if(password.value.length < 8 || password.value.length > 8 ) {
    setErrorFor(password, 'Password cannot be more or less than 8 characters');
    return false;
  }
  if(password.value.search (/[0-9]/) === -1 ) {
    setErrorFor(password, 'Password must include a number');
    return false;
  }
  if(password.value.search (/[A-Z]/) === -1 ) {
    setErrorFor(password, 'Password must include an uppercase letter');
    return false;
  }
  if(password.value.search ( /[!\@\#\$\%\^\&\*\(\)\-\=\+\<\>\,\.\?\ ]/ ) === -1 ){
    setErrorFor(password, 'Password must include a special character');
    return false;
  }
  if(password.value.search (/[a-z]/) === -1 ) {
    setErrorFor(password, 'Password must include a Lowercase letter');
    return false;
  
  }
  else {
    setSuccessFor(password);
  }
}


  


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
} 

function doClick() { 
  if (username.value == '' || firstname.value == '' || lastname.value == '' || phonenumber.value == '' ||  password.value == '' || password.value.length < 8 || password.value.length > 8 || password.value.search (/[0-9]/) == -1 || password.value.search (/[A-Z]/) == -1 || password.value.search (/[a-z]/) == -1 ||password.value.search ( /[!\@\#\$\%\^\&\*\(\)\-\=\+\<\>\,\.\?\ ]/ ) == -1  ){       
   }
    else {
         window.location.href = "index.html";
      alert('registration done successfully');
       } 
      }
    

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
});
 