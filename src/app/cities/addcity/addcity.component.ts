import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {
  name: string;
  constructor(private citiesService: CitiesService, private router: Router) { }

  ngOnInit() {
  }

  add(){
    this.citiesService.addCity(this.name);
    this.router.navigate(['/cities']);
    window.location.reload();
  }
}
