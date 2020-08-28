import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { NoteComponent } from './note/note.component';
import { PaymentComponent } from './payment/payment.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EditComponent,
    AppointmentComponent,
    AllAppointmentsComponent,
    ViewAppointmentComponent,
    NoteComponent,
    PaymentComponent,
    AllPatientsComponent,
    ViewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
