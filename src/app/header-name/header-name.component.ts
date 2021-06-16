import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-header-name',
  templateUrl: './header-name.component.html',
  styleUrls: ['./header-name.component.scss']
})
export class HeaderNameComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Web developer', 'Android developer', 'Angular developer', 'Java developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      showCursor: true,
      loop: true
    };
  
    const typed = new Typed('.subheader', options);
  }

}
