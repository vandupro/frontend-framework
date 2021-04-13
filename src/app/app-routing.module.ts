import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { DanhMucComponent } from './screen/danh-muc/danh-muc.component';
import { ClientLayoutComponent } from './screen/client-layout/client-layout.component';
import { AdminLayoutComponent } from './screen/admin-layout/admin-layout.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
import { QtDanhmucComponent } from './screen/qt-danhmuc/qt-danhmuc.component';
import { NewDanhmucComponent } from './screen/admin/new-danhmuc/new-danhmuc.component';
import { UpdateDanhmucComponent } from './screen/admin/update-danhmuc/update-danhmuc.component';
import { UploadFileComponent } from './screen/admin/upload-file/upload-file.component';
const routes: Routes = [
	{
		path: '',
		component: ClientLayoutComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'danh-muc/:id', component: DanhMucComponent },
		]

	},
	{
		path: 'admin',
		component: AdminLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full'
			},
			{
				path: "dashboard",
				component: DashboardComponent
			},
			{
				path: 'danh-muc',
				component: QtDanhmucComponent
			},
			{
				path: 'danh-muc/tao-moi',
				component: NewDanhmucComponent
			},
			{
				path: 'danh-muc/update/:id',
				component: UpdateDanhmucComponent
			},
			{
				path: 'upload-file',
				component: UploadFileComponent
			}
		]
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' }


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
