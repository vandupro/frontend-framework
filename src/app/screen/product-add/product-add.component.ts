import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/Skill';
import { SKILLS } from '../../mock-data/SKILL';
import { Hero } from '../../models/Hero';
@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
	skills: Array<Skill> = [];
	

	constructor() { }

	ngOnInit(): void {
		this.skills = SKILLS;
	}
	submitForm(event:any){
		event.preventDefault();
  	let formData = new FormData(event.target);
  	let id = formData.get('id');
  		let obj = {
  			id: Number(id), 
  			name: `${formData.get('name')}`, 
  			img: `${formData.get('image')}`
  		}
  	console.log(obj);
  }
}
