import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterHistoryDetailsComponent } from './reporter-history-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

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

describe('ReporterHistoryDetailsComponent', () => {
  let component: ReporterHistoryDetailsComponent;
  let fixture: ComponentFixture<ReporterHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterHistoryDetailsComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: AngularFireAuth, useValue: mockAngularFireAuth }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
