import { TABCONTENTS } from './template';
import DISHES from './dishes';

const LOADEAT = (() => {
  const FOOD = [...DISHES];
  const half = Math.ceil(FOOD.length / 2);
  const FIRSTHALF = FOOD.splice(0, half);
  const SECONDHALF = FOOD.splice(-half);

  const mainColumns = document.createElement('div');
  mainColumns.classList.add('columns');
  const left = document.createElement('div');
  left.classList.add('column', 'is-half', 'p-3');
  const right = document.createElement('div');
  right.classList.add('column', 'is-half', 'p-3');
  const innerLeftColumns = document.createElement('div');
  innerLeftColumns.classList.add('columns', 'is-centered');
  const innerRightColumns = document.createElement('div');
  innerRightColumns.classList.add('columns', 'is-centered');
  const innerLeftColumn = document.createElement('div');
  innerLeftColumn.classList.add('column', 'is-three-quarters', 'p-3');
  const innerRightColumn = document.createElement('div');
  innerRightColumn.classList.add('column', 'is-three-quarters', 'p-3');

  FIRSTHALF.forEach(dish => {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'mb-3', 'p-2');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const imageContainer = document.createElement('figure');
    imageContainer.classList.add('image', 'is-1by1');

    const image = document.createElement('img');
    image.setAttribute('src', dish.image);

    imageContainer.appendChild(image);
    cardImage.appendChild(imageContainer);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const mediaMain = document.createElement('div');
    mediaMain.classList.add('media');

    const mediaContent = document.createElement('div');
    mediaContent.classList.add('media-content');

    const mediaTitle = document.createElement('p');
    mediaTitle.classList.add('title', 'is-4');
    mediaTitle.textContent = dish.title;

    mediaContent.appendChild(mediaTitle);
    mediaMain.appendChild(mediaContent);

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerText = dish.body;

    cardContent.appendChild(mediaMain);
    cardContent.appendChild(content);

    card.appendChild(cardImage);
    card.appendChild(cardContent);

    innerLeftColumn.appendChild(card);
  });

  SECONDHALF.forEach(dish => {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'mb-3', 'p-2');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const imageContainer = document.createElement('figure');
    imageContainer.classList.add('image', 'is-1by1');

    const image = document.createElement('img');
    image.setAttribute('src', dish.image);

    imageContainer.appendChild(image);
    cardImage.appendChild(imageContainer);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const media = document.createElement('div');
    media.classList.add('media');

    const mediaContent = document.createElement('div');
    mediaContent.classList.add('media-content');

    const mediaTitle = document.createElement('p');
    mediaTitle.classList.add('title', 'is-4');
    mediaTitle.textContent = dish.title;

    mediaContent.appendChild(mediaTitle);
    media.appendChild(mediaContent);

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerText = dish.body;

    cardContent.appendChild(media);
    cardContent.appendChild(content);

    card.appendChild(cardImage);
    card.appendChild(cardContent);

    innerRightColumn.appendChild(card);
  });

  innerLeftColumns.appendChild(innerLeftColumn);
  innerRightColumns.appendChild(innerRightColumn);

  left.appendChild(innerLeftColumns);
  right.appendChild(innerRightColumns);

  mainColumns.appendChild(left);
  mainColumns.appendChild(right);

  TABCONTENTS.appendChild(mainColumns);
});

export default LOADEAT;