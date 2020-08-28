import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
  users = [];
  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._http.getUsers()
      .subscribe((data:any) => this.users = data.users)
  }

  view(id){
    this._router.navigate(['/patient/', id])
  }

  back(){
    this._router.navigate(['/home'])
  }

}
