import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent implements OnInit {
  cateId: string = '';
  comics: any;
  category: any;
  message: string = '';
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.cateId = params.id;
        this.categoryService.findById(this.cateId).subscribe(data => {
          this.category = data.data;
          this.comics = this.category.comics;
          if(!this.comics.length){
            this.message = "Thể loại này hiện chưa có truyện!";
          }else{
            this.message = "";
          }
        })
        
      })
    }


}
