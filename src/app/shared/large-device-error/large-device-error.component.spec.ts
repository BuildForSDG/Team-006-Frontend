import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDeviceErrorComponent } from './large-device-error.component';

describe('LargeDeviceErrorComponent', () => {
  let component: LargeDeviceErrorComponent;
  let fixture: ComponentFixture<LargeDeviceErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LargeDeviceErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeDeviceErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
