import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
    selector: 'app-cardlist',
    templateUrl: './cardlist.component.html',
    styleUrls: ['./cardlist.component.css'],
})
export class CardListComponent implements OnInit {
    titleColor = 'black';
    cards: Card[] = [
        {
            title: 'Lorem ipsum dolor sit amet',
            content:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...  ',
            color: 'Blue',
            hasBorder: '0px',
            hasShadow: 'none',
        },

        {
            title: 'Aliquet porttitor lacus luctus accumsan tortor posuere',
            content:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
            color: 'Black',
            hasBorder: '0px',
            hasShadow: 'none',
        },

        {
            title: 'Dolor morbi non arcu risus quis varius',
            content:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...  ',
            color: 'Red',
            hasBorder: '0px',
            hasShadow: 'none',
        },

        {
            title: 'Sed egestas egestas fringilla phasellus faucibus scelerisque',
            content:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
            color: 'Green',
            hasBorder: '0px',
            hasShadow: 'none',
        },
    ];

    // variable

    // lifecycle
    constructor() { }

    ngOnInit(): void { }

    // methods
    disableBorders(emittedCards: Card) {
        this.titleColor = emittedCards.color;
        for (const card of this.cards) {
            if (card != emittedCards) {
                card.hasBorder = '0px';
                card.hasShadow = 'none';
            }
        }
    }
}
