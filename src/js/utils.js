const fetchData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
const createElement = (
  element,
  classes,
  typeContent,
  dataset,
  dataset2,
  dataset3
) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...classes);
  newElement.dataset.item = dataset;
  newElement.dataset.type = dataset2;
  newElement.dataset.category = dataset3;
  if (element !== 'img') {
    newElement.textContent = typeContent;
  } else {
    newElement.src = typeContent;
  }
  return newElement;
};

export { fetchData, createElement };
