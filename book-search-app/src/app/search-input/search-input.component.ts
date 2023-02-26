import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, mergeMap, Subscription } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  bookname: string = '';
  @ViewChild('inputbook', { static: true }) inputbox!: ElementRef;
  subsq = new Subscription();

  constructor(private Bookservice: BookService) {}

  ngOnInit(): void {
    this.subsq = fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        mergeMap(() => {
          return this.Bookservice.getBooks(this.bookname);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }
}
