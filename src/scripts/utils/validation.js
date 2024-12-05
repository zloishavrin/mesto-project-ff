export const enableValidation = (validationConfig) => {
  const formElements = Array.from(document.querySelectorAll('form'));

  for(const formElement of formElements) {
    setValidationListeners(formElement, validationConfig);
  }
}

export const clearValidation = (formElement, validationConfig) => {
  const inputElements = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.buttonSelector);
  const errorElements = Array.from(formElement.querySelectorAll(validationConfig.errorSelector));

  for(const inputElement of inputElements) {
    inputElement.classList.remove(validationConfig.inputClassWithError);
  }
  for(const errorElement of errorElements) {
    errorElement.classList.add(validationConfig.errorClassHidden);
  }
  buttonElement.disabled = true;
}

const setValidationListeners = (formElement, validationConfig) => {
  const inputElements = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.buttonSelector);

  for(const inputElement of inputElements) {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, buttonElement, validationConfig);
    });
  }
}

const isValid = (formElement, inputElement, buttonElement, validationConfig) => {
  if(inputElement.validity.patternMismatch && inputElement.dataset.validationError) {
    inputElement.setCustomValidity(inputElement.dataset.validationError);
  }
  else {
    inputElement.setCustomValidity("");
  }

  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    buttonElement.disabled = true;
  }
  else {
    hideInputError(formElement, inputElement, validationConfig);
    buttonElement.disabled = false;
  }
}

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  
  inputElement.classList.add(validationConfig.inputClassWithError);
  errorElement.textContent = errorMessage;
  setTimeout(() => errorElement.classList.remove(validationConfig.errorClassHidden), 0);
}

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

  inputElement.classList.remove(validationConfig.inputClassWithError);
  errorElement.classList.add(validationConfig.errorClassHidden);
  setTimeout(() => errorElement.textContent = '', 0);
  errorElement.textContent = '';
}