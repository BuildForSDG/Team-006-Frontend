import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporters-dashboard',
  templateUrl: './reporters-dashboard.component.html',
  styleUrls: ['./reporters-dashboard.component.scss']
})
export class ReportersDashboardComponent implements OnInit {
  listOfTags = ['fire', 'accident', 'water'];

  selectedTags: string[] = [];

  constructor() {}

  ngOnInit() {}

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
}
