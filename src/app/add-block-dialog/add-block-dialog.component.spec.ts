import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlockDialogComponent } from './add-block-dialog.component';

describe('AddBlockDialogComponent', () => {
  let component: AddBlockDialogComponent;
  let fixture: ComponentFixture<AddBlockDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlockDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
