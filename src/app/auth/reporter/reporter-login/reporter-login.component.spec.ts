import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterLoginComponent } from './reporter-login.component';

describe('ReporterLoginComponent', () => {
  let component: ReporterLoginComponent;
  let fixture: ComponentFixture<ReporterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReporterLoginComponent]
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
