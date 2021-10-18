function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }
  // get all elemnts we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton  = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Opening Modal...');

    if (modal.matches('.open')) {
      console.info('Modal already open');
      return;
    }
    modal.classList.add('open');

    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');

    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    //update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  function handleImageClick(e) {
    showImage(e.currentTarget);
  }

  images.forEach((image) => image.addEventListener('click', handleImageClick));

  images.forEach((image) =>
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    })
  );

  modal.addEventListener('click', handleClickOutside);
}

//Use them on a page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
