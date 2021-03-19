import { Component, OnInit } from '@angular/core';
import { HeroData } from '../../mock-data/heros';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  heroes:any = [];
  ngOnInit(): void {
  	this.heroes = HeroData;
  }

  removeHero(hero:any){
  	this.heroes = this.heroes.filter((x: any) => x.id != hero);
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
