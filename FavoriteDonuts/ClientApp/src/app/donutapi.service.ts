import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DonutapiService {
	username: string = null;

	http: HttpClient = null;
    constructor(theHttp: HttpClient) {
		this.http = theHttp;
    }

	// PRACTICE the callback concept
	getAllDonuts(cb) {
		this.http.get<any>('/donut').subscribe(donuts => {
			cb(donuts);
		});

		// Alternative way to explore after studying
		// this whole "callback" mechanism
		// this.http.get<any>('/donut').subscribe(cb);

	}

	getDonutDetail(id, cb) {
		this.http.get<any>(`/donut/${id}`).subscribe(detail => {
			cb(detail);
		});
	}

	addFavorite(id) {
		this.http.post<any>(`/favorite/add?username=${this.username}&donut=${id}`, {}).subscribe(results => {
		//this.http.post<any>(`/favorite/add`, {username: this.username, donut: id}).subscribe(results => {
			console.log(results);
		})
	}

	removeFavorite(id) {

	}

	isFavorite(username, id, cb) {

	}
}
