import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConfirmationComponent } from './profile-confirmation.component';

describe('ProfileConfirmationComponent', () => {
  let component: ProfileConfirmationComponent;
  let fixture: ComponentFixture<ProfileConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileConfirmationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
