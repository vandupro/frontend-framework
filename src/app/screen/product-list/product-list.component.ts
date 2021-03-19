import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-data/HEROES';
import { Hero } from '../../models/Hero';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  heroes:Array<Hero> = [];
  ngOnInit(): void {
  	this.heroes = HEROES;
  }

  removeHero(hero:Hero){
  	this.heroes = this.heroes.filter((x: Hero) => x != hero);
  }

  submitForm(event:any){
  	event.preventDefault();
  	let formData = new FormData(event.target);

  	let id = formData.get('id');
  	let nameProduct = formData.get('name-product');
  	let img = 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg';
  	if(nameProduct!= null){
  		let obj = {id: Number(id), name: nameProduct.toString(), img: img};
  		this.heroes.push(obj);
  	}
  }

}
