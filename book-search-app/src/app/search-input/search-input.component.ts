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
export class SearchInputComponent implements OnInit {
  bookname: string = '';
  @ViewChild('inputbook', { static: true }) inputbox!: ElementRef;
  subsq = new Subscription(); // the new Subscription() is needed to store the subscription object returned by the fromEvent observable, which is used to unsubscribe from the observable when the component is destroyed.

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
