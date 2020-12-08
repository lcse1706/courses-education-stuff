const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate temporibus ratione totam alias mollitia ipsa eveniet distinctio modi est. Rerum ab dicta at explicabo? Voluptate quos voluptatum tempore. Nobis, inventore.";

const div = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
let indexText = 0;

const typeLetter = () => {
    
        div.textContent += text[indexText];
        indexText++;

        if(indexText == text.length) { clearInterval(indexTyping)}
}    


const showCursor = () => {
    cursor.classList.toggle("active")
}

const indexTyping = setInterval(typeLetter, 40);
setInterval(showCursor, 400);

