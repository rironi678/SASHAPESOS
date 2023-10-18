(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-two-open]'),
    closeModalBtn: document.querySelector('[data-modal-two-close]'),
    modal: document.querySelector('[data-modal-two]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-two');
    
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-three-open]'),
    closeModalBtn: document.querySelector('[data-modal-three-close]'),
    modal: document.querySelector('[data-modal-three]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-three');
    
  }
})();