const toDoList = [];

const input = document.querySelector('input');
const filter = document.querySelector( '.filter')
const ul = document.querySelector('ul');
const liElements = document.getElementsByClassName('task');
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span')

const addTask = (e) => {
    e.preventDefault();
    
    const titleTask = input.value;
    if(titleTask == "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>delete</button>';
    toDoList.push(task);
     renderList();
    ul.appendChild(task);
    input.value = "";

    taskNumber.textContent = toDoList.length;
    task.querySelector('button').addEventListener('click', removeTask);
    
    
}

const removeTask = (e) => {
    
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1); 
    taskNumber.textContent = toDoList.length;
    renderList();
}

const searchItem = (e) => {
    console.log("dziala");
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter( li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach ( li => ul.appendChild(li))
}

// document.querySelectorAll('button[data-key]').forEach( item =>
//     item.addEventListener('click', removeTask));

filter.addEventListener("input", searchItem);

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
}
form.addEventListener("submit", addTask);
