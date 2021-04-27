import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: 'app-update-truyentranh',
  templateUrl: './update-truyentranh.component.html',
  styleUrls: ['./update-truyentranh.component.css']
})
export class UpdateTruyentranhComponent implements OnInit {
  downloadURL!: Observable<string>;
  comicId: string = '';
  dataEdit: any;
  categorys: any = '';
  authors: any;
  imageUrl: any = '';
  checked: boolean = true;
  checkIamgeInvalid = false;
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router,
    private comicService: ComicService,
    private storage: AngularFireStorage,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categorys = data.data;
    })
    this.authorService.getAll().subscribe(data => {
      this.authors = data.data;
    })
    this.route.params.subscribe(params => {
      this.comicId = params.id;
      let n = Number(this.comicId);
      if (Number.isNaN(n)) {
        this.router.navigate(['/not-found']);
      }
      this.comicService.findById(this.comicId).subscribe(data => {
        if (data.data.length == 0) {
          this.router.navigate(['/not-found']);
        } else {
          this.dataEdit = data.data;
          this.checked = this.dataEdit.status == 1 ? true : false;
          this.imageUrl = this.dataEdit.image;
          this.profileForm.patchValue({
            name: this.dataEdit.name,
            desc: this.dataEdit.desc,
            cate_id: this.dataEdit.category.id,
            author_id: this.dataEdit.author.id,
            status: this.dataEdit.status,
            view: this.dataEdit.view,
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
    image: new FormControl(''),
    desc: new FormControl('', [Validators.required]),
    cate_id: new FormControl('', [Validators.required]),
    author_id: new FormControl('', [Validators.required]),
    status: new FormControl(0),
    view: new FormControl(0),
  });
  get f() { return this.profileForm.controls; }
  uploadFile(event: any) {
    let typeOfImages = ['png', 'jpg', 'jpeg'];

    let test = this.profileForm.value.image.split('.');
    test = test.pop().toLowerCase();
    if (typeOfImages.includes(test)) {
      this.checkIamgeInvalid = false;

      var n = Date.now();
      const file = event.target.files[0];
      const filePath = `Comics/${n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`Comics/${n}`, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              this.imageUrl = url;
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    } else {
      this.checkIamgeInvalid = true;
    }
  }
  onSubmit() {
    if (this.profileForm.value.image)
      this.profileForm.value.image = this.imageUrl;
    else
      this.profileForm.value.image = this.dataEdit.image;
    this.comicService.update(this.profileForm.value, Number(this.comicId)).subscribe(data => {
      if (data != undefined) {
        this.router.navigate(['/admin/truyen-tranh']);
      }
    })
  }

}
