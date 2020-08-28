import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object;
  newUser: object;
  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    };

    this.newUser = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    }
  }

  login(){
    this._http.login(this.user)
      .subscribe((response:any) => {
        if(response.result === 'success')
          this._router.navigate(['/home'])
      })
  }

  register(){
    this._http.register(this.newUser)
      .subscribe((response: any) => {
        if(response.result === 'success')
          this._router.navigate(['/home'])
      })
  }

}
