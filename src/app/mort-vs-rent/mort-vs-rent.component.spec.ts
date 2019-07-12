import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortVsRentComponent } from './mort-vs-rent.component';

describe('MortVsRentComponent', () => {
  let component: MortVsRentComponent;
  let fixture: ComponentFixture<MortVsRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortVsRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortVsRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
