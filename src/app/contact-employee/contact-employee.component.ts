import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-contact-employee',
  templateUrl: './contact-employee.component.html',
  styleUrls: ['./contact-employee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactEmployeeComponent implements OnInit {

  employeeArray = [];

  // Values for new employee
  employeeName = "";
  employeeAddress = "";
  employeePhone = "";
  employeeDescription = "";

  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this._data.employee.subscribe(res => this.employeeArray = res);
    this._data.changeEmployee(this.employeeArray);
  }

  addEmployee() {
    this.employeeArray.push(new Employee("https://tradiestart.com.au/assets/profile-cb7e79cf25aa447fa6410518d0c94abf3ff11184a3df4efeae1dfc5234884f61.png", this.employeeName, this.employeeAddress, this.employeePhone, this.employeeDescription));
    this._data.changeEmployee(this.employeeArray);

    this.employeeName = ""; // Nullstiller inputfeltene
    this.employeeAddress = "";
    this.employeePhone = "";
    this.employeeDescription = "";
  }
}
