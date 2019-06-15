import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmdSelectorComponent } from './hmd-selector.component';

describe('HmdSelectorComponent', () => {
  let component: HmdSelectorComponent;
  let fixture: ComponentFixture<HmdSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmdSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
