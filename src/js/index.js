// Global app controller
import Search from './models/Search.js';
import * as searchView from './view/searchView.js';
import {elements, renderLoader, clearLoader} from './view/base';

/** Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Favorite recipe object
 * */
const state = {};
;

const controlSearch = async () => {
//1.получать данные из вью
const query = searchView.getSearchInputValue();


if (query){
	//2.создаем новый объект search
	state.search = new Search(query);


	//3.Подготовим UI для результата
	searchView.clearForm();
	searchView.clearResult();
	renderLoader(elements.searchRes);

	//4. Делаем поиск
	await state.search.getResult();
		console.log(state.search.result);

		//5.Render result

		searchView.renderResult(state.search.result);
		clearLoader();
}
};
//set events
//elements.formSearch.addEventListener('submit', e => {
	document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e =>{
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto);
		searchView.clearResult();
		searchView.renderResult(state.search.result, goToPage)
	}
});