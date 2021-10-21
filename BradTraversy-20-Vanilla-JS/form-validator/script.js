const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errMessage = document.querySelector('small');


// check minimum if input have 3-15 signs
function checkInput(item) {
    return (item.value.length > 3 && item.value.length < 15);
  }

//check if both password are the same
function checkPassword (password, password2){
    console.log('checking pass');
    return (password.value === password2.value)
}
// validate email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!(re.test(String(email.value).toLowerCase()))) {
        showError(email);
        email.parentElement.querySelector('small').innerText = createError(email.id, 'is not valid');
    }
}

//green
//create error message
function createError(input, text){
    return input.charAt(0).toUpperCase() + input.slice(1) + ' ' + text;
}

function showSuccess(item) {
    item.parentElement.className = 'form-control success';
}

function showError(item) {
    item.parentElement.className = 'form-control error';
}
//check inputs, add success or error
function checkingInput(input){
    input.forEach((item) => { 
        (item.value === '') ? showError(item) : showSuccess(item)
        console.log('checking inputs');
    })
}        
            

//handle Submit 
function handleSubmit(e){
    e.preventDefault();

    checkingInput([username, email, password, password2]);
    validateEmail(email);
}

// Event on submit
form.addEventListener('submit', (e) => handleSubmit(e));