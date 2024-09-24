document.addEventListener("DOMContentLoaded", () => {
  // для мобільного меню
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobile-open]"),
      closeModalBtn: document.querySelector("[data-mobile-close]"),
      modal: document.querySelector("[data-mobile]"),
    };

    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);
    } else {
      console.error("Mobile menu elements are missing.");
    }

    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();

  // для відкриття основного модального вікна
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };

    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);
    } else {
      console.error("Modal elements are missing.");
    }

    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();
});