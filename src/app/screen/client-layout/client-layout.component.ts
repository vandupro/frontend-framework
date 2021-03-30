import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
	selector: 'app-client-layout',
	templateUrl: './client-layout.component.html',
	styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
	cates : Category[] = [];

	constructor(private categoryService: CategoryService) { }

	ngOnInit(): void {
		this.categoryService.getAll().subscribe(data => {
			console.log(data);
			this.cates = data;
		})
	}

}
