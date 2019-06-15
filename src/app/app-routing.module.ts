import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './modules/overview/overview.component';
import { CompareComponent } from './modules/compare/compare.component';

const routes: Routes = [
  { 
    path: '', 
    component: OverviewComponent,
    pathMatch: 'full',
  },
  {
    path: 'compare',
    component: CompareComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
