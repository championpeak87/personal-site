import { Component, Input, OnInit } from '@angular/core';
import { ItemcardWideItem } from './itemcard-wide-item';

@Component({
  selector: 'app-itemcard-wide',
  templateUrl: './itemcard-wide.component.html',
  styleUrls: ['./itemcard-wide.component.scss']
})
export class ItemcardWideComponent implements OnInit {
  @Input('position') public position: LogoPosition = LogoPosition.LEFT;
  @Input('item') public item: ItemcardWideItem;
  @Input('animate') public animate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

export enum LogoPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}
