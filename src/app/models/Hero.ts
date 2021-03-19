import {Skill} from './Skill';
export class Hero{
	id: Number;
	name: string;
	img: string;
	skills?: Array<any>;
	constructor(id: Number, name: string, img: string, skills: Array<any> = []){
		this.id = id;
		this.name = name;
		this.img = img;
		this.skills = skills
	}
}