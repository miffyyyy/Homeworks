import { Component, Input } from '@angular/core';
import { BookService } from '../book.service';
import { EachBook } from '../interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() bookItem!: EachBook;
}
