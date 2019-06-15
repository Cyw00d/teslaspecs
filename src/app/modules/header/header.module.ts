import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HmdSelectorModule } from '../hmd-selector/hmd-selector.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HmdSelectorModule
  ]
})
export class HeaderModule { }
