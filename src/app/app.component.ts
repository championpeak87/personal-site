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

  scroll = () => {
    // DIM BACKGROUND WHEN SMALL WIDTH
    if (window.innerWidth < 1100 && window.pageYOffset > 20)
      document.getElementById('app-nav').classList.add('dimmer');
    else document.getElementById('app-nav').classList.remove('dimmer');

    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const edu = document.getElementById('edu');
    const projects = document.getElementById('projects');
    const dev = document.getElementById('dev');
    const contact = document.getElementById('contact');

    const home_pos = home.getBoundingClientRect();
    const about_pos = about.getBoundingClientRect();
    const edu_pos = edu.getBoundingClientRect();
    const projects_pos = projects.getBoundingClientRect();
    const dev_pos = dev.getBoundingClientRect();
    const contact_pos = contact.getBoundingClientRect();

    // checking home section
    if (home_pos.top >= 0 && home_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/']);
    }

    else if (home_pos.top < window.innerHeight && home_pos.bottom >= 0) {
      this.router.navigate(['/']);
    }

    // checking about section
    else if (about_pos.top >= 0 && about_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/about']);
    }

    else if (about_pos.top < window.innerHeight && about_pos.bottom >= 0) {
      this.router.navigate(['/about']);
    }

    // checking edu section
    else if (edu_pos.top >= 0 && edu_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/edu']);
    }

    else if (edu_pos.top < window.innerHeight && edu_pos.bottom >= 0) {
      this.router.navigate(['/edu']);
    }

    // checking projects section
    else if (projects_pos.top >= 0 && projects_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/projects']);
    }

    else if (projects_pos.top < window.innerHeight && projects_pos.bottom >= 0) {
      this.router.navigate(['/projects']);
    }

    // checking devstack section
    else if (dev_pos.top >= 0 && dev_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/dev']);
    }

    else if (dev_pos.top < window.innerHeight && dev_pos.bottom >= 0) {
      this.router.navigate(['/dev']);
    }

    // checking contact section
    else if (contact_pos.top >= 0 && contact_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/contact']);
    }

    else if (contact_pos.top < window.innerHeight && contact_pos.bottom >= 0) {
      this.router.navigate(['/contact']);
    }
  }

  public ngOnInit() {
    AOS.init();
    window.addEventListener("scroll", lodash.throttle(this.scroll, 100), true);
  }
}
