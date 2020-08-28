import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  app = {
    first_name: '',
    last_name: '',
    age: '',
    time: '',
    comment: '',
    note: '',
  }
  errors = [];
  constructor(
    private _router: Router,
    private _http: HttpService,
  ) { }

  ngOnInit() {
  }

  submit(){
    this._http.createAppointment(this.app)
      .subscribe((data: any) => {
        if(data.hasOwnProperty('errors')) {
          this.errors = data.errors;
        }
        else {
          this._router.navigate(['/payment'])
        }
      })
  }

  cancel(){
    this._router.navigate(['/home'])
  }

}
