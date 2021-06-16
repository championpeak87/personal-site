import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    redirectTo: "#"
  },
  {
    path: 'exp',
    redirectTo: "#"
  },
  {
    path: 'dev',
    redirectTo: "#"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
