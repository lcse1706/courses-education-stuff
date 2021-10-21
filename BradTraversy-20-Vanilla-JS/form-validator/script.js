const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errMessage = document.querySelector('small');


// check minimum if input have 3-15 signs

//check if both password are the same

// validate email

//create error message

function createError(item, text){
    const error = item + ' ' + text;
    return error;
}

function capitalizeElement(input) {
    const cap = input.id.charAt(0).toUpperCase() + input.id.slice(1);
    return cap;
}

//check inputs, add success or error
function checkInput(input){
    input.forEach((item) => {
        const formControl = item.parentElement;
        formControl.className = 'form-control';
        if(!!item.value) {
            formControl.classList.add('success');
        } else {
            formControl.classList.add('error');
            formControl.querySelector('small').innerHTML = createError(capitalizeElement(item), 'is not valid')
        }
    })
}


//handle Submit 
function handleSubmit(e){
    e.preventDefault();

    checkInput([username, email, password, password2]) 

}

// Event on submit

form.addEventListener('submit', (e) => handleSubmit(e));


