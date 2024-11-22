// Функция удаления карточки
export const deleteCard = (cardElement) => cardElement.remove();

// Функция лайка карточки
export const likeCard = (likeButton) => likeButton.classList.toggle("card__like-button_is-active");

// Функция создания карточки
export const createCard = (card, cardTemplate) => {
  const { link: linkCard, name: nameCard } = card;

  const element = cardTemplate.content
    .querySelector(".places__item")
    .cloneNode(true);

  const image = element.querySelector(".card__image");
  const title = element.querySelector(".card__title");
  const deleteButton = element.querySelector(".card__delete-button");
  const likeButton = element.querySelector(".card__like-button");

  image.src = linkCard;
  image.alt = nameCard;
  title.textContent = nameCard;

  deleteButton.addEventListener("click", () => deleteCard(element));
  likeButton.addEventListener("click", () => likeCard(likeButton));

  return element;
};
