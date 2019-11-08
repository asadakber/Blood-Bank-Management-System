import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private authservice: AuthService,private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm();
  }


  LoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    this.authservice.signin(this.loginForm.value);
  }


}
