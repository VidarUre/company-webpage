import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-employee',
  templateUrl: './contact-employee.component.html',
  styleUrls: ['./contact-employee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactEmployeeComponent implements OnInit {

  EmployeeArray: { name: string, address: string }[] = [
  { "name": "Hans", "address": "Snarveien 3" },
  { "name": "Olaug Olaussen", "address": "Melkeveien 1" },
  { "name": "Harry Potter", "address": "Magiveien 5" }
];

  constructor() { }

  ngOnInit() {
  }

}
