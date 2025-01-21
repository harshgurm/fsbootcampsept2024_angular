import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  housingLocationList: Housinglocation[] = [];
  router:Router = inject(Router);

  housingService:HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    console.log(this.housingLocationList);
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['signin']);
  }

}
