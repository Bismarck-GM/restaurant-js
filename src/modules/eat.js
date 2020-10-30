import { TABCONTENTS } from "./template";
import { DISHES } from "./dishes";

const LOADEAT = (() => {
	TABCONTENTS.innerHTML = '';
	const half = Math.ceil(DISHES.length / 2);
	const FIRSTHALF = DISHES.splice(0, half)
	const SECONDHALF = DISHES.splice(-half)

	let mainColumns = document.createElement('div');
	mainColumns.classList.add('columns');
	let left = document.createElement('div');
	left.classList.add('column', 'is-half', 'p-3');
	let right = document.createElement('div');
	right.classList.add('column', 'is-half', 'p-3');
	let innerLeftColumns = document.createElement('div');
	innerLeftColumns.classList.add('columns', 'is-centered');
	let innerRightColumns = document.createElement('div');
	innerRightColumns.classList.add('columns', 'is-centered');
	let innerLeftColumn = document.createElement('div');
	innerLeftColumn.classList.add('column', 'is-three-quarters', 'p-3');
	let innerRightColumn = document.createElement('div');
	innerRightColumn.classList.add('column', 'is-three-quarters', 'p-3');


	FIRSTHALF.forEach(dish => {
		let card = document.createElement('div');
		card.classList.add('card', 'mt-3', 'mb-3', 'p-2');

		let cardImage = document.createElement('div');
		cardImage.classList.add('card-image');

		let imageContainer = document.createElement('figure');
		imageContainer.classList.add('image', 'is-1by1');

		let image = document.createElement('img');
		image.setAttribute('src', dish.image);
		
		imageContainer.appendChild(image);
		cardImage.appendChild(imageContainer);

		let cardContent = document.createElement('div');
		cardContent.classList.add('card-content');

		let mediaMain = document.createElement('div');
		mediaMain.classList.add('media');

		let mediaContent = document.createElement('div');
		mediaContent.classList.add('media-content');

		let mediaTitle = document.createElement('p');
		mediaTitle.classList.add('title', 'is-4');
		mediaTitle.textContent = dish.title;

		mediaContent.appendChild(mediaTitle);
		mediaMain.appendChild(mediaContent);

		let content = document.createElement('div');
		content.classList.add('content');
		content.innerText = dish.body;

		cardContent.appendChild(mediaMain);
		cardContent.appendChild(content);

		card.appendChild(cardImage);
		card.appendChild(cardContent);

		innerLeftColumn.appendChild(card);
	});

	SECONDHALF.forEach(dish => {
		let card = document.createElement('div');
		card.classList.add('card', 'mt-3', 'mb-3', 'p-2');

		let cardImage = document.createElement('div');
		cardImage.classList.add('card-image');

		let imageContainer = document.createElement('figure');
		imageContainer.classList.add('image', 'is-1by1');

		let image = document.createElement('img');
		image.setAttribute('src', dish.image);
		
		imageContainer.appendChild(image);
		cardImage.appendChild(imageContainer);

		let cardContent = document.createElement('div');
		cardContent.classList.add('card-content');

		let media = document.createElement('div');
		media.classList.add('media');

		let mediaContent = document.createElement('div');
		mediaContent.classList.add('media-content');

		let mediaTitle = document.createElement('p');
		mediaTitle.classList.add('title', 'is-4');
		mediaTitle.textContent = dish.title;

		mediaContent.appendChild(mediaTitle);
		media.appendChild(mediaContent);

		let content = document.createElement('div');
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

export{LOADEAT};