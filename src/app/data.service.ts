import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  // retrieve data from Firebase
  fetchData(){
  	return this.http.get('https://angular2-employee-dir.firebaseio.com/.json').map(
  		(res) => res.json()
  	);
  }

}
