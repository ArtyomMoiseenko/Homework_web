import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class CitiesService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http){
    //this.headers = new Headers({ 'Content-Type': 'application/json', 
     //                                'Accept': 'q=0.8;application/json;q=0.9' });
    //this.options = new RequestOptions({ headers: this.headers });
  }

  getCities(): any{
    return this.http.get('http://localhost:50624/api/Cities');
  }

  addCity(nameCity: string){
    let id = 0;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    var params = new URLSearchParams();
    params.set('Id', id.toString());
    params.set('Name', nameCity);
    let string = params.toString();
    return this.http.post('http://localhost:50624/api/Cities/', string, { headers: headers })
    	.toPromise()
	    .then(response => { return response.json() });
  }

  editCity(idCity: number, nameCity: string){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    var params = new URLSearchParams();
    params.set('Id', idCity.toString());
    params.set('Name', nameCity);
    let url = 'http://localhost:50624/api/Cities/' + idCity;

    return this.http.put(url, params.toString(), { headers: headers })
    	.toPromise()
	    .then(response => { return response.json() });
  }

  deleteCity(idCity: number){
    debugger;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.delete('http://localhost:50624/api/Cities/' + idCity, { headers: headers })
      .toPromise()
	    .then(response => { return response.json() });
  }
}
