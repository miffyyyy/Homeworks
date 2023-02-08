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
        'Neque porroLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyorroLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...  ',
      color: 'Blue',
    },

    {
      title: 'Aliquet porttitor lacus luctus accumsan tortor posuere',
      content:
        'Neque porroLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially orroLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem IpNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
      color: 'Black',
    },

    {
      title: 'Dolor morbi non arcu risus quis varius',
      content:
        'Neque Neque porroLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shorroLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialleets containing Lorem Ipporro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...  ',
      color: 'Red',
    },

    {
      title: 'Sed egestas egestas fringilla phasellus faucibus scelerisque',
      content:
        'Neque porroLorem IpsorroLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallm is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem IpNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
      color: 'Green',
    },
  ];

  // variable

  // lifecycle
  constructor() {}

  ngOnInit(): void {}

  initCardStyle(card: Card) {
    if (card.color === this.titleColor) {
      return {
        'box-shadow': ['10px', '10px', 0, this.titleColor].join(' '),
        'border-radius': '8px',
        border: ['1px', 'solid', this.titleColor].join(' '),
      };
    } else {
      return {
        'box-shadow': '',
        'border-radius': '8px',
        border: '',
      };
    }
  }

  // methods
  changeColor(color: string) {
    // console.log(color);
    console.log('xxx');
    this.titleColor = color;
  }
}
