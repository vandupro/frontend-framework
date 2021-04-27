import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class ComicService {
	private API_URL = ' http://127.0.0.1:8000/api/v1/comics';
	constructor(private http: HttpClient) { }

	getAll(cate_id: Number = 0, author_id: Number = 0, keywork: string = '', page: Number = 1, limit: Number = 3): Observable<any> {
		return this.http.get<any>(`${this.API_URL}
			?cate_id=${cate_id}&author_id=${author_id}&keyword=${keywork}&limit=${limit}&page=${page}`);
	}

	findById(comicId: string): Observable<any> {
		let requestUrl = `${this.API_URL}/${comicId}`;
		return this.http.get<any>(requestUrl);
	}

	searchByName(keyword: string): Observable<any>{
		let requestUrl = `${this.API_URL}/search/${keyword}`;
		return this.http.get<any>(requestUrl);
	}
	
	checkByName(arr: any):Observable<any>{
		let requestUrl = `${this.API_URL}/check?keyword=${arr}`;
		return this.http.get<any>(requestUrl);
	}
	addNewComic(data: any): Observable<any> {
		return this.http.post<any>(this.API_URL, data);
	}

	deleteComic(id: Number): Observable<any> {
		let requestUrl = `${this.API_URL}/${id}`;
		return this.http.delete<any>(requestUrl);
	}

	update(data: any, id: Number): Observable<any> {
		let requestUrl = `${this.API_URL}/${id}`;
		return this.http.put<any>(requestUrl, data);
	}
}
