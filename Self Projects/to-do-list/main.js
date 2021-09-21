// Task Class: Represens Task

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

       const tasks = savedTask;

       tasks.forEach((task) => UI.addTaskToList(task));
    }

    static addTaskToList(task){
        
        const list = document.getElementById('task-list');
        const singleTask = document.createElement('li');
        singleTask.innerHTML = `${task.title} <a href="#" class = "btn btn-danger btn-sm delete">X</a>`;
        
        list.appendChild(singleTask);


    }
}

// Event: Display List

document.addEventListener('DOMContentLoaded', UI.displayList);

// Event: Add task

// Event: Remove Task