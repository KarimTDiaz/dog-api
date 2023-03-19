import { fetchData, createElement } from './utils.js';
const selectElement = document.getElementById('dogs');

const breedsOptions = breeds => {
  const fragment = document.createDocumentFragment();
  Object.keys(breeds).forEach(key => {
    const capitalize = key.charAt(0).toUpperCase();
    const slice = key.slice(1);
    const breedsOptions = createElement('option', [], capitalize + slice, key);
    fragment.append(breedsOptions);
  });
  selectElement.append(fragment);
};

const allBreeds = async () => {
  const data = await fetchData('https://dog.ceo/api/breeds/list/all');
  breedsOptions(data.message);
};

export { allBreeds };
