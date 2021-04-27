import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-qt-danhmuc',
  templateUrl: './qt-danhmuc.component.html',
  styleUrls: ['./qt-danhmuc.component.css']
})
export class QtDanhmucComponent implements OnInit {


  cateId: string = '';
  keyword: string = "";
  dataOfCategory: Array<any> = [];
  constructor(
    private categoryService: CategoryService,
    private comicService: ComicService,
    private route: ActivatedRoute,

    ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.dataOfCategory = data.data;
    })

  }

  search(event: any) {
    this.keyword = event.target.value.trim();
    if(this.keyword){
      this.categoryService.searchByName(this.keyword).subscribe(data => {
        this.dataOfCategory = data.data;
      })
    }else{
      this.categoryService.getAll().subscribe(data => {
        this.dataOfCategory = data.data;
      })
    }
  }

  
  delete(id: Number) {
    if(confirm('bạn có chắc chắn xóa không?')){
      this.comicService.getAll().subscribe(data => {
        let comics = data.data;
        comics = comics.filter((item:any) => {
          return item.cate_id == id;
        })
        if(comics.length){
          comics.forEach((value: any) => {
            this.comicService.deleteComic(value.id).subscribe(data => {
            })
          });
        }
      })
      this.categoryService.deleteCategory(id).subscribe(data => {
        this.dataOfCategory = this.dataOfCategory.filter((item) => {
          return item.id != id;
        })
      });
    }
  }

}
