import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(){
    console.log('HERE')
  }

  title = 'Angular Basics';

  name = "Harsh";

  person = { id: 1, name: "Harsh", age: 28 }

  persons = [
    { id: 1, name: "Harsh", age: 28 },
    { id: 2, name: "Harry", age: 20 },
    { id: 3, name: "Sam", age: 30 },
    { id: 4, name: "Roger", age: 35 },
    { id: 5, name: "George", age: 29 },
  ]
  
}
