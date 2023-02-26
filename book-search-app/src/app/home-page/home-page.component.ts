import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  showWishlist: boolean = false;
  constructor() {
    this.showWishlistHandler = this.showWishlistHandler.bind(this);
    this.showHomeHandler = this.showHomeHandler.bind(this);
  }
  showWishlistHandler() {
    this.showWishlist = true;
  }
  showHomeHandler() {
    this.showWishlist = false;
  }
}
