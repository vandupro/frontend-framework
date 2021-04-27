import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	comicId: string = '';
  cateId: any = 0;
  authorId: any = 0;
  keyword: string = "";
  totalPage: any = 0;
  arr: any = [];
  current: any = 1;
  start: any = 1;
  dataOfComic: Array<any> = [];
  constructor(
    private comicService: ComicService,
  ) { }

  ngOnInit(): void {
    this.comicService.getAll(this.cateId, this.authorId, this.keyword, 1, 4).subscribe(data => {
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
    this.comicService.getAll(this.cateId, this.authorId, this.keyword, 1, 4).subscribe(data => {
      this.dataOfComic = data.data;
      this.totalPage = Math.ceil(data.meta.total / data.meta.perPage);
      this.arr = this.setTotalPage(this.totalPage);
    })
  }

  paginate(id: any) {
    this.current = id;
    this.comicService.getAll(this.cateId, this.authorId, this.keyword, id,4).subscribe(data => {
      this.dataOfComic = data.data;
      this.start = data.start;
    })
  }
}
