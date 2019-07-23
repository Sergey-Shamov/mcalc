import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortBlockComponent } from './mort-block.component';

describe('MortBlockComponent', () => {
  let component: MortBlockComponent;
  let fixture: ComponentFixture<MortBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
