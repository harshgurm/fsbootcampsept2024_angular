import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatePassword } from '../custom-password-validation';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  emp_data:EmployeeService = inject(EmployeeService);
  route:ActivatedRoute = inject(ActivatedRoute);
  router:Router = inject(Router);

  emp:any = [];

  employeeForm = new FormGroup({
    employee_id: new FormControl<number>(0),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), ValidatePassword]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl('', [Validators.required])
  })

  addEmployee(){
    if(this.employeeForm.status == "VALID") {
      if(this.employeeForm.value){
        const empId =  this.employeeForm.value.employee_id;
        if(empId && empId > 0){
          console.log('Update employee');
          this.emp_data.updateEmployee(empId, this.employeeForm.value).subscribe((result)=> {
            console.log(result);
            this.router.navigate(['/employees']);
          })
        } else {
          console.log('Add the employee');
          this.emp_data.createEmployee(this.employeeForm.value).subscribe((result) => {
            console.log(result)
            this.router.navigate(['/employees']);
          })
        }
      }
    }    
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const emp_id = params.get('id');
      if(emp_id) {
        const employee_id = parseInt(emp_id);
        this.emp_data.getEmployeeById(employee_id).subscribe((result:any) => {
          if(result.length > 0) {
            this.emp = result[0];
            console.log(this.emp);
            this.employeeForm.patchValue({
              employee_id: employee_id,
              email: this.emp.email,
              password: this.emp.password,
              first_name: this.emp.first_name,
              last_name: this.emp.last_name,
              salary: this.emp.salary,
              department: this.emp.department_id,
            });
          }
        })
      }
    })
  }

}
