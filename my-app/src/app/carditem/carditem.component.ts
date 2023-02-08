import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
    selector: 'app-carditem',
    templateUrl: './carditem.component.html',
    styleUrls: ['./carditem.component.css'],
})
export class CardItemComponent implements OnInit {
    @Input() card!: Card;
    @Output() idemiter = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    click() {
        this.idemiter.emit(this.card.color);
    }
}
