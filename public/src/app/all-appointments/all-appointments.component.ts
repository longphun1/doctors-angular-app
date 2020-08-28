import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {
  apps = [];
  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._http.getApps()
      .subscribe((data: any) => this.apps = data.appointments)
  }

  view(id){
    this._router.navigate(['/appointments/' + id])
  }

  home(){
    this._router.navigate(['/home'])
  }

}
