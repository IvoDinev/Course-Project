import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
      });
  }
  onSignUp() {    
    const mail = this.signUpForm.value.email;
    const pass = this.signUpForm.value.password;
    console.log(mail);
  }

}
