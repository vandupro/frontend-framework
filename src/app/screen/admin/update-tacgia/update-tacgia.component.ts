import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-update-tacgia',
  templateUrl: './update-tacgia.component.html',
  styleUrls: ['./update-tacgia.component.css']
})
export class UpdateTacgiaComponent implements OnInit {
  authorId: string = '';
  dataEdit: any;
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.authorId = params.id;
      let n = Number(this.authorId);
      if (Number.isNaN(n)) {
        this.router.navigate(['/not-found']);
      }
      this.authorService.findById(this.authorId).subscribe(data => {
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
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  })
  get f() { return this.profileForm.controls; }
  onSubmit() {
    this.authorService.update(this.profileForm.value, Number(this.authorId)).subscribe(data => {
      if (data != undefined) {
        this.router.navigate(['/admin/tac-gia']);
      }
    })
  }

}
