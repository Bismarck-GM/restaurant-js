import { TABCONTENTS } from './template';

const LOADHOME = (() => {
  const container = document.createElement('div');
  container.classList.add('columns');
  const left = document.createElement('div');
  left.classList.add('column', 'is-9', 'content');
  const title = document.createElement('h1');
  title.textContent = 'Everything the average programmer needs';
  const intro = document.createElement('p');
  intro.textContent = "Welcome to Code Eats! Loop through our tabs to find what you're needing at this point... if not sure start from the next tab. Good luck in your journey programmer!";
  left.appendChild(title, intro);
  left.appendChild(intro);

  const right = document.createElement('div');
  right.classList.add('column', 'is-3');
  const figure = document.createElement('figure');
  figure.classList.add('image', 'is-square');
  const image = document.createElement('img');
  image.setAttribute('src', 'https://www.spacesworks.com/wp-content/uploads/2016/06/coding-in-the-classroom.png');
  figure.appendChild(image);
  right.appendChild(figure);

  container.appendChild(left);
  container.appendChild(right);
  TABCONTENTS.appendChild(container);
});

export default LOADHOME;