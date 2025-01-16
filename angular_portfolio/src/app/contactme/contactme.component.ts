import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MailService } from '../mail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {

  email = "harshgurm@gmail.com";
  email_error = false;
  email_success = false;
  error_message = "";

  mail:MailService = inject(MailService);

  emailDetails = {
    to_email: "",
    subject: "",
    message: ""
  }

  closePopUp(){
    this.email_success = false;
    this.email_error = false;
    this.error_message = "";
  }

  sendEmail(data:any){
    if(data.form.status == "VALID"){
      this.mail.sendMail(data.form.value).subscribe({
        next:(data) => {
          this.email_success = true;
        },
        error: (errors) => {
          this.email_error = true;
          if(errors.error && errors.error.message)
            this.error_message = errors.error.message;
        }
      });
    }
  }

}
