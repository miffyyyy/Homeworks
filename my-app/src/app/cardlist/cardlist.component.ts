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
                'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Imperdiet sed euismod nisi porta. Dictumst vestibulum rhoncus est pellentesque elit. Est sit amet facilisis magna etiam tempor. Habitasse platea dictumst vestibulum rhoncus est pellentesque.  ',
            color: 'Blue',
            hasBorder: '0px',
            hasShadow: 'none',
        },

        {
            title: 'Aliquet porttitor lacus luctus accumsan tortor posuere',
            content:
                'Sed elementum tempus egestas sed sed risus pretium. Orci ac auctor augue mauris. Volutpat est velit egestas dui id. Duis tristique sollicitudin nibh sit amet commodo. Eget nullam non nisi est sit. Sit amet consectetur adipiscing elit duis tristique. Senectus et netus et malesuada fames ac turpis. ',
            color: 'Black',
            hasBorder: '0px',
            hasShadow: 'none',
        },

        {
            title: 'Dolor morbi non arcu risus quis varius',
            content:
                'Enim nulla aliquet porttitor lacus luctus accumsan. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Malesuada proin libero nunc consequat. Iaculis eu non diam phasellus vestibulum. Duis at tellus at urna condimentum mattis pellentesque id nibh.  ',
            color: 'Red',
            hasBorder: '0px',
            hasShadow: 'none',
        },

        {
            title: 'Sed egestas egestas fringilla phasellus faucibus scelerisque',
            content:
                'Nec dui nunc mattis enim ut tellus elementum sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Ipsum dolor sit amet consectetur adipiscing. In aliquam sem fringilla ut morbi. Faucibus interdum posuere lorem ipsum dolor sit. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin.  ',
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
