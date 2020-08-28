import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { NoteComponent } from './note/note.component';
import { PaymentComponent } from './payment/payment.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users/edit/:id',
    component: EditComponent
  },
  {
    path: 'users/appointment',
    component: AppointmentComponent
  },
  {
    path: 'users/appointment/all',
    component: AllAppointmentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'appointments/:id',
    component: ViewAppointmentComponent
  },
  {
    path: 'appointments/edit/:id',
    component: NoteComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'patients',
    component: AllPatientsComponent,
    pathMatch: 'full'
  },
  {
    path: 'patient/:id',
    component: ViewPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
