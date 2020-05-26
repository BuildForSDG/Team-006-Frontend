import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportersDashboardComponent } from './reporters-dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../core/service/report.service';
import { ScreenWidthService } from '../../core/service/screen-width.service';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../core/service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportConfirmationComponent } from '../report-confirmation/report-confirmation.component';

const authState = {
  isAnonymous: true,
  uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
};

const mockAngularFireAuth: any = {
  auth: jasmine.createSpyObj('auth', {
    signInAnonymously: Promise.resolve() /* reject({
      code: 'auth/operation-not-allowed'
    }) */
      .catch((error) => error),
    signInWithPopup: Promise.resolve().catch((error) => error),
    signOut: Promise.resolve().catch((error) => error)
  }),
  authState: of(authState)
};

describe('ReportersDashboardComponent', () => {
  let component: ReportersDashboardComponent;
  let fixture: ComponentFixture<ReportersDashboardComponent>;
  let reportService: ReportService;
  let mockReportService;
  let screenWidthService;
  const listOfTags = ['fire', 'accident', 'water'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportersDashboardComponent, ReportConfirmationComponent],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'report/confirmation', component: ReportConfirmationComponent }]),
        SharedModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        {
          provide: AuthService,
          useClass: AuthService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportersDashboardComponent);
    mockReportService = jasmine.createSpyObj('ReportService', ['setInfo']);
    screenWidthService = new ScreenWidthService();
    component = fixture.componentInstance;
    fixture.detectChanges();
    reportService = TestBed.get(ReportService);
    window.sessionStorage.setItem('selectedTags', `${listOfTags}`);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Tag selection', () => {
    it('should have no tag selected to start', () => {
      component.selectedTags = [];
      expect(component.selectedTags.length).toBe(0);
    });

    it('should select a tag', () => {
      component.selectTag('fire');

      expect(component.selectedTags[0]).toBe('fire');
    });

    it('should remove a tag', () => {
      component.selectedTags = listOfTags;
      const tagToRemove = component.selectedTags[1];

      component.removeTag(tagToRemove);

      expect(component.selectedTags).not.toContain(tagToRemove);
    });

    it('should set "incidentComment" and "selectedTags" properties in reportService', () => {
      component.selectedTags = listOfTags;

      spyOn(reportService, 'setInfo').and.callThrough();

      const formValue = { incidentComment: 'Test incident comment' };
      component.submitForm(formValue);

      expect(reportService.setInfo).toHaveBeenCalled();
    });
  });
});
