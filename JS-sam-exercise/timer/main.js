const trigger = document.querySelector('.main');
const reset = document.querySelector('.reset');
const div = document.querySelector('.time div');

let time = 0;
let flag = false;
let idInterval;

const startPause = () => {
    if(!flag){
        flag = !flag;
        trigger.textContent = "Pause";
        idInterval = setInterval(start, 10);
    } else{
        flag = !flag;
        trigger.textContent = "Start";
        clearInterval(idInterval);
    }
}
const resetTime = () => {
    time = 0;
    div.textContent = (time/100).toFixed(2);
}
const start = () => {
    time++;
    div.textContent = (time/100).toFixed(2);
}
trigger.addEventListener('click', startPause);
reset.addEventListener('click', resetTime);

