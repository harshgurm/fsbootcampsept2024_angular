import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

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
  employees:any;

  constructor(){
    
  }

  ngOnInit(){
    
    //to get all the employees
    this.getAllEmployees();

    this.router.paramMap.subscribe((param)=>{
      const emp_id = param.get('id');
      
      if(emp_id){
        //running the request to get an employee based on its id
        this.getEmployeeById(parseInt(emp_id));
      }

    });
  }

  getAllEmployees(){
    this.emp_data.getEmployees().subscribe((val) => {
      this.employees = val;
    })
  }

  getEmployeeById(id:number){
    this.emp_data.getEmployeeById(id).subscribe((result:any) => {
      //assign that paritcular employee if it exist
      if(result.length > 0){
        console.log(result);
          // this.employees = result;
      }
    });
  }

  updateEmployee(id:number){
    if(id){
      this.getEmployeeById(id);  
    }
  }

  delEmployee(id: number){
    if(id){
      this.emp_data.deleteEmployee(id).subscribe((result:any) => {
        console.log(result);
        if(result.status == 'success'){
          this.getAllEmployees();
        }
      })
    }
  }

}
