import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  options: FormGroup;
  contacts: Contact[] = [];
  selectedContact: Contact = {
    id: -1,
    fname: '',
    lname: '',
    avatar: '',
    department: '',
    contact_no: '',
    email: '',
    status: false,
  };
  constructor(
    fb: FormBuilder,
    private contactService: ContactService, // this service contains all the api call functions
    private observer: BreakpointObserver // to check the dimension of screen for responsivness
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );

  ngOnInit(): void {
    this.loadContacts();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  loadContacts() {
    this.contactService.getAllContacts().subscribe((contacts: Contact[]) => {
      console.log('All contacts', contacts);
      this.contacts = contacts;
      this.selectedContact = contacts[0];
    });
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  toogleMenu() {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }
}
