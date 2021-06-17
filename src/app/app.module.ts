import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNameComponent } from './components/header-name/header-name.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ExpSectionComponent } from './sections/exp-section/exp-section.component';
import { DevSectionComponent } from './sections/dev-section/dev-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { EducationSectionComponent } from './sections/education-section/education-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNameComponent,
    NavBarComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ExpSectionComponent,
    DevSectionComponent,
    ContactSectionComponent,
    EducationSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
