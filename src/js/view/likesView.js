import { elements } from "./base.js";

export const addRecipe = (recipe) => {
  const markup = `
  <li>
  <a class="likes__link" href="${recipe.hash}">
  <figure class="likes__fig">
  <img src="${recipe.img}" alt="${recipe.title}">
  </figure>
  <div class="likes__data">
  <h4 class="likes__name">${recipe.title}</h4>
  <p class="likes__author">${recipe.publisher}</p>
  </div>
  </a>
  </li>
  `;

  elements.likesList.insertAdjacentHTML("afterbegin", markup);
};