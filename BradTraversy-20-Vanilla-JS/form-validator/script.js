const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errMessage = document.querySelector('small');


// check minimum if input have 3-15 signs

//check if both password are the same

// validate email

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!(re.test(String(email.value).toLowerCase()))) {
        (email.parentElement.classList.add('error'));
    }
    
    
    

    // return re.test(String(email.value).toLowerCase());
}

// red green class

function isValid(item, boolean) {
    
    if(boolean == 'true'){
        item.parentElement.classList.add('succes');
    } else {
        item.parentElement.classList.add('error');
    }

}

//create error message

function createError(item, text){
    const error = item + ' ' + text;
    return error;
}

function capitalizeElement(input) {
    const cap = input.charAt(0).toUpperCase() + input.slice(1);
    return cap;
}

//check inputs, add success or error
function checkInput(input){
    input.forEach((item) => {
        
        const formControl = item.parentElement;
        
        formControl.className = 'form-control';
        if(!!item.value.trim()) {
            formControl.classList.add('success');
        } else {
            formControl.classList.add('error');
            formControl.querySelector('small').innerHTML = createError(capitalizeElement(item.id), 'is not valid')
        }
    })
}


//handle Submit 
function handleSubmit(e){
    e.preventDefault();

    checkInput([username, email, password, password2]);
    validateEmail(email);
    

}

// Event on submit

form.addEventListener('submit', (e) => handleSubmit(e));


