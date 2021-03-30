import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-data/HEROES';
import { Hero } from '../../models/Hero';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  heroes:Array<Hero> = [];
  formObject: Hero = {
    id: 0,
    name: "",
    img: "",
    skills: []
  }

  fullName =  new FormControl('');
  money = 12345678;
  currentDate: Date = new Date();
  gender = 1;
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

  parentRemoveHero(data: Hero){
    this.heroes = this.heroes.filter(item => item.id!= data.id)
  }

  parentUpdateHero(data: Hero){
    let updateHero = {...data};
    this.formObject = updateHero
  }

}
