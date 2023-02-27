import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  isHidden: boolean = false;

  constructor() {
    this.showWishlistHandler = this.showWishlistHandler.bind(this);
    this.showHomeHandler = this.showHomeHandler.bind(this);
  }
  ngOnInit() {
    this.isHidden = false; // set isHidden to false when component is initialized
  }
  showWishlistHandler() {
    this.isHidden = !this.isHidden;
  }

  showHomeHandler() {
    this.isHidden = false; // always show booklist component
  }
}
