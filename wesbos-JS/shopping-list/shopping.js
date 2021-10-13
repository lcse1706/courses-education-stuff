const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let tasksList = [];

function submitHandler(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name: name,
    id: Date.now(),
    finished: false,
  };
  tasksList.push(item);

  shoppingForm.reset();

  list.dispatchEvent(new CustomEvent('itemsUpdate'));
  // displayItems();
}

function displayItems() {
  const html = tasksList
    .map(
      (item) => `
    <li class="shopping-item">
    <input 
      value=${item.id} 
      type="checkbox"
      ${item.finished ? 'checked' : ''}
    >

    <span class="itemName">${item.name}</span>
    <button
      aria-label="Remove ${item.name}"
      value=${item.id}   
    >&times;</button>
    </li>
  `
    )
    .join('');

  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving to local storage.');
  localStorage.setItem('items', JSON.stringify(tasksList));
}

function restoreFromLocalStorage() {
  console.info('Restoring saved data from Local Storage Complete.');
  const restoredData = JSON.parse(localStorage.getItem('items'));
  tasksList.push(...restoredData);
  list.dispatchEvent(new CustomEvent('itemsUpdate'));
}

function deleteItem(id) {
  tasksList = tasksList.filter((task) => task.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdate'));
}

function markAsComplete(id) {
  const item = tasksList.find((task) => task.id === id);
  item.finished = !item.finished;
  list.dispatchEvent(new CustomEvent('itemsUpdate'));
}

shoppingForm.addEventListener('submit', submitHandler);
list.addEventListener('itemsUpdate', displayItems);
list.addEventListener('itemsUpdate', mirrorToLocalStorage);
list.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    deleteItem(parseInt(e.target.value));
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(parseInt(e.target.value));
  }
});

restoreFromLocalStorage();
