import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-danhmuc',
  templateUrl: './new-danhmuc.component.html',
  styleUrls: ['./new-danhmuc.component.css']
})
export class NewDanhmucComponent implements OnInit {
  checkForNameInvalid = false;
  keyword: any = '';
  obj: any = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router) { }
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  });
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.obj = data.data;
    })
  }
  get f() { return this.profileForm.controls; }

  checkName(e: any) {
    this.keyword = e.target.value.trim().toLowerCase();
    let arr = this.obj.filter((item: any) => {
      return item.name.trim().toLowerCase() == this.keyword;
    })
    if (arr.length > 0) {
      this.checkForNameInvalid = true;
    } else {
      this.checkForNameInvalid = false;
    }
  }

  onSubmit() {
    if (!this.checkForNameInvalid) {
      this.categoryService.addNewCategory(this.profileForm.value).subscribe(data => {
        if (data != undefined) {
          this.router.navigate(['/admin/danh-muc'])
        }
      })
    }
  }
}
