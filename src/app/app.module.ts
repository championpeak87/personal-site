import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNameComponent } from './components/header-name/header-name.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { DevSectionComponent } from './sections/dev-section/dev-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { EducationSectionComponent } from './sections/education-section/education-section.component';
import { HorizontalSplitComponent } from './components/horizontal-split/horizontal-split.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNameComponent,
    NavBarComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    DevSectionComponent,
    ContactSectionComponent,
    EducationSectionComponent,
    HorizontalSplitComponent,
    TimelineItemComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
