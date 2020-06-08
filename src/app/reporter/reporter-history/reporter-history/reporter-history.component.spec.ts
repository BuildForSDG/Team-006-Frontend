import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterHistoryComponent } from './reporter-history.component';

describe('ReporterHistoryComponent', () => {
  let component: ReporterHistoryComponent;
  let fixture: ComponentFixture<ReporterHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterHistoryComponent ]
    })
    .compileComponents();
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
