import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatePassword } from '../custom-password-validation';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  emp_data:EmployeeService = inject(EmployeeService);
  router:ActivatedRoute = inject(ActivatedRoute);

  emp:any = [];

  employeeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), ValidatePassword]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl('', [Validators.required])
  })

  addEmployee(){

    if(this.employeeForm.status == "VALID") {
      console.log(this.employeeForm.value);
      this.emp_data.createEmployee(this.employeeForm.value).subscribe((result) => {
        console.log(result)
      })
    }
    return false;
  }

  ngOnInit(){
    this.router.paramMap.subscribe((params) => {
      const emp_id = params.get('id');
      if(emp_id) {
        this.emp_data.getEmployeeById(parseInt(emp_id)).subscribe((result:any) => {
          if(result.length > 0) {
            this.emp = result[0];
            console.log(this.emp);
            this.employeeForm.patchValue({
              email: 'test@gmail.com',
              password: '123456789',
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

  // updateEmployee(){
  //   console.log('Update request')
  // }
}
