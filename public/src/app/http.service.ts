import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  login(user) {
    return this._http.post('/api/users/login', user);
  }

  register(user) {
    return this._http.post('/api/users/new', user)
  }

  getCurrentUser(){
    return this._http.get('/api/users/current')
  }

  updateUser(id, user){
    return this._http.put('/api/users/edit/' + id, user)
  }

  getUser(id) {
    return this._http.get('/api/patient/' + id)
  }

  createAppointment(app){
    return this._http.post('/api/users/appointment', app)
  }

  getApps(){
    return this._http.get('/api/appointments/all')
  }

  getApp(id){
    return this._http.get('/api/appointments/' + id)
  }

  updateApp(id, app) {
    return this._http.put('/api/appointments/edit/' + id, app)
  }

  createPayment(card){
    return this._http.post('/api/cards/new', card)
  }

  getUsers(){
    return this._http.get('/api/patients')
  }

}
