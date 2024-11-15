import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from './person';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Angular Basics';

  isDisabled: boolean = true;

  color_red:string = "red";
  color_yellow:string = "yellow";

  bg_color_class:string = "bg_color";

  name = "Harsh";

  imageUrl = "https://cdn.pixabay.com/photo/2022/12/09/00/47/autumn-7644257_1280.jpg";

  person:Person = { id: 1, name: "Harsh", age: 28}

  persons:Person[] = [
    { id: 1, name: "Harsh", age: 28 },
    { id: 2, name: "Harry", age: 20 },
    { id: 3, name: "Sam", age: 30 },
    { id: 4, name: "Roger", age: 35 },
    { id: 5, name: "George", age: 29 },
  ]

  userSaved(){
    console.log('User is saved');
  }
  
}