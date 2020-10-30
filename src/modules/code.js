import { TABCONTENTS } from './template';

const LOADCODE = (() => {
  const mainColumns = document.createElement('div');
  mainColumns.classList.add('columns', 'is-centered');
  const column = document.createElement('div');
  column.classList.add('column', 'is-half', 'has-text-centered');

  const image = document.createElement('img');
  image.setAttribute('src', 'https://i.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.webp');

  const phrase = document.createElement('h1');
  phrase.classList.add('is-size-1');
  phrase.innerText = 'Just do it!';

  column.appendChild(image);
  column.appendChild(phrase);
  mainColumns.appendChild(column);


  TABCONTENTS.appendChild(mainColumns);
});

export default LOADCODE;