import {api, key, proxy} from '../config.js';

export default class Recipe{
	constructor(id){
		this.id=id;
		this.result = {};
	}
	async getRecipe() {
		try{
			const res = await fetch(`${proxy}${api}/get?key=${key}&rId=${this.id}`);
			const data = await res.json();
			this.result = data.recipe;
			console.log(data);
		} catch(error) {
			alert(error);
		}
	}
};