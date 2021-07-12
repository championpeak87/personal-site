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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemcardComponent } from './components/itemcard/itemcard.component';
import { CardspinnerComponent } from './components/cardspinner/cardspinner.component';
import { ItemcardWideComponent } from './components/itemcard-wide/itemcard-wide.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

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
    TimelineComponent,
    ItemcardComponent,
    CardspinnerComponent,
    ItemcardWideComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
