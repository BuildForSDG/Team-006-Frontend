import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterAuthButtonsComponent } from './reporter-auth-buttons.component';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/service/auth.service';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';

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

describe('ReporterAuthButtonsComponent', () => {
  let component: ReporterAuthButtonsComponent;
  let fixture: ComponentFixture<ReporterAuthButtonsComponent>;
  const mockAuthService = jasmine.createSpyObj(['logout', 'loginWithGoogle', 'loginWithFacebook']);
  const mockScreenWidthService = jasmine.createSpyObj(['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterAuthButtonsComponent],
      imports: [SharedModule, FormsModule],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AuthService, useValue: mockAuthService },
        { provide: ScreenWidthService, useValue: mockScreenWidthService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterAuthButtonsComponent);
    component = new ReporterAuthButtonsComponent(mockAuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
