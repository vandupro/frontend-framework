import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ComicService } from 'src/app/services/comic.service';
//import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  comicId: string = '';
  comic: any;
  comicRelated: Array<any> = [];
  category: any;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    // private authorService: AuthorService,
    private comicService: ComicService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comicId = params.id;
      this.comicService.findById(this.comicId).subscribe(data => {
        this.comic = data.data;
        this.categoryService.findById(this.comic.category.id).subscribe(data => {
          this.category = data.data;
          this.comicRelated = this.category.comics.filter((item:any)=> item.id != this.comicId)
          console.log(this.comicRelated);
        })
      })


    })
  }

}
