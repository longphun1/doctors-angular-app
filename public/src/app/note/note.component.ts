import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  app = null;
  errors = [];
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

  cancel(){
    this._router.navigate(['/appointments/' + this.app._id])
  }

  submit(){
    this._http.updateApp(this.app._id, {
      first_name: this.app.first_name,
      last_name: this.app.last_name,
      age: this.app.age,
      comment: this.app.comment,
      note: this.app.note
    })
      .subscribe((data:any) => {
        if(data.hasOwnProperty('errors')){
          this.errors = data.errors
        }
        else {
          this._router.navigate(['/appointments/' + this.app._id])
        }
      })
  }
   

}
