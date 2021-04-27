import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-update-danhmuc',
  templateUrl: './update-danhmuc.component.html',
  styleUrls: ['./update-danhmuc.component.css']
})
export class UpdateDanhmucComponent implements OnInit {
  cateId: string = '';
  cate: Category = new Category(0, '');
  dataEdit: any;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cateId = params.id;
      let n = Number(this.cateId);
      if (Number.isNaN(n)) {
        this.router.navigate(['/not-found']);
      }
      this.categoryService.findById(this.cateId).subscribe(data => {
        if (data.data.length == 0) {
          this.router.navigate(['/not-found']);
        } else {
          this.dataEdit = data.data;
          this.profileForm.setValue({
            name: this.dataEdit.name
          })
        }
      })
    })
  }
  profileForm = new FormGroup({
    name: new FormControl(this.cate.name, [
      Validators.required,
      Validators.minLength(4)
    ]),
  })
  get f() { return this.profileForm.controls; }
  onSubmit() {
    this.categoryService.update(this.profileForm.value, Number(this.cateId)).subscribe(data => {
      if (data != undefined) {
        this.router.navigate(['/admin/danh-muc']);
      }
    })
  }
}
