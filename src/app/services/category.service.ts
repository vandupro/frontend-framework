import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	constructor(private http: HttpClient) { }

	getAll(): Observable<any> {
		let requestUrl = 'http://localhost:8000/api/v1/categories';
		return this.http.get<any>(requestUrl);
	}

	searchByName(keyword: string): Observable<any>{
		let requestUrl = `http://localhost:8000/api/v1/categories/search/${keyword}`;
		return this.http.get<any>(requestUrl);
	}

	checkByName(arr: any):Observable<any>{
		let requestUrl = `http://localhost:8000/api/v1/categories/check?keyword=${arr}`;
		return this.http.get<any>(requestUrl);
	}

	findById(cateId: string): Observable<any> {
		let requestUrl = `http://localhost:8000/api/v1/categories/${cateId}`;
		return this.http.get<any>(requestUrl);
	}

	addNewCategory(data: any): Observable<any> {
		return this.http.post<any>('http://localhost:8000/api/v1/categories', data);
	}

	deleteCategory(id: Number): Observable<any> {
		let requestUrl = `http://localhost:8000/api/v1/categories/${id}`;
		return this.http.delete<any>(requestUrl);
	}

	update(data: any, id: Number): Observable<any> {
		let requestUrl = `http://localhost:8000/api/v1/categories/${id}`;
		return this.http.put<any>(requestUrl, data);
	}
}
