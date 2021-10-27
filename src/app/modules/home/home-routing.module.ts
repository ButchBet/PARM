import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from '@shared/components/appointments/appointments.component';
import { CalendarComponent } from '@shared/components/calendar/calendar.component';
import { ScheduleAppointmentComponent } from '@shared/components/schedule-appointment/schedule-appointment.component';
import { SchedulePetitionComponent } from '@shared/components/schedule-petition/schedule-petition.component';

const routes: Routes = [
  {
    path: "",
    component: ScheduleAppointmentComponent
  },

  {
    path: "schedule-appointment",
    component: ScheduleAppointmentComponent
  },

  {
    path: "schedule-petiotion",
    component: SchedulePetitionComponent
  },

  {
    path: "calendar",
    component: CalendarComponent
  },

  {
    path: "appointments",
    component: AppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
