import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McalcOldComponent } from './mcalc-old.component';

describe('McalcOldComponent', () => {
  let component: McalcOldComponent;
  let fixture: ComponentFixture<McalcOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McalcOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McalcOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
