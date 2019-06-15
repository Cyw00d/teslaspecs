import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HmdSelectorComponent } from './hmd-selector.component';
import { HmdSelectorItemModule } from 'src/app/modules/hmd-selector-item/hmd-selector-item.module';

@NgModule({
  declarations: [HmdSelectorComponent],
  exports: [
    HmdSelectorComponent,
  ],
  imports: [
    CommonModule,
    HmdSelectorItemModule
  ]
})
export class HmdSelectorModule { }
