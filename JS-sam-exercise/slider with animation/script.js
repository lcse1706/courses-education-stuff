const colorImg = document.querySelector(".color");
const wbImg = document.querySelector(".wb");
const memberName = document.querySelector(".member h1")
const profession = document.querySelector(".member h2")

const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const wbImages = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const names = ["Lena Svenson", "Lukas Johnson", "Lasse Karlson"];
const professions = ["JS Developer", "UX/UI Designer", "Front-End Developer"];

let index = 1;

function changeContent() {
    
        if(index>2) { index = 0};
        colorImg.src = colorImages[index];
        wbImg.src = wbImages[index];
        memberName.textContent = names[index];
        profession.textContent = professions[index];
        index++;

}

setInterval(changeContent, 4000);

