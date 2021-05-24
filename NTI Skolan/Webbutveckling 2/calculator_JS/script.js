// Collect items we need

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-action]');
const clear = document.querySelector('[data-clear]');
let current = document.querySelector('.current');
let equation = document.querySelector('.equation');

// Variables

let sum = 0;
let currentNumber = 0;
let sign = '';

//Use forEach method to set addEventListener for every element from NodeList. After click button, is displayed.

numbers.forEach(button => {
    button.addEventListener('click', () => {  
        if(current.textContent == 0){current.textContent = ''};
        current.textContent += button.textContent;
    })
})

//Use forEach method to set addEventListener for every element from NodeList. Every of operators got logic for work correctly.

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        
        switch(operator.textContent){
            case '+':
                sign = "+";
                currentNumber = parseFloat(current.textContent);
                equation.textContent += currentNumber + operator.textContent;
                current.textContent = '';
                sum += currentNumber;
                currentNumber = 0; 
                break;
            case '-':
                sign = "-";
                currentNumber = parseFloat(current.textContent);
                equation.textContent == false ? sum += currentNumber : sum -= currentNumber;
                equation.textContent += currentNumber + operator.textContent;
                current.textContent = '';
                currentNumber = 0; 
                break;
            case '×':
                sign = "×";
                currentNumber = parseFloat(current.textContent);
                equation.textContent == false ? sum += currentNumber : sum *= currentNumber;
                equation.textContent += currentNumber + operator.textContent;
                current.textContent = '';
                currentNumber = 0; 
                break;
            case '÷':
                sign = "÷";
                currentNumber = parseFloat(current.textContent);
                equation.textContent == false ? sum += currentNumber : sum /= currentNumber;
                equation.textContent += currentNumber + operator.textContent;
                current.textContent = '';
                currentNumber = 0; 
                break;
            case '=':
                currentNumber = parseFloat(current.textContent);
                switch(sign){
                    case '+':
                        sum += currentNumber;
                        break;
                    case '-':
                        sum -= currentNumber;
                        break;
                    case '×':
                        sum *= currentNumber;
                        break;
                    case '÷':
                        sum /= currentNumber;
                        break;
                }
                equation.textContent == false ? current.textContent = currentNumber : current.textContent = sum;
                equation.textContent = '';
                sum = 0;
                currentNumber = 0;
                break;
        }
    })
})


// Clear Button. Reset all values.

clear.addEventListener('click', () => {
    
    clear.blur();
    equation.textContent = '';
    current.textContent = '0';
    sum = 0;
    currentNumber = 0; 
    sign = '';
})


// Keydown function for detect Numpad buttons on keybord.

const keyChange = (e) => {
    if(current.textContent == 0){current.textContent = ''};
    switch(e.keyCode){
        case 96:
            current.textContent == 0 ? current.textContent = 0 : current.textContent += 0;
            break;     
        case 97:
            current.textContent += 1;
            break; 
        case 98:
            current.textContent += 2;
            break; 
        case 99:
            current.textContent += 3;
            break; 
        case 100:
            current.textContent += 4;
            break; 
        case 101:
            current.textContent += 5;
            break; 
        case 102:
            current.textContent += 6;
            break; 
        case 103:
            current.textContent += 7;
            break; 
        case 104:
            current.textContent += 8;
            break; 
        case 105:
            current.textContent += 9;
            break; 
        case 110:
            current.textContent += '.';
            break; 


        case 106:
            sign = "×";
            currentNumber = parseFloat(current.textContent);
            equation.textContent == false ? sum += currentNumber : sum *= currentNumber;
            equation.textContent += currentNumber + "×";
            current.textContent = '';
            currentNumber = 0;   
            break; 
        case 107:
            sign = "+";
            currentNumber = parseFloat(current.textContent);
            equation.textContent += currentNumber + "+";
            current.textContent = '';
            sum += currentNumber;
            currentNumber = 0;  
            break; 
        case 109:
            sign = "-";
            currentNumber = parseFloat(current.textContent);
            equation.textContent == false ? sum += currentNumber : sum -= currentNumber;
            equation.textContent += currentNumber + "-";
            current.textContent = '';
            currentNumber = 0; 
            break; 
        case 111:
            sign = "÷";
            currentNumber = parseFloat(current.textContent);
            equation.textContent == false ? sum += currentNumber : sum /= currentNumber;
            equation.textContent += currentNumber + "÷";
            current.textContent = '';
            currentNumber = 0; 
            break;
        case 13:
            currentNumber = parseFloat(current.textContent);
            switch(sign){
                case '+':
                    sum += currentNumber;
                    break;
                case '-':
                    sum -= currentNumber;
                    break;
                case '×':
                    sum *= currentNumber;
                    break;
                case '÷':
                    sum /= currentNumber;
                    break;
            }
            equation.textContent == false ? current.textContent = currentNumber : current.textContent = sum;
            equation.textContent = '';
            sum = 0;
            currentNumber = 0;
            break;
        case 8:
            equation.textContent = '';
            current.textContent = '0';
            sum = 0;
            currentNumber = 0; 
            sign = ''; 
            break;
        
    }      
}




// Implement function for whole window. No focus needed.

window.addEventListener('keydown', keyChange);