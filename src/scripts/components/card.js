// Функция удаления карточки
export const deleteCard = (cardElement) => cardElement.remove();

// Функция лайка карточки
export const likeCard = (buttonLike) =>
  buttonLike.classList.toggle("card__like-button_is-active");

// Функция создания карточки
export const createCard = (card, cardTemplate, handlerImage) => {
  const { link: linkCard, name: nameCard } = card;

  const element = cardTemplate.content
    .querySelector(".places__item")
    .cloneNode(true);

  const image = element.querySelector(".card__image");
  const title = element.querySelector(".card__description .card__title");
  const buttonDelete = element.querySelector(".card__delete-button");
  const buttonLike = element.querySelector(".card__like-button");

  image.src = linkCard;
  image.alt = nameCard;
  title.textContent = nameCard;

  buttonDelete.addEventListener("click", () => deleteCard(element));
  buttonLike.addEventListener("click", () => likeCard(buttonLike));
  image.addEventListener("click", handlerImage);

  return element;
}