import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistComponent } from './components/regist/regist.component';
import { FormsModule } from '@angular/forms';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { SchedulePetitionComponent } from './components/schedule-petition/schedule-petition.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';


@NgModule({
  declarations: [
    SideBarComponent,
    LoginComponent,
    RegistComponent,
    ScheduleAppointmentComponent,
    SchedulePetitionComponent,
    CalendarComponent,
    AppointmentsComponent
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
  ],

  exports: [
    SideBarComponent,
    LoginComponent,
    RegistComponent,
    ScheduleAppointmentComponent,
    SchedulePetitionComponent,
    CalendarComponent,
    AppointmentsComponent
  ]
})
export class SharedModule { }
