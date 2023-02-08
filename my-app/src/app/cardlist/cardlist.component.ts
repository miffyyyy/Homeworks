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
        },

        {
            title: 'Aliquet porttitor lacus luctus accumsan tortor posuere',
            content:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
            color: 'Black',
        },

        {
            title: 'Dolor morbi non arcu risus quis varius',
            content:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...  ',
            color: 'Red',
        },

        {
            title: 'Sed egestas egestas fringilla phasellus faucibus scelerisque',
            content:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
            color: 'Green',
        },
    ];

    // variable

    // lifecycle
    constructor() { }

    ngOnInit(): void { }

    // methods
    disableBorders(color: string) {
        console.log(color);

    }
}
