const input = document.querySelector('input');
const div = document.querySelector('div')

const passwords = ['user', 'Lena', 'Ewa', 'Olivia'];
const messages = ['Important Content', 'Beautiful Name', "Wife's Name", 'Lovely name for girl'];

input.addEventListener('input', (e) => {
    div.textContent = '';
    let pass = e.target.value;

    passwords.forEach((password, index) => {
        if(password === pass){
            div.textContent = messages[index];
            pass = '';
        }
    })
})

// input.addEventListener('input', (e) =>{
//     if (e.target.value === password){
//         div.textContent = message;
//         e.target.value = '';
//     } else{
//         div.textContent = '';
//     }
// })

input.addEventListener('focus', () => {
    input.classList.add("active");
})

input.addEventListener('blur', () => {
    input.classList.remove("active");    
})

