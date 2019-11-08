import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: string = '';
  lng: string = '';
  // latitude: string = '';
  // longitude: string = '';
  constructor(private map: MapService,private toastr: ToastrService,private db: AngularFireDatabase) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lat = data.longitude;
    })
  }

  onSubmit(form: NgForm){
    if(form.value.name === '') {
      // this.toastr.warning('Please Fill Out All Field!')
    }
    else {
      const value = form.value;
      const name = value.name;
      const email = value.email;
      const message = value.content;
      const subject = value.subject;
  
      let formRequest = { name, email, subject, message};
      this.db.list('/messages').push(formRequest);
      form.reset();
      this.toastr.success('Email Has Been Sent!')
    }
   
  }

  // onChoseLocation(event) {
  //   this.latitude = event.coords.lat
  //   this.longitude = event.coords.lng
  // }



}
