import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Auth } from '../class/auth';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userList: AngularFireObject<any>
  user: Auth = new Auth();
  
  constructor(private toastr: ToastrService,private router: Router,private afauth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.userList = this.db.object('/users')
  }

  signup(auth: Auth) {
    return this.afauth.auth.createUserWithEmailAndPassword(auth.email, auth.password) 
    .then((success) => {
        this.userList.set({
          username: auth.username,
          email: auth.email,
          password: auth.password,
          ConfirmPassword: auth.ConfirmPassword,
          name: auth.name,
          contactno: auth.contactno,
          address: auth.address,
          city: auth.city,
          state: auth.state,
          country: auth.country,
        })
        this.router.navigate(['/login'])
        this.toastr.success('Account Has Been Created')
    }).catch((error) => {
      this.toastr.error(error)
    })
  }

  updateAccount(auth: Auth) {
    this.userList.update({
      username: auth.username,
      email: auth.email,
      password: auth.password,
      ConfirmPassword: auth.ConfirmPassword,
      name: auth.name,
      contactno: auth.contactno,
      address: auth.address,
      city: auth.city,
      state: auth.state,
      country: auth.country,
    })
  }

  signin(user) {
    return this.afauth.auth.signInWithEmailAndPassword(user.email, user.password) 
    .then((success) => {
      this.toastr.success('Login Successfully')
      this.router.navigate(['/dashboard'])
    }).catch((error) => {
      this.toastr.error(error)
    })
  }

  signout() {
    return this.afauth.auth.signOut() 
    .then((success) => {
      this.toastr.success('Logout Successfully')
      this.router.navigate(['/register'])
    }).catch((error) => {
      this.toastr.error(error)
    })
  }

  ResetPassword(user) {
    return this.afauth.auth.sendPasswordResetEmail(user.email)
    .then((success) => {
      this.toastr.success('Reset Password Succefully')
    }).catch((error) => {
      this.toastr.error(error)
    })
  }
}
