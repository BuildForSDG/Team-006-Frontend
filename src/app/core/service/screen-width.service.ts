import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenWidthService {
  screenWidth: number;

  constructor() {
    // Determine screen width to determin which device the user is using
    this.screenWidth = document.body.clientWidth;

    window.addEventListener('resize', () => {
      this.screenWidth = document.body.clientWidth;
      console.log(this.screenWidth);
    });
  }
}
