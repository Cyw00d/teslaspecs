import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilesPipe } from './miles.pipe';

@NgModule({
  declarations: [MilesPipe],
  exports: [MilesPipe],
  imports: [
    CommonModule
  ]
})
export class MilesModule { }
