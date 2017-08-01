import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { LogComponent } from './log/log.component';
import { WeatherComponent } from './forecast/weather/weather.component';
import { CitiesComponent } from './cities/cities.component';
import { AddcityComponent } from './cities/addcity/addcity.component';
import { EditcityComponent } from './cities/editcity/editcity.component';
import { DeletecityComponent } from './cities/deletecity/deletecity.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/forecast'
  },{
    path: 'forecast',
    component: ForecastComponent,
    children: [{
      path: 'weather',
      component: WeatherComponent
    }]
  },{
    path: 'log',
    component: LogComponent,
    children: []
  },{
    path: 'cities',
    component: CitiesComponent,
    children: [{
      path: 'add',
      component: AddcityComponent
    },{
      path: 'edit',
      component: EditcityComponent
    },{
      path: 'delete',
      component: DeletecityComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
