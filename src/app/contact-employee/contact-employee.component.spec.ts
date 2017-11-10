import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEmployeeComponent } from './contact-employee.component';

describe('ContactEmployeeComponent', () => {
  let component: ContactEmployeeComponent;
  let fixture: ComponentFixture<ContactEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
