import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageButtonsComponent } from './landing-page-buttons.component';

describe('LandingPageButtonsComponent', () => {
  let component: LandingPageButtonsComponent;
  let fixture: ComponentFixture<LandingPageButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
