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

  constructor(
    private categoryService: CategoryService,
    private router: Router) { }
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    //age: new FormControl(''),
  });
  //name: FormControl = new FormControl();
  ngOnInit(): void {
  }
  get f() { return this.profileForm.controls; }

  // createFormGroup() {
  //   return new FormControl({
  //     name: new FormControl('', [
  //       Validators.required
  //     ])
  //   })
  // }
  onSubmit(){
    this.categoryService.addNewCategory(this.profileForm.value).subscribe(data => {
      if(data != undefined){
        this.router.navigate(['/admin/danh-muc'])
      }
    })
  }
}
