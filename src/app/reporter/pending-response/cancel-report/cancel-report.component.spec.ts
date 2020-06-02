import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelReportComponent } from './cancel-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

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

describe('CancelReportComponent', () => {
  let component: CancelReportComponent;
  let fixture: ComponentFixture<CancelReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CancelReportComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: AngularFireAuth, useValue: mockAngularFireAuth }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
