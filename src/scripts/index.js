import "../pages/index.css";
import initialCards from "./cards";
import { createCard } from "./components/card";
import { openModalWithImage, openModalWithForm } from "./components/modal";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template");
// Контейнер карточек
const listPlaces = document.querySelector(".places__list");

// Кнопка добавления карточек
const buttonAddCard = document.querySelector(".profile__add-button");
// Кнопка редактирования профиля
const buttonEditProfile = document.querySelector(".profile__edit-button");

// Модальное окно добавления карточек
const modalAddCard = document.querySelector(".popup_type_new-card");
// Модальное окно редактирования профиля
const modalEditProfile = document.querySelector(".popup_type_edit");
// Модальное окно просмотра карточки
const modalViewCard = document.querySelector(".popup_type_image");

// Форма редактирования профиля
const formEditProfile = modalEditProfile.querySelector(
  ".popup__content .popup__form"
);
const inputNameProfileForm = formEditProfile.querySelector("input[name=name]");
const inputDescriptionProfileForm = formEditProfile.querySelector(
  "input[name=description]"
);

// Форма добавления карточки
const formAddCard = modalAddCard.querySelector(".popup__content .popup__form");
const inputNameAddCardForm = formAddCard.querySelector(
  "input[name=place-name]"
);
const inputLinkAddCardForm = formAddCard.querySelector("input[name=link]");

// Элементы профиля
const nameProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");

// Вывод карточек на страницу
for (const card of initialCards) {
  const cardElement = createCard(card, cardTemplate, () =>
    openModalWithImage(modalViewCard, card)
  );
  listPlaces.append(cardElement);
}

// Открытие модального окна редактирования профиля
buttonEditProfile.addEventListener("click", () => {
  inputNameProfileForm.value = nameProfile.textContent;
  inputDescriptionProfileForm.value = descriptionProfile.textContent;
  openModalWithForm(modalEditProfile, formEditProfile, formEditProfileHandler);
});

// Открытие модального окна добавления карточки
buttonAddCard.addEventListener("click", () => {
  inputNameAddCardForm.value = "";
  inputLinkAddCardForm.value = "";
  openModalWithForm(modalAddCard, formAddCard, formAddCardHandler);
});

// Редактирование профиля
const formEditProfileHandler = () => {
  nameProfile.textContent = inputNameProfileForm.value;
  descriptionProfile.textContent = inputDescriptionProfileForm.value;
}

// Добавление карточки
const formAddCardHandler = () => {
  const card = {
    name: inputNameAddCardForm.value,
    link: inputLinkAddCardForm.value,
  };

  const cardElement = createCard(card, cardTemplate, () =>
    openModalWithImage(modalViewCard, card)
  );
  listPlaces.prepend(cardElement);
}