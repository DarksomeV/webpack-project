import { elements } from './base.js';

export const renderList = item => {
	const markup = `
	<li class="shopping__item" data-id="${item.id}">
	<p class="shopping__description">${item.ingredient}</p>
	<button class="shopping__delete btn-tiny">
	<svg>
	<use href="img/icons.svg#icon-circle-with-cross"></use>
	</svg>
	</button>
	</li>
	`;
	elements.shoppingList.insertAdjacentHTML("afterbegin", markup);
};