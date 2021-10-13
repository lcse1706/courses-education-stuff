const buttons = document.querySelectorAll('button');

const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleButton(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');

  // grab the image source !!!

  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  // populate the modal with ne info
  modalInner.innerHTML = `
     <img width='600' height='600' src="${imgSrc.replace(
       '200',
       '600'
     )}" alt="${name}"/>
     <p>${desc}</p>
    `;
  //show the modal
  modalOuter.classList.add('open');
}

buttons.forEach((button) => {
  button.addEventListener('click', handleButton);
});

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (e) {
  const isOutside = e.target.closest('.modal-inner');

  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
