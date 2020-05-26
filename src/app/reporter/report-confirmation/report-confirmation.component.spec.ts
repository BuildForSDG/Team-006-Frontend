import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportConfirmationComponent } from './report-confirmation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

const listOfTags = ['fire', 'accident', 'water'];

describe('ReportConfirmationComponent', () => {
  let component: ReportConfirmationComponent;
  let fixture: ComponentFixture<ReportConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportConfirmationComponent],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([{ path: 'report/confirmation', component: ReportConfirmationComponent }])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    window.sessionStorage.setItem('selectedTags', `${listOfTags}`);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
