// Открытие модального окна с формой
export const openModalWithForm = (modalElement, form, handler) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handler();
    closeModal(modalElement);
  });
  openModal(modalElement);
};

// Открытие модального окна с изображением
export const openModalWithImage = (modalElement, card) => {
  const imageModal = modalElement.querySelector(
    ".popup__content .popup__image"
  );
  const captionModal = modalElement.querySelector(
    ".popup__content .popup__caption"
  );

  imageModal.src = card.link;
  captionModal.textContent = card.name;

  openModal(modalElement);
};

// Открытие модального окна
export const openModal = (modalElement) => {
  modalElement.classList.add("popup_is-opened");

  const closeModalButton = modalElement.querySelector(".popup__close");

  closeModalButton.addEventListener("click", handleClose);
  modalElement.addEventListener("click", handleClose);
  document.addEventListener("keydown", handleClose);
};

// Обработчик закрытия модального окна
const handleClose = (event, modalElement) => {
  if (event.type === "keydown" && event.key !== "Escape") return;
  else if (event.type === "click" && event.target !== event.currentTarget)
    return;

  closeModal(modalElement);
};

// Закрытие модального окна
export const closeModal = (modalElement) => {
  modalElement.classList.remove("popup_is-opened");
  clearListeners(modalElement);
};

// Очищение слушателей
const clearListeners = (modalElement) => {
  const closeModalButton = modalElement.querySelector(".popup__close");

  closeModalButton.removeEventListener("click", handleClose);
  modalElement.removeEventListener("click", handleClose);
  document.removeEventListener("keydown", handleClose);
};