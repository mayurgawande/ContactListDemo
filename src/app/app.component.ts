import { Component, Injectable, Inject } from '@angular/core';
import { CustomPipe } from './Pipes/custom-pipe.pipe';
import { ContactListService } from './Services/contact-list.service';
import { ContactList } from './Services/contact-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactListService, CustomPipe]

})
export class AppComponent {
 
  newcontact: ContactList = new ContactList(null, null, null, null, null);
  contactList: any;

  constructor(private s: ContactListService, public search: CustomPipe) {
    this.contactList = s.getContactList();

  }


  addContact(data: any) {
    if (!data || !data.email) return;
    this.contactList.push(new ContactList(data.firstName, data.lastName, data.email, data.phoneNumber, data.status));
    this.newcontact.firstName = null;
    this.newcontact.lastName = null;
    this.newcontact.email = null;
    this.newcontact.phoneNumber = null;
    this.newcontact.status = null;
  }


  removeContact(n) {

    if (confirm("Do you want to delete this contact?")) {
      this.contactList.splice(n, 1);
    }

  }
  
  updateContact(updatedData: any, i: number) {
    this.contactList[i] = updatedData;
    confirm('ContactList Updated!!!!');

  }



}


