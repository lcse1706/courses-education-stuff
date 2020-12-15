const slideImg = [{
    img: "images/img1.jpg",
    text: "One",
},{
    img: "images/img2.jpg",
    text: "Two",
},{
    img: "images/img3.jpg",
    text: "Three",
}];

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];
let time = 3000;
let active = 0;


const keyChange = (e) => {
    if(e.keyCode == 37 || e.keyCode == 39){
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
        
        if (active == slideImg.length){
            active = 0;
        } else if ( active < 0){
            active = slideImg.length-1;
        }
        h1.textContent = slideImg[active].text;
        img.src = slideImg[active].img;
        activeDot();
        indexInterval = setInterval(changeSlide, time);
    }        
}



const activeDot = () => {
    const activeDot = dots.findIndex( dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () =>{
    active++;
    if (active == slideImg.length){
        active = 0;
    }
    h1.textContent = slideImg[active].text;
    img.src = slideImg[active].img; 
    
    activeDot();
}




let indexInterval = setInterval(changeSlide, time);
window.addEventListener('keydown', keyChange);