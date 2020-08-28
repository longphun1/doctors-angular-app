import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  card = {
    name: '',
    number: '',
    exp: '',
    cv: '',
  }
  errors = []
  constructor(
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
  }

  cancel(){
    this._router.navigate(['/home'])
  }

  submit(){
    this._http.createPayment(this.card)
      .subscribe((data: any) => {
        if(data.hasOwnProperty('errors')){
        this.errors = data.errors
        }
        else {
          this._router.navigate(['/home'])
        }
      })
  }

}
