import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterAuthButtonsComponent } from './reporter-auth-buttons.component';

describe('ReporterAuthButtonsComponent', () => {
  let component: ReporterAuthButtonsComponent;
  let fixture: ComponentFixture<ReporterAuthButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterAuthButtonsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterAuthButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
