import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input('timestamp') public timestamp: string;
  @Input('header') public header: string;
  @Input('message') public message: string;
  @Input('barPosition') public barPosition: BarPosition;

  constructor() { }

  ngOnInit(): void {
    console.log("BAR POSITION " + this.barPosition);
  }

}

export enum BarPosition {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT"
};
