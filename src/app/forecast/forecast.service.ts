import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class ForecastService {
  datas: string;
  constructor(private http: Http) { }

  getForecast(name: string, days: number): Observable<any>{
    var path = '?nameCity=' + name + '&countDays=' + days;
    return this.http.get('http://localhost:50624/api/ForecastWeather' + path)
	    .map((res:Response) => { return res.json(); });
  }
}
