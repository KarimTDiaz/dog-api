import { fetchData, createElement } from './utils.js';

const imageContainerElement = document.getElementById('image-container');
const LS = localStorage;
let IMAGES = [];

const createImage = image => {
  const fragment = document.createDocumentFragment();
  const imageContainer = createElement('div', []);
  const randomImage = createElement('img', ['gallery__item'], image);
  const saveButton = createElement('button', [], 'Save');
  saveButton.addEventListener('click', () => {
    saveButton.textContent = 'Unsave';
  });
  imageContainer.append(randomImage, saveButton);
  fragment.append(imageContainer);
  imageContainerElement.append(fragment);
};

const createSavedImages = images => {
  const fragment = document.createDocumentFragment();
  images.forEach(image => {
    const imageContainer = createElement('div', []);
    const randomImage = createElement('img', ['gallery__item'], image);
    const saveButton = createElement('button', [], 'Unsave');
    saveButton.addEventListener('click', () => {
      saveButton.textContent = 'Save';
    });
    imageContainer.append(randomImage, saveButton);
    fragment.append(imageContainer);
    imageContainerElement.append(fragment);
  });
};

const randomImage = async breed => {
  const data = await fetchData(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  createImage(data.message);
};

const localImages = images => {
  IMAGES = JSON.parse(LS.getItem('localImages'));
  createSavedImages(IMAGES);
};

const createObjectOfImages = (button, image) => {
  if (button.textContent === 'Unsave') {
    IMAGES.push(image);
  } else {
    IMAGES.filter(item => item !== button.previousElementSibling.src);
  }
  LS.setItem('localImages', JSON.stringify(IMAGES));
};

export { randomImage, createObjectOfImages, localImages };
