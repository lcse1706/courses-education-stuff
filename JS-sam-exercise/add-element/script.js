const btn = document.querySelector("button");

let counter = 1;
btn.addEventListener('click', function(){
            
    const divElement = document.createElement('div');
    divElement.textContent = counter;
    if( counter%5 == 0){
        divElement.classList.add("circle");
    }
    document.body.appendChild(divElement);
    counter++;
});