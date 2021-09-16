class List {
    constructor() {

    }

    addTask(toDoList, toDoElement, list){
            
        const task = document.createElement('li');
        task.innerHTML = toDoElement.value + '<button>delete</button>';
        toDoList.push(task);
        list.appendChild(task);
        toDoElement.value = "";
        
    }

    removeTask(){
        const index = e.target.parentNode.dataset.key;
        toDoList.splice(index, 1); 
    }


    renderList(list, toDoList){
        list.textContent = "";
        toDoList.forEach((toDoElement, key) => {
            toDoElement.dataset.key = key;
            list.appendChild(toDoElement);
        })
    }

    
}