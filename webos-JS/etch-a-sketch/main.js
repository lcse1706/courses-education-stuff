// Select elements - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_VALUE = 20;

// // Set up canvas for drawing
// const width = canvas.width;
// const height = canvas.height;

const { width, height } = canvas; // Destructuring

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// Create random x and y starting points on canvas
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_VALUE;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath();  //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();



// Write a draw function

function draw({ key }){

    // change color of line
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    
    // ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(x,y);
    
    // move our x and y values depending what user did
    switch(key) {
        case 'ArrowUp':
          y -= MOVE_VALUE;
          break;
        case 'ArrowDown':
          y += MOVE_VALUE;
          break;
        case 'ArrowRight':
          x += MOVE_VALUE;
          break;
        case 'ArrowLeft':
          x -= MOVE_VALUE;
          break;
        default:
          break;
      }
    ctx.lineTo(x,y);
    ctx.stroke();

}

// Write a handler for keys 
function handleKey(e) {
    if (e.key.includes('Arrow')){
        e.preventDefault();
        draw({key: e.key});
    }
}

// clear/shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height)
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    },
    { once : true }
    );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey)
shakebutton.addEventListener('click', clearCanvas)