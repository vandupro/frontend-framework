import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './screen/product-list/product-list.component';
import { ProductDetailComponent } from './screen/product-detail/product-detail.component';
import { MonsterListComponent } from './screen/monster-list/monster-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroInitComponent } from './component/hero-init/hero-init.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    MonsterListComponent,
    NavbarComponent,
    HeroInitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
