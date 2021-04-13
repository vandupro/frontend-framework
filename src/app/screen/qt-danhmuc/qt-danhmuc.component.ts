import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-qt-danhmuc',
  templateUrl: './qt-danhmuc.component.html',
  styleUrls: ['./qt-danhmuc.component.css']
})
export class QtDanhmucComponent implements OnInit {


  cates: Category[] = [];
  cateId: string = '';
  keyword: string = "";
  dataOfCategory: Array<any> = [];
  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      //this.cates = data;
      this.dataOfCategory = data.data;
      console.log(this.dataOfCategory)

    })

  }

  // updateKeyword(event: any){
  //   this.keyword = event.target.value.trim();
  // }
  search(event: any) {
    this.keyword = event.target.value.trim();
    this.categoryService.searchByName(this.keyword, true).subscribe(data => {
      this.cates = data;
    })
  }

  delete(item: Category) {
    if(confirm('bạn có chắc chắn xóa không?')){
      this.categoryService.deleteCategory(item.id).subscribe(data => {
        this.cates = this.cates.filter(c => c.id != item.id)
      });
    }
  }

  update(item: Category){
    
  }

}
