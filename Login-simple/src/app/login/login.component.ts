import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Handle successful login here
      console.log('Login successful');
    } else {
      // Handle invalid form here
      console.log('Invalid form');
    }
  }
}
