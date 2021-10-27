const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleWealthBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 2000000),
  };

  addData(newUser);
}

function addData(user) {
  data.push(user);

  updateDOM();
}

function updateDOM() {
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  data.forEach((element) => {
    const el = document.createElement('div');
    el.classList.add('person');
    el.innerHTML = `<strong>${element.name}</strong> ${formatMoney(
      element.money
    )}`;
    main.appendChild(el);
  });
}

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

function onlyMillionaires() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

function sortUsers() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

function calculateWealth() {
  const total = data.reduce((sum, user) => (sum += user.money), 0);

  const sum = document.createElement('p');
  sum.classList.add('sum');
  sum.innerHTML = `<strong>Total</strong> ${formatMoney(total)}`;

  main.appendChild(sum);
}

addUserBtn.addEventListener('click', getRandomUser);
doubleWealthBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', onlyMillionaires);
sortBtn.addEventListener('click', sortUsers);
calculateBtn.addEventListener('click', calculateWealth);
