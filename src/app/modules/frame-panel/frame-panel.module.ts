import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FramePanelRoutingModule } from './frame-panel-routing.module';
import { FramePanePagesComponent } from './pages/frame-pane-pages/frame-pane-pages.component';
import { FramePanelPagesComponent } from './pages/frame-panel-pages/frame-panel-pages.component';


@NgModule({
  declarations: [
    FramePanePagesComponent,
    FramePanelPagesComponent
  ],
  imports: [
    CommonModule,
    FramePanelRoutingModule
  ]
})
export class FramePanelModule { }
