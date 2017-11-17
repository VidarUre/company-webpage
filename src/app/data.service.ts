import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Employee } from '../app/employee';

@Injectable()
export class DataService {

  private employeeArray = new BehaviorSubject<any>([
    new Employee("https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg", "Hans Hansen", "Snarveien 3", "123 45 678", "Working with stuff"),
    new Employee("https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg", "Olaug Olaussen", "Melkeveien 1", "987 65 432", "Working with stuff"),
    new Employee("https://images.pexels.com/photos/428331/pexels-photo-428331.jpeg", "Harry Potter", "Magiveien 5", "375 29 485", "Working with stuff")

]);
  employee = this.employeeArray.asObservable(); // Hva er en observable??

  constructor() { }

  changeEmployee(employee) {
    this.employeeArray.next(employee);
  }

}
