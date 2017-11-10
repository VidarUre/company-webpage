import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-employee',
  templateUrl: './contact-employee.component.html',
  styleUrls: ['./contact-employee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactEmployeeComponent implements OnInit {

  employeeArray = [];

  constructor() {
  }

  ngOnInit() {
    this.employeeArray.push(new Employee("https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg", "Hans Hansen", "Snarveien 3", "123 45 678"));
    this.employeeArray.push(new Employee("https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg", "Olaug Olaussen", "Melkeveien 1", "987 65 432"));
    this.employeeArray.push(new Employee("https://images.pexels.com/photos/428331/pexels-photo-428331.jpeg", "Harry Potter", "Magiveien 5", "375 29 485"));
  }
}

export class Employee {
  constructor(public image: string, public name: string, public address: string, public phone: string) {
  }
}
