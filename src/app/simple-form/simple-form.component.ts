import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple.form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  guest: String;
  guests: String[];
  constructor() { }

  ngOnInit() {
    this.guests = [];
  }

  enterGuestBook(guestName) {
    this.guest = guestName;
    this.guests.push(this.guest);
  }

  clearGuestBook() {
    this.guests = [];
  }
}
