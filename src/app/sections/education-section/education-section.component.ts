import { Component, HostListener, OnInit } from '@angular/core';
import { TimelineItem } from 'src/app/components/timeline/timeline-item';
import { TimelineOrientation } from 'src/app/components/timeline/timeline.component';
import * as lodash from 'lodash';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss']
})
export class EducationSectionComponent implements OnInit {
  public educationHistory: TimelineItem[] = [{
    timestamp: 'september 2020 - now',
    header: "FIIT STU",
    message: 'Masters degree'
  },{
    timestamp: 'september 2017 - june 2020',
    header: "FIIT STU",
    message: "Bachelors degree"
  }, {
    timestamp: 'september 2013 - june 2017',
    header: "Gymnázium Dominika Tatarku",
    message: "Higher secondary education"
  }];

  public timelineOrientation: TimelineOrientation = TimelineOrientation.VERTICAL_RIGHT;

  constructor() { }

  ngOnInit(): void {
    this.checkOrientation();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // lodash.throttle(() => {
    this.checkOrientation();
    // }, 200);
  }

  private checkOrientation() {
    if (window.innerWidth < 1100)
      this.timelineOrientation = TimelineOrientation.VERTICAL_RIGHT;
    else
      this.timelineOrientation = TimelineOrientation.HORIZONTAL_LOWER;
  }
}
