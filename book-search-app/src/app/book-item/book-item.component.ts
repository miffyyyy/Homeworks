import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  books?: any[];

  constructor(private bookService: BookService) {}

  searchBooks(bookname: string): void {
    this.bookService.getBooks(bookname).subscribe((data: any) => {
      this.books = data.items;
    });
  }
}
