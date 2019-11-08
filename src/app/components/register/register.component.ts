import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reset: FormGroup
  login: FormGroup
  constructor(private toastr: ToastrService,private fb: FormBuilder,private authservice: AuthService) { }

  ngOnInit() {
    this.resetform();
    this.loginform();
    this.resetform();
  }
  
  

  resetform() {
    this.reset = this.fb.group({
      email: ['', Validators.required]
    })
  }

  loginform() {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    this.authservice.signin(this.login.value)
    this.login.reset();
  }

  onSubmit(form: NgForm) {
    if(form.value.$key == null) 
      this.authservice.signup(form.value)
    
    else 
      this.authservice.updateAccount(form.value)
      this.resetForm(form)
    
  
  }

  resetForm(form?: NgForm) {
    if(form != null) {
      form.reset();
      this.authservice.user = {
        $key: null,
        username: '',
        email: '',
        password: '',
        ConfirmPassword: '',
        name: '',
        contactno: 0,
        address: '',
        city: '',
        state: '',
        country: '',

      }
    }
  }

  onReset() {
    this.authservice.ResetPassword(this.reset.value)
    this.reset.reset();
  }

}
