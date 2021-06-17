import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  scroll = () => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const exp = document.getElementById('exp');
    const dev = document.getElementById('dev');
    const contact = document.getElementById('contact');

    const home_pos = home.getBoundingClientRect();
    const about_pos = about.getBoundingClientRect();
    const exp_pos = exp.getBoundingClientRect();
    const dev_pos = dev.getBoundingClientRect();
    const contact_pos = contact.getBoundingClientRect();

    // checking home section
    if (home_pos.top >= 0 && home_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/']);
    }

    else if (home_pos.top < window.innerHeight && home_pos.bottom >= 0) {
      this.router.navigate(['/']);
    }

    // checking home section
    else if (about_pos.top >= 0 && about_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/about']);
    }

    else if (about_pos.top < window.innerHeight && about_pos.bottom >= 0) {
      this.router.navigate(['/about']);
    }

    // checking home section
    else if (exp_pos.top >= 0 && exp_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/exp']);
    }

    else if (exp_pos.top < window.innerHeight && exp_pos.bottom >= 0) {
      this.router.navigate(['/exp']);
    }

    // checking home section
    else if (dev_pos.top >= 0 && dev_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/dev']);
    }

    else if (dev_pos.top < window.innerHeight && dev_pos.bottom >= 0) {
      this.router.navigate(['/dev']);
    }

    // checking home section
    else if (contact_pos.top >= 0 && contact_pos.bottom <= window.innerHeight) {
      this.router.navigate(['/contact']);
    }

    else if (contact_pos.top < window.innerHeight && contact_pos.bottom >= 0) {
      this.router.navigate(['/contact']);
    }
  }

  public ngOnInit() {
    window.addEventListener("scroll", this.scroll, true);
  }

  // @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
  //   this.scroll();
  // }
}
