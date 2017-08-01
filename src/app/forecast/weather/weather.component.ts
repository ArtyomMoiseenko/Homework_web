import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: any;
  days: any;
  data: any;
  date: string;

  constructor(private route: ActivatedRoute, private _forecastService: ForecastService) { }

  ngOnInit() {
    this.date = new Date().toDateString();
    this.route.queryParams.subscribe(params => {
        this.city = params['nameCity'];
        this.days = params['countDays'];
    });
    this._forecastService.getForecast(this.city, this.days)
      .subscribe((response) => { this.data = response; });
  }
}
