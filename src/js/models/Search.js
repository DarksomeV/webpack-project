export default class Search{
	constructor(query){
		this.query = query;
		this.result = {};
	}
//https://cors-anywhere.herokuapp.com/
	async getResult() {
		const key = '8843c04bc3db1345d7e603e6e53e0e11';
		try {
      // const res = await fetch(`${proxy}${api}/search?key=${key}&q=${this.query}`);
      const res = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      const data = await res.json();
      return this.result = data.recipes;
    } catch (e) {
      alert(e);
    }
	}
}