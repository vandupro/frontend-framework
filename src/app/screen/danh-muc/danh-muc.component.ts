import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent implements OnInit {
  cateId: string = '';
  cate: Category = new Category(0, '');
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }
  // ngOnInit(): void {
  //   const heroId = this.route.snapshot.paramMap.get('id');
  //   if (heroId) {
  //     this.cateId = heroId
  //     this.categoryService.findById(this.cateId).subscribe(data => {
  //       this.cate = data
  //     })
  //   }
  // }
  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.cateId = params.id;
      this.categoryService.findById(this.cateId).subscribe(data => {
        this.cate = data
        console.log(this.cate)
      })
    })

     
  }
  

}
