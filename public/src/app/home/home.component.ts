import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = null;

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._http.getCurrentUser()
      .subscribe((response: any) => {
        if(response.user === null) {
          this._router.navigate(['/login'])
        }
        else{
          this.user = response.user;
        }
      })
  };

  goToEdit(id) {
    this._router.navigate(['/users/edit/', id]);
  }
}
