import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../models/Hero';
@Component({
  selector: 'app-hero-init',
  templateUrl: './hero-init.component.html',
  styleUrls: ['./hero-init.component.css']
})
export class HeroInitComponent implements OnInit {
	@Input('hero-data') heroData: Hero;
	@Output() deleted = new EventEmitter<Hero>();

	@Output() updated = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit(): void {
  }

  removeHero(){
  	console.log('hello remove component');
  	this.deleted.emit(this.heroData);
  }

  updateHero(){
  	this.updated.emit(this.heroData);
  }
}
