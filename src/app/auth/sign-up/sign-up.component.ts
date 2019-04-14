import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
      });      
  }
  onSignUp() {    
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    console.log(email);
    console.log(password);
    this.authService.signupUser(email, password);
  }
}
