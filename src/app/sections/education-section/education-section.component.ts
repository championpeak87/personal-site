import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'src/app/components/timeline/timeline-item';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss']
})
export class EducationSectionComponent implements OnInit {
  public educationHistory: TimelineItem[] = [{
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }, {
    timestamp: '1.1.1990',
    header: "Gymnázium",
    message: "Lorem ipsum"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
