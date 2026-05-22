const galleryImages =
  document.querySelectorAll('.gallery__image');

const modal =
  document.getElementById('imageModal');

const modalImage =
  document.getElementById('modalImage');

const closeModal =
  document.getElementById('closeModal');

/* OPEN MODAL */

galleryImages.forEach(image => {

  image.addEventListener('click', () => {

    modal.classList.add('active');

    modalImage.src = image.src;

    modalImage.alt = image.alt;

    document.body.style.overflow = 'hidden';

  });

});

/* CLOSE */

function closeImageModal() {

  modal.classList.remove('active');

  document.body.style.overflow = '';

}

closeModal.addEventListener(
  'click',
  closeImageModal
);

/* CLICK OUTSIDE */

modal.addEventListener('click', (e) => {

  if (
    e.target.classList.contains('image-modal') ||
    e.target.classList.contains('image-modal__overlay')
  ) {
    closeImageModal();
  }

});

/* ESC KEY */

document.addEventListener('keydown', (e) => {

  if (
    e.key === 'Escape' &&
    modal.classList.contains('active')
  ) {
    closeImageModal();
  }

});