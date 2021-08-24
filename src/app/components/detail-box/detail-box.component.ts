import { Component, OnInit, Input } from '@angular/core';
import { EmailAddress } from 'src/app/models/emailAddress';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css'],
})
export class DetailBoxComponent implements OnInit {
  @Input() contact!: Contact;
  emails: EmailAddress[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    if (this.contact.id !== -1) {
      console.log("Called",this.contact.id);
      
      this.loadEmails(this.contact.id);
    }
  }

  loadEmails(id: number) {
    this.contactService
      .getAllemails(id)
      .subscribe((emails: EmailAddress[]) => {
        console.log('All emails', emails);
        // this.emails = emails;
      });
  }

}
