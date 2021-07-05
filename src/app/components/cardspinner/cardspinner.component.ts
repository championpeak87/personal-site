import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../itemcard/card-item';

@Component({
  selector: 'app-cardspinner',
  templateUrl: './cardspinner.component.html',
  styleUrls: ['./cardspinner.component.scss']
})
export class CardspinnerComponent implements OnInit {
  @Input('items') items: any;

  public testcard: CardItem = {
    header: "Hello",
    description: "world",
    link: "www.google.com",
    img: "https://thumbs.dreamstime.com/b/tropical-green-leaves-piture-frame-color-background-copy-space-top-view-218890396.jpg"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
