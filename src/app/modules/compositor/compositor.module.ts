import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositorComponent } from './compositor.component';

@NgModule({
  declarations: [CompositorComponent],
  imports: [
    CommonModule
  ],
  exports: [CompositorComponent]
})
export class CompositorModule { }
