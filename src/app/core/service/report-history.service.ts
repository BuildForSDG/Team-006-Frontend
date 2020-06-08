import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportHistoryService {
  reportHistory = [
    {
      id: 1,
      location: 'XYZ street, off abc avenue',
      date: '12/3/14 3:00 p.m.',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Atque architecto libero excepturi, itaque esse accusamus autem quas modi omnis voluptatibus.`,
      tags: ['fire', 'accident'],
      responder: {
        name: 'One Life Hospital',
        address: 'Somewhere in a place',
        groundResponders: ['John Doe', 'Jane Doe', 'Jessy Doe'],
        timeOfArrival: '3:32 p.m.'
      }
    },
    {
      id: 2,
      location: 'Common street, off uncommon avenue',
      date: '12/3/14 3:00 p.m.',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Atque architecto libero excepturi, itaque esse accusamus autem quas modi omnis voluptatibus.`,
      tags: ['fire', 'accident'],
      responder: {
        name: 'Our Life Hospital',
        address: 'Somewhere in a place',
        groundResponders: ['Anna Smith', 'Uche Nwafor', 'Usman Ola'],
        timeOfArrival: '3:32 p.m.'
      }
    },
    {
      id: 3,
      location: 'Fiction street, off movie avenue',
      date: '12/3/14 3:00 p.m.',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Atque architecto libero excepturi, itaque esse accusamus autem quas modi omnis voluptatibus.`,
      tags: ['fire', 'accident'],
      responder: {
        name: 'Quality Life Hospital',
        address: 'Somewhere in a place',
        groundResponders: ['Evelyn Salt', 'Diana Prince', 'Pepper Pots'],
        timeOfArrival: '3:32 p.m.'
      }
    }
  ];

  constructor() {}

  getReportHistory() {
    return of(this.reportHistory);
  }

  getSingleReportHistory(reportId: number) {
    return this.reportHistory.find((report) => {
      return reportId === report.id;
    });
  }
}
