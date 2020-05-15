import { Component, OnInit } from '@angular/core';
import { ReportService } from '../core/service/report.service';

@Component({
  selector: 'app-reporters-dashboard',
  templateUrl: './reporters-dashboard.component.html',
  styleUrls: ['./reporters-dashboard.component.scss']
})
export class ReportersDashboardComponent implements OnInit {
  incidentComment = '';
  listOfTags = ['fire', 'accident', 'water'];

  selectedTags: string[] = [];

  constructor(public reportService: ReportService) {}

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
      console.log(this.selectedTags);
    }
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter((t) => {
      return t !== tag;
    });
    console.log(this.selectedTags);
  }

  submitForm(formValue) {
    this.reportService.setInfo(formValue, this.selectedTags);
    console.log(this.reportService.incidentComment)
    console.log(this.reportService.selectedTags)
  }
}
