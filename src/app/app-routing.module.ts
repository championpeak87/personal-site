import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'about',
    component: AppComponent
  },
  {
    path: 'exp',
    component: AppComponent
  },
  {
    path: 'dev',
    component: AppComponent
  },
  {
    path: 'contact',
    component: AppComponent
  },
  {
    path: 'edu',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
