import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportersDashboardComponent } from './reporters-dashboard.component';

describe('ReportersDashboardComponent', () => {
  let component: ReportersDashboardComponent;
  let fixture: ComponentFixture<ReportersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
