import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterSigninComponent } from './reporter-signin.component';

describe('ReporterSigninComponent', () => {
  let component: ReporterSigninComponent;
  let fixture: ComponentFixture<ReporterSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
