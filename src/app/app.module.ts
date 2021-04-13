import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './screen/product-list/product-list.component';
import { ProductDetailComponent } from './screen/product-detail/product-detail.component';
import { MonsterListComponent } from './screen/monster-list/monster-list.component';
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
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    MonsterListComponent,
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
