import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportConfirmationComponent } from './report-confirmation.component';

describe('ReportConfirmationComponent', () => {
  let component: ReportConfirmationComponent;
  let fixture: ComponentFixture<ReportConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
