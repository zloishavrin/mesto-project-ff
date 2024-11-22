import '../pages/index.css';
import initialCards from './cards';
import { createCard } from './card';
import { openModal, openModalWithImage, openModalWithForm } from './modal';

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template");
// Контейнер карточек
const placesList = document.querySelector(".places__list");

// Кнопка добавления карточек
const addCardButton= document.querySelector(".profile__add-button");
// Кнопка редактирования профиля
const editProfileButton = document.querySelector(".profile__edit-button");

// Модальное окно добавления карточек
const modalAddCard = document.querySelector(".popup_type_new-card");
// Модальное окно редактирования профиля
const modalEditProfile = document.querySelector(".popup_type_edit");
// Модальное окно просмотра карточки
const modalViewCard = document.querySelector(".popup_type_image");

// Форма редактирования профиля
const editProfileForm = modalEditProfile.querySelector(".popup__content .popup__form");
const nameInputProfileForm = editProfileForm.querySelector("input[name=name]");
const descriptionInputProfileForm = editProfileForm.querySelector("input[name=description]");

// Элементы профиля
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Открытие модального окна добавления карточки
addCardButton.addEventListener("click", () => openModal(modalAddCard));

// Вывод карточек на страницу
for (const card of initialCards) {
  const cardElement = createCard(card, cardTemplate);
  const imageCard = cardElement.querySelector(".card__image");

  // Открытие модального окна просмотра карточки
  imageCard.addEventListener("click", () => openModalWithImage(modalViewCard, card));
  placesList.append(cardElement);
}

// Редактирование профиля
const editProfileFormHandler = () => {
  profileName.textContent = nameInputProfileForm.value;
  profileDescription.textContent = descriptionInputProfileForm.value;
}

// Открытие модального окна редактирования профиля
editProfileButton.addEventListener("click", () => {
  nameInputProfileForm.value = profileName.textContent;
  descriptionInputProfileForm.value = profileDescription.textContent;
  openModalWithForm(modalEditProfile, editProfileForm, editProfileFormHandler);
});