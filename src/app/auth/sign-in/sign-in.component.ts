import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
      });
  }
  onSignIn() {
    const mail = this.signInForm.value.email;
    const pass = this.signInForm.value.password;
    console.log(mail);
    console.log(pass);
    this.authService.signInUser(mail, pass);
  }
    

}
