import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalcPageComponent } from './main-calc-page.component';

describe('MainCalcPageComponent', () => {
  let component: MainCalcPageComponent;
  let fixture: ComponentFixture<MainCalcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCalcPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCalcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
