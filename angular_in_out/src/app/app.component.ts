import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { Student } from './student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'angular_in_out';

  student:Student = {id: 1, name: "Harsh", age: 28 }

  valFromChild(val:string){
    console.log(val, 'value came from child');
  }

}
