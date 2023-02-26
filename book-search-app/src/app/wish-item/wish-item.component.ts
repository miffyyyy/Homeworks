import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { wishBook } from '../interface';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent {
  @Input() book!: wishBook;
  // subsq = new Subscription();
  // constructor(private elRef: ElementRef) {}
  // @ViewChild('myButton', { static: true }) myButton!: ElementRef;

  // ngOnInit(): void {
  //   // this.subsq = fromEvent(this.myButton.nativeElement, 'click').subscribe(
  //   //   () => {
  //   //     console.log('Button clicked!');
  //   //   }
  //   // );
  // }

  // ngOnDestroy(): void {
  //   this.subsq.unsubscribe();
  // }
}
