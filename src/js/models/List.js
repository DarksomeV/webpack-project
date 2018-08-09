import uniqid from 'uniqid';

export default class List {
	constructor(){
		this.items = [];
	}

	addItem(ingredient){
		const newItem={
			id: uniqid(),
			ingredient
		};

		this.items.push(newItem);
	}

	deleteItem(id){
		document.querySelector(`li.shopping__item[data-id=${id}]`).remove();
	}
};