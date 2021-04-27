import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
import { ComicService } from 'src/app/services/comic.service';
@Component({
  selector: 'app-qt-tacgia',
  templateUrl: './qt-tacgia.component.html',
  styleUrls: ['./qt-tacgia.component.css']
})
export class QtTacgiaComponent implements OnInit {
  authorId: string = '';
  keyword: string = "";
  dataOfAuthor: Array<any> = [];
  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private comicService: ComicService,
    ) { }

  ngOnInit(): void {
    this.authorService.getAll().subscribe(data => {
      this.dataOfAuthor = data.data;
    })
  }

  search(event: any) {
    this.keyword = event.target.value.trim();
    if(this.keyword){
      this.authorService.searchByName(this.keyword).subscribe(data => {
        this.dataOfAuthor = data.data;
      })
    }else{
      this.authorService.getAll().subscribe(data => {
        this.dataOfAuthor = data.data;
      })
    }
  }

  delete(id: Number) {
    if (confirm('bạn có chắc chắn xóa không?')) {
      this.comicService.getAll().subscribe(data => {
        let comics = data.data;
        comics = comics.filter((item:any) => {
          return item.author_id == id;
        })
        if(comics.length){
          comics.forEach((value: any) => {
            this.comicService.deleteComic(value.id).subscribe(data => {
            })
          });
        }
      })
      this.authorService.deleteAuthor(id).subscribe(data => {
        this.dataOfAuthor = this.dataOfAuthor.filter((item) => {
          return item.id != id;
        })
      });
    }
  }

}
