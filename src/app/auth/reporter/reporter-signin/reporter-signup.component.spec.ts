import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterSignupComponent } from './reporter-signup.component';

describe('ReporterSignupComponent', () => {
  let component: ReporterSignupComponent;
  let fixture: ComponentFixture<ReporterSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterSignupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
