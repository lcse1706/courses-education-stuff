const button = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Lena", "Olivia", "Ewa", "Karolina", "Marta", "Sandra", "Beata", "Angelika", "Gosia"];

const prefixes = ["I thing", "I belive", "I'm pretty sure", "In my opinion"];

const nameGenerator = () => {
    const index = Math.floor((Math.random() * names.length));
    div.textContent = `${prefixes[Math.floor((Math.random() * prefixes.length))]}, the cutest name is ${names[index]}`; 
}


button.addEventListener('click', nameGenerator)