import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './screen/product-list/product-list.component';
import { MonsterListComponent } from './screen/monster-list/monster-list.component';
import { ProductAddComponent } from './screen/product-add/product-add.component';
const routes: Routes = [
	{ path: 'product', component: ProductListComponent},
	{ path: 'monster', component: MonsterListComponent},
	{ path: 'product/add', component: ProductAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
