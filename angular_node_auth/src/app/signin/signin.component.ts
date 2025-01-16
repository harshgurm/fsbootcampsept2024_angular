import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  dataService:DataService = inject(DataService);
  router:Router = inject(Router);

  signInDetails = {
    email: '',
    password: ''
  }

  errors = {error: false, message: "" }

  closePopUp(){
    this.errors = {error: false, message: "" }
  }

  signInUser(data:any){
    console.log(data);
    if(data.form.valid){
      this.dataService.signIn(data.form.value).subscribe({
        next: (results) => {
          console.log(results);
        },
        error:(errors) => {
          this.errors.error = true;
          this.errors.message = errors.error.message;
        }
      }
        
      //   (result:any) => {
      //   if(result.status == 'success'){
      //     //redirect to home page
      //     localStorage.setItem('token', result.token);
      //     this.router.navigate(['home'])
      //   }
      // }
    )
    }
  }

}
