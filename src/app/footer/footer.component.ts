import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  companyName: string = "Some Architect Company AS";
  visitAddress: string = "Melkeveien 1, 5075 Bergen";


  constructor() { }

  ngOnInit() {
  }

}
