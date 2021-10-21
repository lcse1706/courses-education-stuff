const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errMessage = document.querySelector('small');


// check minimum if input have 3-15 signs
function checkInputLength(input) {
    input.forEach ( (item) => {
            if (item.value.length <= 3 && item.value !=='') {
                showError(item);
                item.parentElement.querySelector('small').innerText = createError(item.id, 'is too short');
            } else if(item.value.length > 15 && item.value !==''){
                showError(item);
                item.parentElement.querySelector('small').innerText = createError(item.id, 'is too long');
            }
    })
}

//check if both password are the same
function checkPassword (password, password2){
    console.log('checking pass');
    return (password.value === password2.value)
}
// validate email
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!(re.test(String(input.value).toLowerCase())) && input.value !=='') {
        showError(input);
        input.parentElement.querySelector('small').innerText = createError(input.id, 'is not valid');
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
    item.parentElement.querySelector('small').innerText = createError(item.id, 'is required')
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
    checkInputLength([username, password, password2]);

}

// Event on submit
form.addEventListener('submit', (e) => handleSubmit(e));