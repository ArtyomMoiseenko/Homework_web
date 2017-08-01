import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.scss']
})
export class EditcityComponent implements OnInit {
  id: any;
  name: string;

  constructor(private route: ActivatedRoute, private citiesServise: CitiesService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.id = params['id'];
    });
  }

  edit(){
    this.citiesServise.editCity(this.id, this.name);
    this.router.navigate(['/cities']);
    window.location.reload();
  }
}
