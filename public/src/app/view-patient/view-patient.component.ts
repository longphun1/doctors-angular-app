import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  user = null;
  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params  
      .subscribe((params: Params) => {
        this._http.getUser(params.id)
          .subscribe((data:any) => this.user = data.user)
      })
  }

  back(){
    this._router.navigate(['/patients'])
  }
}
