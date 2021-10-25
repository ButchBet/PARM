import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistComponent } from './components/regist/regist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SideBarComponent,
    LoginComponent,
    RegistComponent
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],

  exports: [
    SideBarComponent,
    LoginComponent,
    RegistComponent
  ]
})
export class SharedModule { }
