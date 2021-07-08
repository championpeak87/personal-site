import { Component, OnInit } from '@angular/core';
import { ItemcardWideItem } from 'src/app/components/itemcard-wide/itemcard-wide-item';
import * as lodash from 'lodash';

@Component({
  selector: 'app-dev-section',
  templateUrl: './dev-section.component.html',
  styleUrls: ['./dev-section.component.scss']
})
export class DevSectionComponent implements OnInit {
  public webAnimation:boolean = false;
  public mobileAnimation:boolean = false;
  public otherAnimation: boolean = false;

  public devstackWebItems: ItemcardWideItem[] = [{
    img: '../../../assets/angular.svg',
    header: 'Angular',
    description: 'A single page web framework',
    percentage: 60,
    experience: 'Intermediate',
    features: [
      'Single-page routing',
      'Data-binding',
      'Localization',
      'Reactive / Template-driven forms',
      'Custom components with I/O',
      'Dependency Injection',
      'etc.'
    ]
  },
  {
    img: '../../../assets/react.svg',
    header: 'React',
    description: 'A web development library',
    percentage: 20,
    experience: 'Beginner',
    features: [
      'Simple page routing',
      'Custom component',
      'One-way data binding'
    ]
  },
  {
    img: '../../../assets/nodejs.svg',
    header: 'Node.JS',
    description: 'A JavaScript runtime',
    percentage: 50,
    experience: 'Intermediate',
    features: [
      'RESTapi backend using EXPRESS.js',
      'Interface for PostgreSQL',
      'Accessing filesystem, generating XML documents'
    ]
  }];

  public devstackMobileItems: ItemcardWideItem[] = [{
    img: '../../../assets/android.svg',
    header: 'Android framework',
    description: 'Development of Android mobile apps',
    percentage: 60,
    experience: 'Intermediate',
    features: [
      'Custom views',
      'Making RESTapi requests',
      'Custom user interfaces',
      'Animations'
    ]
  }];

  public devstackOtherItems: ItemcardWideItem[] = [{
    img: '../../../assets/git.svg',
    header: 'GIT',
    description: 'A version control system',
    percentage: 70,
    experience: 'Intermediate',
    features: [
      'Setting up a remote repository',
      'Dealing with merge conflicts',
      'Making pull requests, merging various branches'
    ]
  },
{
  img: '../../../assets/docker.svg',
  header: 'Docker',
  description: 'An application containerization tool',
  percentage: 50,
  experience: 'Intermediate',
  features: [
    'Building custom Docker images',
    'Creating a docker-compose file to link various containers'
  ]
},
{
  img: '../../../assets/jenkins.svg',
  header: 'Jenkins',
  description: 'A tool for automated building and deployment',
  percentage: 20,
  experience: 'Begginer',
  features: [
    'Automating deployment process at git push',
    'Automated building and deployment'
  ]
}, 
{
  img: '../../../assets/spring.svg',
  header: 'Spring framework',
  description: 'A backend framework',
  percentage: 30,
  experience: 'Begginer',
  features: [
    'A SOAP server application',
    'RESTapi server application',
    'Website built using Thymeleaf'
  ]
}];

scroll = () => {
  const webSection = document.getElementById('websection');
  const mobileSection = document.getElementById('mobilesection');
  const otherSection = document.getElementById('othersection');
  
  const webSection_pos = webSection.getBoundingClientRect();
  const mobileSection_pos = mobileSection.getBoundingClientRect();
  const otherSection_pos = otherSection.getBoundingClientRect();
  
    

    // checking home section
    if ((webSection_pos.top >= 0 && webSection_pos.bottom <= window.innerHeight) || webSection_pos.top < window.innerHeight && webSection_pos.bottom >= 0) {
      // Perform animation
      this.webAnimation = true;
    }

    if ((mobileSection_pos.top >= 0 && mobileSection_pos.bottom <= window.innerHeight) || mobileSection_pos.top < window.innerHeight && mobileSection_pos.bottom >= 0) {
      // Perform animation
      this.mobileAnimation = true;
    }
    
    if ((otherSection_pos.top >= 0 && otherSection_pos.bottom <= window.innerHeight) || otherSection_pos.top < window.innerHeight && otherSection_pos.bottom >= 0) {
      // Perform animation
      this.otherAnimation = true;
    }
}

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('scroll', lodash.throttle(this.scroll, 100), true);
  }

}
