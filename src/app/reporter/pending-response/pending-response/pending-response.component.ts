import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, QueryList, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pending-response',
  templateUrl: './pending-response.component.html',
  styleUrls: ['./pending-response.component.scss']
})
export class PendingResponseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('firstAidTips') firstAidTips: QueryList<any>;
  firstAidTipInterval;
  counter = 0;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Set display of all first-aid tips li to none
    this.firstAidTips.forEach((li) => {
      li.nativeElement.style.display = 'none';
    });

    // Set display of the first first-aid tips to flex
    this.firstAidTips.toArray()[this.counter].nativeElement.style.display = 'flex';

    // After 5 seconds, set the display of the current first-aid li in the queryList array to none and the next to flex
    this.firstAidTipInterval = setInterval(() => {
      if (this.counter > this.firstAidTips.length - 1) {
        this.counter = 0;
        this.firstAidTips.toArray()[this.firstAidTips.length - 1].nativeElement.style.display = 'none';
      }

      if (this.counter) {
        this.firstAidTips.toArray()[this.counter - 1].nativeElement.style.display = 'none';
      }

      this.firstAidTips.toArray()[this.counter].nativeElement.style.display = 'flex';
      this.counter++;
    }, 7000);
  }

  ngOnDestroy() {
    clearInterval(this.firstAidTipInterval);
  }
}
