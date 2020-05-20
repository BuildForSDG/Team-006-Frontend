import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterLoginComponent } from './reporter-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/core/service/auth.service';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';

describe('ReporterLoginComponent', () => {
  let component: ReporterLoginComponent;
  let fixture: ComponentFixture<ReporterLoginComponent>;
  const mockAuthService = jasmine.createSpyObj(['logout', 'loginWithGoogle', 'loginWithFacebook']);
  const mockScreenWidthService = jasmine.createSpyObj(['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterLoginComponent],
      imports: [SharedModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: ScreenWidthService, useValue: mockScreenWidthService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
