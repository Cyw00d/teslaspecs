import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmdSelectorItemComponent } from './hmd-selector-item.component';

describe('HmdSelectorItemComponent', () => {
  let component: HmdSelectorItemComponent;
  let fixture: ComponentFixture<HmdSelectorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmdSelectorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmdSelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
