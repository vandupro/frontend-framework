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

}
