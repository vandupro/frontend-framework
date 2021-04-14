import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class AuthorService {

	constructor(private http: HttpClient) { }
	private API_URL = 'http://127.0.0.1:8000/api/v1/authors';

	getAll(): Observable<any> {
		return this.http.get<any>(this.API_URL);
	}

	findById(cateId: string): Observable<any> {
		let requestUrl = `${this.API_URL}/${cateId}`;
		return this.http.get<any>(requestUrl);
	}

	addNewAuthor(data: any): Observable<any> {
		return this.http.post<any>(this.API_URL, data);
	}

	deleteAuthor(id: Number): Observable<any> {
		let requestUrl = `${this.API_URL}/${id}`;
		return this.http.delete<any>(requestUrl);
	}

	update(data: any, id: Number): Observable<any> {
		let requestUrl = `${this.API_URL}/${id}`;
		return this.http.put<any>(requestUrl, data);
	}
}
