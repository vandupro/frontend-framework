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

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  });

  get f() { return this.profileForm.controls; }

  onSubmit(){
    this.authorService.addNewAuthor(this.profileForm.value).subscribe(data => {
      if(data != undefined){
        this.router.navigate(['/admin/tac-gia'])
      }
    })
  }
}
