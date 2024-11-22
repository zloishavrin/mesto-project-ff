// Открытие модального окна с формой
export const openModalWithForm = (modalElement, form, handler) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handler();
    closeModal(modalElement);
  });
  openModal(modalElement);
}

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
}

// Открытие модального окна
export const openModal = (modalElement) => {
  modalElement.classList.add("popup_is-opened");

  const buttonCloseModal = modalElement.querySelector(".popup__close");

  buttonCloseModal.addEventListener("click", handleClose(modalElement));
  modalElement.addEventListener("click", handleClose(modalElement));
  document.addEventListener("keydown", handleClose(modalElement));
}

// Обработчик закрытия модального окна
const handleClose = modalElement => (event) => {
  if (event.type === "keydown" && event.key !== "Escape") return;
  else if (event.type === "click" && event.target !== event.currentTarget)
    return;

  closeModal(modalElement);
}

// Закрытие модального окна
export const closeModal = (modalElement) => {
  modalElement.classList.remove("popup_is-opened");
  clearListeners(modalElement);
}

// Очищение слушателей
const clearListeners = (modalElement) => {
  const buttonCloseModal = modalElement.querySelector(".popup__content .popup__close");

  buttonCloseModal.removeEventListener("click", handleClose(modalElement));
  modalElement.removeEventListener("click", handleClose(modalElement));
  document.removeEventListener("keydown", handleClose(modalElement));
}