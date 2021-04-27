import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-new-tacgia',
  templateUrl: './new-tacgia.component.html',
  styleUrls: ['./new-tacgia.component.css']
})
export class NewTacgiaComponent implements OnInit {
  checkForNameInvalid = false;
  keyword: any = '';
  obj: any = [];

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authorService.getAll().subscribe(data => {
      this.obj = data.data;
      console.log(this.obj);
    })
  }
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  });

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
    if(!this.checkForNameInvalid){
      this.authorService.addNewAuthor(this.profileForm.value).subscribe(data => {
        if (data != undefined) {
          this.router.navigate(['/admin/tac-gia'])
        }
      })
    }
  }
}
