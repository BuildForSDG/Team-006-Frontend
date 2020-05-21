import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportersDashboardComponent } from './reporters-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../core/service/report.service';

describe('ReportersDashboardComponent', () => {
  let component: ReportersDashboardComponent;
  let fixture: ComponentFixture<ReportersDashboardComponent>;
  let reportService: ReportService;
  let mockReportService;
  const listOfTags = ['fire', 'accident', 'water'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportersDashboardComponent],
      imports: [SharedModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportersDashboardComponent);
    mockReportService = jasmine.createSpyObj(['setInfo']);
    component = new ReportersDashboardComponent(mockReportService);
    fixture.detectChanges();
    reportService = new ReportService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Tag selection', () => {
    it('should have no tag selected to start', () => {
      expect(component.selectedTags.length).toBe(0);
    });

    it('should select a tag', () => {
      component.selectTag('fire');

      expect(component.selectedTags[0]).toBe('fire');
    });

    it('should remove a tag', () => {
      component.selectedTags = listOfTags;
      const tagToRemove = component.selectedTags[1];

      component.removeTag(tagToRemove);

      expect(component.selectedTags).not.toContain(tagToRemove);
    });

    it('should set "incidentComment" and "selectedTags" properties in reportService', () => {
      component.selectedTags = listOfTags;

      component.submitForm('Test incident comment');

      expect(mockReportService.setInfo).toHaveBeenCalled();
    });
  });
});
