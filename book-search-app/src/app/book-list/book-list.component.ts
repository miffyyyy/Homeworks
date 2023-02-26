import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { EachBook, wishBook } from '../interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: EachBook[] = [];
  wishlist: wishBook[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // this.bookService.getBooks('java').subscribe();
    this.bookService.bookList$.subscribe((data: any) => {
      this.bookList = data;
      console.log(this.bookList);
    });
  }
  addBookToWishlist(name: string) {
    const book = { name };
    this.wishlist.push(book);
  }
}
