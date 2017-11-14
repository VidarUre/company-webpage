import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-employee',
  templateUrl: './about-employee.component.html',
  styleUrls: ['./about-employee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutEmployeeComponent implements OnInit {

  employeeArray: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {

  }

  ngOnInit() {
    this._data.employee.subscribe(res => this.employeeArray = res);
  }

}
