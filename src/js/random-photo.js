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
  imageContainerElement.innerHTML = '';
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

const createObjectOfImages = (button, image) => {
  console.log(button);
  if (button.textContent === 'Unsave') {
    IMAGES.push(image);
  } else {
    IMAGES = IMAGES.filter(item => item !== image);
    createSavedImages(IMAGES);
  }

  LS.setItem('localImages', JSON.stringify(IMAGES));
};
const localImages = () => {
  IMAGES = JSON.parse(LS.getItem('localImages'));
  if (!IMAGES) {
    IMAGES = [];
  }
  createSavedImages(IMAGES);
};
export { randomImage, createObjectOfImages, localImages };
