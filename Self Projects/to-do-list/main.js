// Task Class: Represens Task
const taskList = [];

class Task {
    constructor(title){
        this.title = title;
    }
}

// UI Class: User Interface tasks

class UI {
    static displayList() {
       const savedTask = [
        {   
            title: 'Go to the gym'
        },
        {   
            title: 'Read a book'
        },
        {   
            title: 'Go shopping'
        }
       ];

       savedTask.forEach((task) => UI.addTaskToList(task));
       savedTask.forEach((task) => taskList.push(task));
    }

    static addTaskToList(task){
        
        const list = document.getElementById('task-list');
        const singleTask = document.createElement('li');
        singleTask.innerHTML = `${task.title} <a href="#" class="btn btn-danger btn-sm delete">X</a>`;
        
        list.appendChild(singleTask);
    }

    static getTask() {
        const input = document.querySelector('.form-control').value;
        const task = new Task (input);
        UI.addTaskToList(task);
        taskList.push(task);
    }

    
    }
}

// Event: Display List

document.addEventListener('DOMContentLoaded', UI.displayList);

// Event: Add task

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', UI.getTask);

// Event: Remove Task

