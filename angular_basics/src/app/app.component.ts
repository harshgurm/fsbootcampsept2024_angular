import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from './person';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Task 1
  // Grab the data from data service in HomeComponent
  // display the data using ul li in HomeComponent.html

  constructor(){
    console.log('The constructor is called');
    // this.persons = this.personService.getPersons();
    console.log(this.persons);
  }

  persons:Person[] = [];
  personService: DataService = inject(DataService);

  title:string = 'Angular Basics';

  isDisabled: boolean = true;

  color_red:string = "red";
  color_yellow:string = "yellow";

  bg_color_class:string = "bg_color";

  name = "Harsh";

  imageUrl = "https://cdn.pixabay.com/photo/2022/12/09/00/47/autumn-7644257_1280.jpg";

  person: Person= { id: 1, name: "Harsh", age: 28}


  userSaved(){
    console.log('User is saved');
  }
  
}