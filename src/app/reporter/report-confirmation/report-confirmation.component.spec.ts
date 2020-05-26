import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportConfirmationComponent } from './report-confirmation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReportConfirmationComponent', () => {
  let component: ReportConfirmationComponent;
  let fixture: ComponentFixture<ReportConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportConfirmationComponent],
      imports: [SharedModule, RouterTestingModule]
    }).compileComponents();
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
