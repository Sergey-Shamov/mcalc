import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSettingsPanelComponent } from './common-settings-panel.component';

describe('CommonSettingsPanelComponent', () => {
  let component: CommonSettingsPanelComponent;
  let fixture: ComponentFixture<CommonSettingsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSettingsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSettingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
