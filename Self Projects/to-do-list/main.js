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
    static clearField() {
        document.querySelector('.form-control').value = "";
    }

    static getTask(e) {
        const input = document.querySelector('.form-control').value;
        const task = new Task (input);    
        if (input) {
            UI.addTaskToList(task);
            UI.showAlert("Task Added", "success");
            taskList.push(task);
            UI.clearField();
        } else {
            UI.showAlert("Wrong Value", "danger");
        }
        
    }

    static deleteTask(el) {
        if(el.classList.contains('delete')){
            el.parentElement.remove();
        }
    }

    static showAlert (message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#list-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
}

// Event: Display List

document.addEventListener('DOMContentLoaded', UI.displayList);

// Event: Add task

document.querySelector('.add').addEventListener('click', UI.getTask);
document.body.addEventListener('keyup', (e) => {
    if(e.code === 'Enter'){
        UI.getTask();
    }
});

// Event: Remove Task

document.querySelector('#task-list').addEventListener('click', (e) => {
    UI.deleteTask(e.target);
})

