import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatePassword } from '../custom-password-validation';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  employeeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), ValidatePassword]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl('', [Validators.required])
  })

  addEmployee(){
    console.log(this.employeeForm);
    return false;
  }
}
