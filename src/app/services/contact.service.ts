import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Contact } from '../class/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // contactList: AngularFireList<any>
  // selectedContact: Contact = new Contact()
  constructor(private db: AngularFireDatabase) {
    // this.contactList = this.db.list('/contact')
   }

  //  insertContact(contact: Contact) {
  //    this.contactList.push({
  //     name: contact.name,
  //     email: contact.email,
  //     subject: contact.subject,
  //     message: contact.message,
  //    })
  //  }


}
