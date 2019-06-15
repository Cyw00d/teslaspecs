import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparelistComponent } from './comparelist.component';

@NgModule({
  declarations: [ComparelistComponent],
  imports: [
    CommonModule,
  ],
  exports: [ComparelistComponent]
})
export class ComparelistModule { }
