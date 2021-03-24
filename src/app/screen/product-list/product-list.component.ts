import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-data/HEROES';
import { Hero } from '../../models/Hero';
import { Skill } from '../../models/Skill';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  heroes:Array<Hero> = [];
  // skills: Array<Skill> = [
  // {id: 1, name: 'java'},
  // {id: 2, name: 'php'},
  // {id: 3, name: 'c#'}

  // ]
  
  ngOnInit(): void {
  	this.heroes = HEROES;
  }

  removeHero(hero:Hero){
  	this.heroes = this.heroes.filter((x: Hero) => x != hero);
  }

  // updateHero(hero: Hero){
  //   let updateHero = {...hero};
  //   this.formObject = updateHero;
  // }

  // checkSkill(skillID: Number): Boolean{
  //   let lstSkill = this.formObject.skills == null ? [] : this.formObject.skills;
  //   let existedIndex = lstSkill.findIndex(item => item.id == skillID);
  //   return existedIndex != -1;
  // }

  // updateFormObjectSkill(skill: Skill, event:any){
  //   let lstSkill = this.formObject.skills == null ? [] : this.formObject.skills;
  //   let existedIndex = lstSkill.findIndex(item => item.id == skill.id);
  //   if(event.target.checked && existedIndex == -1){
  //     this.formObject.skills.push(skill);
  //   }
  //   if(event.target.checked == false && existedIndex != -1){
  //     this.formObject.skills = this.formObject.skills?.filter(item => item.id != skill.id);
  //   }


  // }

  // updateFormObjectAttribute(attributeName: string, event: any){
  //   switch (attributeName){
  //     case 'id':
  //       this.formObject.id = Number(event.target.value)
  //       break;
  //     case 'name':
  //       this.formObject.name = event.target.value
  //       break;
      
  //   }
  // }
  // submitForm(event:any){
  // 	event.preventDefault();
  //   let index = this.heroes.findIndex(item => item.id == this.formObject.id);
  //   if(index == -1){
  //     this.heroes.push({...this.formObject});
  //   }else{
  //     this.heroes[index] = {...this.formObject};
  //   }
  //   this.formObject = {
  //     id: 0,
  //     name: "",
  //     img: "",
  //     skills: []
  //   }
    
  // 	// let formData = new FormData(event.target);
  //   //console.log(this.formObject);
  // 	// let id = formData.get('id');
  // 	// let nameProduct = formData.get('name-product');
  // 	// let img = 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg';
  // 	// if(nameProduct!= null){
  // 	// 	let obj = {id: Number(id), name: nameProduct.toString(), img: img};
  // 	// 	this.heroes.push(obj);
  // 	//}
  // }

}
