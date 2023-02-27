import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { BookService } from '../book.service';
import { EachBook, wishBook } from '../interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  constructor(private bookService: BookService) {}

  @Input() bookItem!: EachBook;
  @Output() addToWishlist = new EventEmitter<string>();

  onAddToWishlist() {
    this.bookService.addWishList({ name: this.bookItem.name });
  }
}
