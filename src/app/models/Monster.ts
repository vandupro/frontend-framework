
export class Monster{
	id: Number;
	name: string;
	image: string;
	detail: string;
	spells?: Array<any>

	constructor(id: Number, name: string, image: string, detail: string, spells: Array<any> = []){
		this.id = id;
		this.name = name;
		this.image = image;
		this.detail = detail;
		this.spells = spells
	}
}