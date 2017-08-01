import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ForecastService } from '../forecast/forecast.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  providers: [ForecastService],
})
export class ForecastComponent implements OnInit {
  city: string;
  days: string;
  data: any;
  name: string;

  constructor(private _forecastService: ForecastService, private router: Router) {
    this.days = "1";
  }

  getForecast(city: string, days: string){
    this.router.navigate(['/forecast', 'weather'], { queryParams: { nameCity: city, countDays: days } } );
  }

  ngOnInit() {
  }
}
