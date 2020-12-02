const button = document.querySelector('button');
const section = document.querySelector('section');

const chars = "ABCDEFGH0123456789";

const codesNumber = 1000;
const codeLenght = 10;

let code = '';

const getRandomCode = () => {
    

    for(let i = 0; i<codesNumber; i++){

        const div = document.createElemente('div');
        
    
        for(let j = 0; j<codeLenght; j++){
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];   
        }

        div.textContent = code;
        section.appendChild(div);
        code = '';
    }
}


button.addEventListener('click', getRandomCode);
