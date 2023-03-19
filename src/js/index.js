// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { allBreeds } from './breeds-options.js';
import { randomImage, createObjectOfImages, localImages } from './random-photo';

const selectElement = document.getElementById('dogs');
const buttonRandomElement = document.getElementById('button-random');
let breedSelected;
const imageContainerElement = document.getElementById('image-container');

allBreeds();

selectElement.addEventListener('change', ev => {
  breedSelected = ev.target.value.toLowerCase();
});

buttonRandomElement.addEventListener('click', ev => {
  randomImage(breedSelected);
});

imageContainerElement.addEventListener('click', ev => {
  createObjectOfImages(ev.target, ev.target.previousElementSibling.src);
});

window.addEventListener('load', () => {
  localImages();
});
