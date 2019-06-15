import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparelistComponent } from './comparelist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComparelistComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ComparelistComponent]
})
export class ComparelistModule { }
