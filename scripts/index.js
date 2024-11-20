// Темплейт карточки
const cardTemplate = document.querySelector('#card-template');

// DOM узлы
const placesList = document.querySelector('.places__list');

// Функция удаления карточки
const deleteCard = (cardElement) => cardElement.remove();

// Функция создания карточки
const createCard = (card) => {
  const { link: linkCard, name: nameCard } = card;

  const element = cardTemplate.content
    .querySelector('.places__item')
    .cloneNode(true);
  
  const image = element.querySelector('.card__image');
  const title = element.querySelector('.card__title');
  const deleteButton = element.querySelector('.card__delete-button');

  image.src = linkCard;
  image.alt = nameCard;
  title.textContent = nameCard;

  deleteButton.addEventListener('click', () => deleteCard(element));

  return element;
}

// Вывести карточки на страницу
for(const card of initialCards) {
  const cardElement = createCard(card);
  placesList.append(cardElement);
}