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
  // @Output() bookSelected = new EventEmitter<EachBook>();

  // selectBook() {
  //   this.bookSelected.emit(this.bookItem);
  // }

  @Output() addToWishlist = new EventEmitter<string>();

  onAddToWishlist() {
    console.log('lllll', this.bookItem.name);
    // this.addToWishlist.emit(this.bookItem.name);
    console.log('iiii', this.bookService);
    this.bookService.addWishList({ name: this.bookItem.name });
  }
}
