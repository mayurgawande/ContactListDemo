import { Injectable } from '@angular/core';


export class ContactList {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  status: string;

  constructor(a: string, b: string, c: string, d: number, e: string) {
    this.firstName = a;
    this.lastName = b;
    this.email = c;
    this.phoneNumber = d;
    this.status = e;
  }
}

@Injectable()
export class ContactListService {

  constructor() { }

  getContactList(): ContactList[] {
    var list: ContactList[] = [
      new ContactList("Mayur", "Gawande", "mrgawande49@gmail.com", 9975416420, "Active"),
      new ContactList("Scott", "Smith ", "test45@gmail.com", 9975416421, "InActive"),
      new ContactList("Admin", "Def", "test41@gmail.com", 9975416422, "Active"),
      new ContactList("Smith", "Pitt", "test40@gmail.com", 9975416423, "InActive")
    ];
    return list;
  }
}
