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
  @Input('flipPosition') public flipPosition: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
