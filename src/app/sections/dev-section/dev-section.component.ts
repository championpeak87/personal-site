import { Component, OnInit } from '@angular/core';
import { ItemcardWideItem } from 'src/app/components/itemcard-wide/itemcard-wide-item';

@Component({
  selector: 'app-dev-section',
  templateUrl: './dev-section.component.html',
  styleUrls: ['./dev-section.component.scss']
})
export class DevSectionComponent implements OnInit {
  public devstackWebItems: ItemcardWideItem[] = [{
    img: '../../../assets/angular.svg',
    header: 'Angular',
    description: 'A single page web framework',
    percentage: 60
  },
  {
    img: '../../../assets/react.svg',
    header: 'React',
    description: 'A web development library',
    percentage: 20
  },
  {
    img: '../../../assets/nodejs.svg',
    header: 'Node.JS',
    description: 'A JavaScript runtime',
    percentage: 50
  }];

  public devstackMobileItems: ItemcardWideItem[] = [{
    img: '../../../assets/android.svg',
    header: 'Android framework',
    description: 'Development of Android mobile apps',
    percentage: 70
  }];

  public devstackOtherItems: ItemcardWideItem[] = [{
    img: '../../../assets/git.svg',
    header: 'GIT',
    description: 'A version control system',
    percentage: 70
  },
{
  img: '../../../assets/docker.svg',
  header: 'Docker',
  description: 'A containerization tool',
  percentage: 70
},
{
  img: '../../../assets/jenkins.svg',
  header: 'Jenkins',
  description: 'A tool for automated building and deployment',
  percentage: 20
}, 
{
  img: '../../../assets/spring.svg',
  header: 'Spring framework',
  description: 'A backend framework',
  percentage: 30
}];

  constructor() { }

  ngOnInit(): void {
  }

}
