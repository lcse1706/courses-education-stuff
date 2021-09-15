class List {
    constructor() {

    }

    addTask(toDoElement, list){
            
        const task = document.createElement('li');
        task.innerHTML = toDoElement.value;
        list.appendChild(task);
        toDoElement.value = "";
        
    }
}