import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-qt-comic',
  templateUrl: './qt-comic.component.html',
  styleUrls: ['./qt-comic.component.css']
})
export class QtComicComponent implements OnInit {
  // comicId: string = '';
  cateId: any = 0;
  authorId: any = 0;
  cateIdOrAuthorForAll: any = 0;
  totalPage: any = 0;
  arr: any = [];
  current: any = 1;
  start: any = 1;
  
  keyword: string = "";
  dataOfComic: Array<any> = [];
  dataOfAuthor: Array<any> = [];
  dataOfCategory: Array<any> = [];
  constructor(
    private comicService: ComicService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authorService.getAll().subscribe(data => {
      this.dataOfAuthor = data.data;
    })
    this.categoryService.getAll().subscribe(data => {
      this.dataOfCategory = data.data;
    })
    this.comicService.getAll().subscribe(data => {
      this.dataOfComic = data.data;
      this.totalPage = Math.ceil(data.meta.total / data.meta.perPage);
      this.current = data.meta.currentPage;
      this.arr = this.setTotalPage(this.totalPage);
    })
  }

  setTotalPage(totalPage: Number) {
    let ar = [];
    for (let i = 0; i < totalPage; i++) {
      ar[i] = i;
    }
    return ar;
  }
  search(event: any) {
    this.keyword = event.target.value.trim();
    this.comicService.getAll(this.cateId, this.authorId, this.keyword).subscribe(data => {
      this.dataOfComic = data.data;
      this.totalPage = Math.ceil(data.meta.total / data.meta.perPage);
      this.arr = this.setTotalPage(this.totalPage);
    })
  }

  filterByCategory(e: any) {
    this.cateId = Number(e.target.value);
    this.comicService.getAll(this.cateId, this.authorId, this.keyword).subscribe(data => {
      this.dataOfComic = data.data;
      this.totalPage = Math.ceil(data.meta.total / data.meta.perPage);
      this.arr = this.setTotalPage(this.totalPage);
    })
    
  }

  filterByAuthor(e: any) {
    this.authorId = Number(e.target.value);
    this.comicService.getAll(this.cateId, this.authorId, this.keyword).subscribe(data => {
      this.dataOfComic = data.data;
      this.totalPage = Math.ceil(data.meta.total / data.meta.perPage);
      
      this.arr = this.setTotalPage(this.totalPage);
    })
    
  }

  delete(id: Number) {
    if (confirm('bạn có chắc chắn xóa không?')) {
      this.comicService.deleteComic(id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }

  paginate(id: any) {
    this.current = id;
    this.comicService.getAll(this.cateId, this.authorId, this.keyword, id).subscribe(data => {
      this.dataOfComic = data.data;
      this.start = data.start;
    })
  }

}
