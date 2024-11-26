import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  router = inject(ActivatedRoute);

  employees = [
    {id: 1, name: 'Harsh'}, 
    {id: 2, name: 'Sam'}, 
    {id: 3, name: 'George'}, 
  ]

  constructor(){
    this.router.paramMap.subscribe((param)=>{
      const emp_id = param.get('id');
      console.log(emp_id);
    });
  }
}
