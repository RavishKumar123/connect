import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { contacts, baseUrl } from '../config/api';
import { Contact } from '../models/contact';
import { EmailAddress } from '../models/emailAddress';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://mocki.io/v1/92f826f0-1bb5-441c-9cad-62db758b1231');
  }

  getAllemails(id: number): Observable<EmailAddress[]> {
    return this.http.get<EmailAddress[]>(
      `${baseUrl}/contacts/${id}/email-addresses`
    );
  }
}
