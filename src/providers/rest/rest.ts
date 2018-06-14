import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	apiUrl = 'http://api.syaira.net';
	constructor(public http: HttpClient) {
		console.log('Hello RestProvider Provider');
	}

	this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
		//headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
		headers: new HttpHeaders().set('Content-Type', 'application/json'),
		params: new HttpParams().set('username', 'piter@kg.com'),
	})
	.subscribe(res => {
		resolve(res);
	}, (err) => {
		reject(err);
	});
}
