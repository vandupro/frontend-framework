import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
@Component({
  selector: 'app-qt-comic',
  templateUrl: './qt-comic.component.html',
  styleUrls: ['./qt-comic.component.css']
})
export class QtComicComponent implements OnInit {
  comicId: string = '';
  keyword: string = "";
  dataOfComic: Array<any> = [];
  constructor(
    private comicService: ComicService,
  ) { }

  ngOnInit(): void {
    this.comicService.getAll().subscribe(data => {
      this.dataOfComic = data.data;
      console.log(this.dataOfComic);
    })
  }

  search(e: any){

  }

  delete(id: Number) {
    if(confirm('bạn có chắc chắn xóa không?')){
      
      this.comicService.deleteComic(id).subscribe(data => {
        this.dataOfComic = this.dataOfComic.filter((item) => {
          return item.id != id;
        })
      });
    }
  }

}
