import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  dataService:DataService = inject(DataService);
  router:Router = inject(Router);

  signUpDetails = {
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: ''
  }

  errors = false;
  success = false;
  error_message = "";

  closePopUp(){
    this.errors = false;
    this.success = false;
    this.error_message = "";
  }

  signUp(data:any){
    if(data.form.valid){
      this.dataService.signUp(data.form.value).subscribe({
        next:(result) => {
          this.success = true;
          setTimeout(() => {
            this.router.navigate(['signin']);
          }, 2000);
        },
        error:(errors) => {
          this.errors = true;
          console.log('Error' + errors);
          if(errors.message){
            this.error_message = errors.message;
          }
        }
      })
    }
  }

}
