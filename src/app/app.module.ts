import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroInitComponent } from './component/hero-init/hero-init.component';
import { GenderPipe } from './pipe/gender.pipe';
import { HomeComponent } from './screen/home/home.component';
import { DanhMucComponent } from './screen/danh-muc/danh-muc.component';
import { ClientLayoutComponent } from './screen/client-layout/client-layout.component';
import { AdminLayoutComponent } from './screen/admin-layout/admin-layout.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { QtDanhmucComponent } from './screen/qt-danhmuc/qt-danhmuc.component';
import { NewDanhmucComponent } from './screen/admin/new-danhmuc/new-danhmuc.component';
import { UpdateDanhmucComponent } from './screen/admin/update-danhmuc/update-danhmuc.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { UploadFileComponent } from './screen/admin/upload-file/upload-file.component';
import { QtTacgiaComponent } from './screen/admin/qt-tacgia/qt-tacgia.component';
import { NewTacgiaComponent } from './screen/admin/new-tacgia/new-tacgia.component';
import { UpdateTacgiaComponent } from './screen/admin/update-tacgia/update-tacgia.component';
import { QtComicComponent } from './screen/admin/qt-comic/qt-comic.component';
import { NewTruyentranhComponent } from './screen/admin/new-truyentranh/new-truyentranh.component';
import { UpdateTruyentranhComponent } from './screen/admin/update-truyentranh/update-truyentranh.component';
import { ComicDetailComponent } from './screen/comic-detail/comic-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroInitComponent,
    GenderPipe,
    HomeComponent,
    DanhMucComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    QtDanhmucComponent,
    NewDanhmucComponent,
    UpdateDanhmucComponent,
    UploadFileComponent,
    QtTacgiaComponent,
    NewTacgiaComponent,
    UpdateTacgiaComponent,
    QtComicComponent,
    NewTruyentranhComponent,
    UpdateTruyentranhComponent,
    ComicDetailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
