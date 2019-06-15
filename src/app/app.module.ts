import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { HmdSelectorModule } from './modules/hmd-selector/hmd-selector.module';
import { HmdSelectorItemModule } from './modules/hmd-selector-item/hmd-selector-item.module';
import { ActivehmdService } from './modules/shared/activehmd.service';
import { OverviewModule } from './modules/overview/overview.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { MilesModule } from './pipe/miles.module';
import { SelectedrangeService } from './modules/shared/selectedrange.service';
import { ComparelistModule } from './modules/comparelist/comparelist.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ComparelistModule,
    HmdSelectorModule,
    HmdSelectorItemModule,
    OverviewModule,
    MilesModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [ActivehmdService, SelectedrangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
