import { Component, OnInit } from '@angular/core';
import { ItemcardWideItem } from 'src/app/components/itemcard-wide/itemcard-wide-item';

@Component({
  selector: 'app-dev-section',
  templateUrl: './dev-section.component.html',
  styleUrls: ['./dev-section.component.scss']
})
export class DevSectionComponent implements OnInit {
  public devstackItems: ItemcardWideItem[] = [{
    img: '../../../assets/angular.svg',
    header: 'Angular',
    description: 'A single page web framework',
    percentage: 60
  },
  {
    img: '../../../assets/postgresql.svg',
    header: 'PostgreSQL',
    description: 'A relational database software',
    percentage: 50
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
