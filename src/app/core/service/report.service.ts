import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  incidentComment = '';
  selectedTags: string[] = [];

  constructor() {
    if (window.sessionStorage.getItem('incidentComment')) {
      this.incidentComment = window.sessionStorage.getItem('incidentComment');
      this.selectedTags = window.sessionStorage.getItem('selectedTags').split(',');
    }
  }

  setInfo(incidentComment, selectedTags) {
    window.sessionStorage.setItem('incidentComment', incidentComment);
    window.sessionStorage.setItem('selectedTags', selectedTags);
    this.incidentComment = incidentComment;
    this.selectedTags = selectedTags;
  }
}
