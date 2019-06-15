import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { CompositorModule } from '../compositor/compositor.module';
import { MilesPipe } from 'src/app/miles.pipe';
import { MilesModule } from 'src/app/pipe/miles.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    CompositorModule,
    MilesModule,
  ],
  exports: [OverviewComponent]
})
export class OverviewModule { }
