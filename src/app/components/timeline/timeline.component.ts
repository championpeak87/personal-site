import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from './timeline-item';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input('items') public items: TimelineItem[];
  @Input('orientation') public orientation: TimelineOrientation;

  constructor() { }

  ngOnInit(): void { }

  public getOrientation() {
    switch (this.orientation) {
      case TimelineOrientation.HORIZONTAL_UPPER:
      case TimelineOrientation.HORIZONTAL_LOWER:
        return true;

      case TimelineOrientation.VERTICAL_LEFT:
      case TimelineOrientation.VERTICAL_RIGHT:
        return false;
      default:
        break;
    }
  }

}

export enum TimelineOrientation {
  HORIZONTAL_UPPER = "HORIZONTAL_UPPER",
  HORIZONTAL_LOWER = "HORIZONTAL_LOWER",
  VERTICAL_LEFT = "VERTICAL_LEFT",
  VERTICAL_RIGHT = "VERTICAL_RIGHT"
};
