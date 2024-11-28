import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  router = inject(ActivatedRoute);
  emp_data:EmployeeService = inject(EmployeeService);

  details: string = '';

  employees = [
    {id: 1, name: 'Harsh', description : "Harsh is a great developer"}, 
    {id: 2, name: 'Sam', description: "Sam is a great Manager"}, 
    {id: 3, name: 'George', description: "George is a great VP"}, 
  ]

  constructor(){
    this.router.paramMap.subscribe((param)=>{
      const emp_id = param.get('id');
      if(emp_id){
        const employee = this.employees.find(e => {
          if(e.id == parseInt(emp_id)){
            return e;
          } else {
            return null;
          }
        })
        if(employee){
          this.details = employee.description;
        } else {
          this.details = '';
        }
      }
    });

    // this.employees = this.emp_data.getEmployees();
    
  }
}
