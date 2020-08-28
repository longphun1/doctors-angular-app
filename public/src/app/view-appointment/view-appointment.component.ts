import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  app = null
  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this._http.getApp(params.id)
          .subscribe((data:any) => this.app = data.appointment)
      })
  }

  addNote(id) {
    this._router.navigate(['/appointments/edit/' + id])
  }

  home(){
    this._router.navigate(['/users/appointment/all'])
  }
  

}
