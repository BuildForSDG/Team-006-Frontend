import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterHistoryComponent } from './reporter-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';

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

describe('ReporterHistoryComponent', () => {
  let component: ReporterHistoryComponent;
  let fixture: ComponentFixture<ReporterHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterHistoryComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: AngularFireAuth, useValue: mockAngularFireAuth }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
