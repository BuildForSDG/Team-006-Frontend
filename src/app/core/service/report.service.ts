import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  incidentComment: string;
  selectedTags: string[];

  constructor() {}

  setInfo(incidentComment, selectedTags) {
    this.incidentComment = incidentComment;
    this.selectedTags = selectedTags;
  }
}
