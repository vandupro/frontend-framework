import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
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
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.authorService.getAll().subscribe(data => {
      this.dataOfAuthor = data.data;
      //console.log(this.dataOfAuthor);
    })
  }

  search(e: any) {

  }

  delete(id: Number) {
    if (confirm('bạn có chắc chắn xóa không?')) {
      this.authorService.deleteAuthor(id).subscribe(data => {
        this.dataOfAuthor = this.dataOfAuthor.filter((item) => {
          return item.id != id;
        })
      });
    }
  }

}
