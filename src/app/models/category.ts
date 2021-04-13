export class Category {
	id: Number;
	name: string;
	comics?: Array<any>;
	constructor(id: Number, name: string, comics?: Array<any>){
		this.id= id;
		this.name = name;
		this.comics = comics
	}
}
