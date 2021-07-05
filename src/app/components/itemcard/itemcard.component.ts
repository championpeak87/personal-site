import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from './card-item';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss']
})
export class ItemcardComponent implements OnInit {
  @Input('item') item: CardItem;

  constructor() { }

  ngOnInit(): void {
  }

}
