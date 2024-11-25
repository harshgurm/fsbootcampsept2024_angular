import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../person';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StudentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){
    this.students = this.studentService.getPersons();
  }

  studentService: DataService = inject(DataService);

  students:{id:number, name: string, age: number}[] = [];

}

//Task a new component called students
// include it under home component