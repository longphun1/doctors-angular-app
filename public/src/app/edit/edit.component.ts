import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  handleCancel(){
    this._router.navigate(['/home'])
  }

  submit(){
    this._http.updateUser(this.user._id, {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      age: this.user.age,
      address: this.user.address,
      phone: this.user.phone,
    })
      .subscribe((data: any) => {
        this._router.navigate(['/home'])
      })
  }
    

}
