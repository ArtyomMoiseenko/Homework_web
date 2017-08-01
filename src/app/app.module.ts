import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LogComponent } from './log/log.component';
import { WeatherComponent } from './forecast/weather/weather.component';
import { ForecastService } from './forecast/forecast.service';
import { CitiesService } from './cities/cities.service';
import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { AddcityComponent } from './cities/addcity/addcity.component';
import { EditcityComponent } from './cities/editcity/editcity.component';
import { DeletecityComponent } from './cities/deletecity/deletecity.component';


@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    LogComponent,
    WeatherComponent,
    CitiesComponent,
    AddcityComponent,
    EditcityComponent,
    DeletecityComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ForecastService, CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
