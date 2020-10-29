import { TABCONTENTS } from "./template";

const LOADHOME = (() => {
    let container = document.createElement('div');
    container.classList.add('columns');
    let left = document.createElement('div');
    left.classList.add('column', 'is-9', 'content');
    let title = document.createElement('h1');
    title.textContent = "Everything the average programmer needs";
    let intro = document.createElement('p');
    intro.textContent = "Welcome to Code Eats! Loop through our tabs to find what you're needed at this point... if not sure start from the next tab. Good luck in your journey programmer!"
    left.appendChild(title, intro);
    left.appendChild(intro);

    let right = document.createElement('div');
    right.classList.add('column', 'is-3');
    let figure = document.createElement('figure');
    figure.classList.add('image', 'is-square');
    let image = document.createElement('img');
    image.setAttribute('src','https://lh3.googleusercontent.com/proxy/ALpTXTLwmlWC9ZndPnCxc0GWbVd6BmdE1D34DP3b8ixMg5I7TkD92aD7bluOCBDU3qw8LuFkg4urRWj8nUUjgWCHddTfUhI_MM9oVijAIAO25xVw3QWfajsqDuX3HE_e');
    figure.appendChild(image);
    right.appendChild(figure);

    container.appendChild(left);
    container.appendChild(right);
    TABCONTENTS.appendChild(container);
});

export{LOADHOME}