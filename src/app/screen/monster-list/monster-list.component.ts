import { Component, OnInit } from '@angular/core';
import { MONSTER } from '../../mock-data/monsters';
import { Monster } from '../../models/Monster';
@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  constructor() { }

  monsters:Array<Monster> = [];
  ngOnInit(): void {
  	this.monsters = MONSTER;
  }

}
