import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { AuthorService } from 'src/app/services/author.service';
import { CategoryService } from 'src/app/services/category.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: 'app-new-truyentranh',
  templateUrl: './new-truyentranh.component.html',
  styleUrls: ['./new-truyentranh.component.css']
})
export class NewTruyentranhComponent implements OnInit {
  downloadURL!: Observable<string>;
  categorys: any;
  authors: any;
  imageUrl: any = '';
  checkRadio: any;
  checkForNameInvalid = false;
  keyword: any = '';
  obj: any = [];
  checkIamgeInvalid = false;
  constructor(
    private comicService: ComicService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private router: Router,
    private storage: AngularFireStorage,

  ) {
    this.checkRadio = true;
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categorys = data.data;
    })
    this.authorService.getAll().subscribe(data => {
      this.authors = data.data;
    })
    this.comicService.getAll().subscribe(data => {
      this.obj = data.comics;
    })
    this.profileForm.patchValue({
      status: 0
    })
    console.log(this.f);
  }
  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,  
      Validators.minLength(4)
    ]),
    image: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    cate_id: new FormControl('', [Validators.required]),
    author_id: new FormControl('', [Validators.required]),
    status: new FormControl(0),
    view: new FormControl(0),


  });

  get f() { return this.profileForm.controls; }

  checkName(e: any) {
    this.keyword = e.target.value.trim().toLowerCase();
    let arr = this.obj.filter((item: any) => {
      return item.name.trim().toLowerCase() == this.keyword;
    })
    if(arr.length > 0){
      this.checkForNameInvalid = true;
    }else{
      this.checkForNameInvalid = false;
    }
  }
  
  uploadFile(event: any) {
    let typeOfImages = ['png', 'jpg', 'jpeg'];

    let test = this.profileForm.value.image.split('.');
    test = test.pop().toLowerCase();
    if(typeOfImages.includes(test)){
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
    }else{
      this.checkIamgeInvalid = true;
    }
  }

  onSubmit() {
    if (this.profileForm.value.image)
      this.profileForm.value.image = this.imageUrl;
    if(!this.checkForNameInvalid){
      this.comicService.addNewComic(this.profileForm.value).subscribe(data => {
        if (data != undefined) {
          this.router.navigate(['/admin/truyen-tranh'])
        }
      })
    }
  }
}
