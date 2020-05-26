import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/service/report.service';
import { ScreenWidthService } from 'src/app/core/service/screen-width.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporters-dashboard',
  templateUrl: './reporters-dashboard.component.html',
  styleUrls: ['./reporters-dashboard.component.scss']
})
export class ReportersDashboardComponent implements OnInit {
  incidentComment = '';
  listOfTags = ['fire', 'accident', 'water'];

  selectedTags: string[] = [];
  constructor(
    public reportService: ReportService,
    public screenWidthService: ScreenWidthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.reportService.incidentComment) {
      this.incidentComment = this.reportService.incidentComment;
      this.selectedTags = this.reportService.selectedTags;
    }
  }

  selectTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      return;
    } else {
      this.selectedTags.unshift(tag);
    }
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter((t) => {
      return t !== tag;
    });
  }

  submitForm(formValue) {
    this.reportService.setInfo(formValue.incidentComment, this.selectedTags);
    this.router.navigate(['/report/confirmation']);
  }
}
