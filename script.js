let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

let btnCloseModal = document.querySelector('.close-modal');

let btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');

  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');

  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    {
      closeModal();
    }
  }
});
