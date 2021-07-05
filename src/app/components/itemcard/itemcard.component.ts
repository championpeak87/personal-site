import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardItem } from './card-item';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss']
})
export class ItemcardComponent implements OnInit {
  @Input('item') item: CardItem;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openProject(item: CardItem) {
    window.location.href = item.link;
  }

}
