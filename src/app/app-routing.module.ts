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
import { QtTacgiaComponent } from './screen/admin/qt-tacgia/qt-tacgia.component';
import { NewTacgiaComponent } from './screen/admin/new-tacgia/new-tacgia.component';
import { UpdateTacgiaComponent } from './screen/admin/update-tacgia/update-tacgia.component';
import { QtComicComponent } from './screen/admin/qt-comic/qt-comic.component';
import { NewTruyentranhComponent } from './screen/admin/new-truyentranh/new-truyentranh.component';
import { UpdateTruyentranhComponent } from './screen/admin/update-truyentranh/update-truyentranh.component';
import { ComicDetailComponent } from './screen/comic-detail/comic-detail.component';
const routes: Routes = [
	{
		path: '',
		component: ClientLayoutComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'danh-muc/:id', component: DanhMucComponent },
			{ path: 'detail/:id', component: ComicDetailComponent},
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

			// category routing
			{ path: 'danh-muc',component: QtDanhmucComponent },
			{ path: 'danh-muc/tao-moi',component: NewDanhmucComponent },
			{ path: 'danh-muc/update/:id',component: UpdateDanhmucComponent },
			
			// author routing
			{ path: 'tac-gia', component:QtTacgiaComponent},
			{ path: 'tac-gia/tao-moi', component: NewTacgiaComponent},
			{ path: 'tac-gia/update/:id', component: UpdateTacgiaComponent},
			
			// comic routing
			{ path: 'truyen-tranh', component: QtComicComponent},
			{ path: 'truyen-tranh/tao-moi', component: NewTruyentranhComponent},
			{ path: 'truyen-tranh/update/:id', component: UpdateTruyentranhComponent},



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
