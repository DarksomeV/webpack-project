export default class Likes {
	constructor() {
		this.recipes = [];
	}

	saveRecipe(recipe) {
		this.recipes.push(recipe);
		localStorage.setItem(recipe.title, JSON.stringify(recipe));
	}
}