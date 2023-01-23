const list = document.querySelector('.list');

let tasksList = [];

function handleSubmit(e) {
  e.preventDefault();

  if (e.target.input.value) {
    addTask(e);
    e.target.input.value = '';
    return;
  }
  alert('Type task');
}

function addTask(e) {
  const item = e.target.input.value;
  tasksList.push(item);
  localStorage.setItem('tasks', tasksList);

  console.log(item);
  console.log('Task Added');

  list.dispatchEvent(new CustomEvent('updateList'));
}

function deleteTask(e) {
  if (e.target.matches('.delete')) {
    const item = e.target.parentNode;
    item.remove();
    tasksList = tasksList.filter(task => task !== item.id);
    console.info('Task Removed.');
    console.log(localStorage.item);

    localStorage.setItem('tasks', tasksList.join());

    list.dispatchEvent(new CustomEvent('itemsUpdate'));
  }
}

function displayList() {
  if (tasksList.length > 0) {
    list.innerHTML = tasksList
      .map(
        item => `
    <li id='${item}'><span class="item">
    ${item}
    </span>
    <button type='button' class='delete'>x</button>
    </li>
  `
      )
      .join('');
  }
}

function restoreLocalStorage() {
  if (localStorage.tasks.length > 0) {
    const restoredTasks = localStorage.getItem('tasks');
    tasksList = restoredTasks.split(',');
    console.log(tasksList);
    list.dispatchEvent(new CustomEvent('restoreList'));
  }
}

window.addEventListener('submit', handleSubmit);
list.addEventListener('updateList', displayList);
list.addEventListener('click', deleteTask);
list.addEventListener('restoreList', displayList);
// list.addEventListener('addItem', addTask);

restoreLocalStorage();
