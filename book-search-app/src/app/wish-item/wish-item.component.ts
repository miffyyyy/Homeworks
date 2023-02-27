import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../book.service';
import { wishBook } from '../interface';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent {
  constructor(private BookService: BookService) {}
  @Input() book!: wishBook;
  @Output() RemoveFromWishlist = new EventEmitter<string>();

  onRemoveFromWishlist() {
    console.log('remove', this.book.name);

    this.BookService.deleteWishList(this.book.name);
  }
}
