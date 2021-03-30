import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { DanhMucComponent } from './screen/danh-muc/danh-muc.component';
import { ClientLayoutComponent } from './screen/client-layout/client-layout.component';
import { AdminLayoutComponent } from './screen/admin-layout/admin-layout.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
const routes: Routes = [
	{
		path: '', 
		component: ClientLayoutComponent,
		children: [
			{path: '', component: HomeComponent},
			{path: 'danh-muc', component: DanhMucComponent},
		]

	},
	{
		path: 'admin',
		component: AdminLayoutComponent,
		children: [
	      {
	        path: "dashboard",
	        component: DashboardComponent
	      }
	    ]
	},
	{path: '**', redirectTo: '', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
