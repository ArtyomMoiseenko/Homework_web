import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitiesService } from '../cities/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  data: any;

  constructor(private _citiesService: CitiesService, private router: Router) { }

  ngOnInit() {
    this._citiesService.getCities().subscribe((response: Response) => this.data = response.json());
  }

  add(){
    this.router.navigate(['/cities', 'add'] );
  }

  edit(id: number){
    this.router.navigate(['/cities', 'edit'], { queryParams: { id: id } } );
  }

  delete(id: number){
    this._citiesService.deleteCity(id);
    window.location.reload();
  }
}
