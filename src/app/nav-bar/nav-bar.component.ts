import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goHome() {
    document.getElementById('home').scrollIntoView({behavior: 'smooth'});
  }

  public goAbout() {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  }

  public goDev() {
    document.getElementById('dev').scrollIntoView({behavior: 'smooth'});
  }

  public goExp() {
    document.getElementById('exp').scrollIntoView({behavior: 'smooth'});
  }
}
