import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { wishBook } from '../interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent {
  wishList: wishBook[] = [];
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    // console.log('qq', typeof this.bookService, this.bookService);
    this.bookService.wishList$.subscribe((data: any) => {
      // console.log('xxxx');
      this.wishList = data;
    });
  }
  // ngOnDestroy(): void {
  //   this.bookService.wishList$.unsubscribe();
  // }
}
