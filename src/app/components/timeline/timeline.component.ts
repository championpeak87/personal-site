import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from './timeline-item';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input('items') public items: TimelineItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
