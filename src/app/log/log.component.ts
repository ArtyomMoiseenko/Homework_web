import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  data: any;
  constructor(private http: Http) { }

  ngOnInit() {
    debugger;
    this.getLogs().subscribe((response: Response) => this.data = response.json());
    console.log(this.data);
  }

  getLogs(){
    return this.http.get('http://localhost:50624/api/Log');
  }
}
