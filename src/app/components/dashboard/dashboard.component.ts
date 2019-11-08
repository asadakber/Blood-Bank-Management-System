import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Auth } from '../../class/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: AngularFireObject<any>;
  userList: Auth[];
  constructor(private router: Router,private db: AngularFireDatabase,private authservice: AuthService) { }

  ngOnInit() {
   this.users = this.db.object('/users/')
   this.users.snapshotChanges()
   .subscribe(snap => {
     this.userList = []
     this.userList.push(snap.payload.val())
   })
  }

  onUpdate(aut: Auth) {
    this.authservice.user = Object.assign({}, aut)
    this.router.navigate(['/register'])
  }

  

  signout() {
    this.authservice.signout();
  }

}
