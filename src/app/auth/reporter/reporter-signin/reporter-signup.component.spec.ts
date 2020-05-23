import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterSignupComponent } from './reporter-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReporterAuthButtonsComponent } from '../reporter-auth-buttons/reporter-auth-buttons.component';
import { AuthService } from 'src/app/core/service/auth.service';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';

describe('ReporterSignupComponent', () => {
  let component: ReporterSignupComponent;
  let fixture: ComponentFixture<ReporterSignupComponent>;
  const mockAuthService = jasmine.createSpyObj(['logout', 'loginWithGoogle', 'loginWithFacebook']);
  const mockScreenWidthService = jasmine.createSpyObj(['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterSignupComponent, ReporterAuthButtonsComponent],
      imports: [SharedModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: ScreenWidthService, useValue: mockScreenWidthService }
      ]
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
