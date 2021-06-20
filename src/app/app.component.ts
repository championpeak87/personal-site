import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import * as lodash from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  private home;
  private about;
  private edu;
  private projects;
  private dev;
  private contact;

  private home_pos;
  private about_pos;
  private edu_pos;
  private projects_pos;
  private dev_pos;
  private contact_pos;

  scroll = () => {
    // DIM BACKGROUND WHEN SMALL WIDTH
    if (window.innerWidth < 1100 && window.pageYOffset > 20)
      document.getElementById('app-nav').classList.add('dimmer');
    else document.getElementById('app-nav').classList.remove('dimmer');

    // checking home section
    if (this.home_pos.top >= 0 && this.home_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/']);
    }

    else if (this.home_pos.top < window.innerHeight && this.home_pos.bottom >= 0) {
      this.router.navigate(['/']);
    }

    // checking home section
    else if (this.edu_pos.top >= 0 && this.edu_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/edu']);
    }

    else if (this.edu_pos.top < window.innerHeight && this.edu_pos.bottom >= 0) {
      this.router.navigate(['/edu']);
    }

    // checking home section
    else if (this.about_pos.top >= 0 && this.about_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/about']);
    }

    else if (this.about_pos.top < window.innerHeight && this.about_pos.bottom >= 0) {
      this.router.navigate(['/about']);
    }

    // checking home section
    else if (this.projects_pos.top >= 0 && this.projects_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/projects']);
    }

    else if (this.projects_pos.top < window.innerHeight && this.projects_pos.bottom >= 0) {
      this.router.navigate(['/projects']);
    }

    // checking home section
    else if (this.dev_pos.top >= 0 && this.dev_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/dev']);
    }

    else if (this.dev_pos.top < window.innerHeight && this.dev_pos.bottom >= 0) {
      this.router.navigate(['/dev']);
    }

    // checking home section
    else if (this.contact_pos.top >= 0 && this.contact_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/contact']);
    }

    else if (this.contact_pos.top < window.innerHeight && this.contact_pos.bottom >= 0) {
      this.router.navigate(['/contact']);
    }
  }

  public ngOnInit() {
    this.home = document.getElementById('home');
    this.about = document.getElementById('about');
    this.edu = document.getElementById('edu');
    this.projects = document.getElementById('projects');
    this.dev = document.getElementById('dev');
    this.contact = document.getElementById('contact');

    this.home_pos = this.home.getBoundingClientRect();
    this.about_pos = this.about.getBoundingClientRect();
    this.edu_pos = this.edu.getBoundingClientRect();
    this.projects_pos = this.projects.getBoundingClientRect();
    this.dev_pos = this.dev.getBoundingClientRect();
    this.contact_pos = this.contact.getBoundingClientRect();

    AOS.init();
    window.addEventListener("scroll", lodash.throttle(this.scroll, 500), true);
  }
}
