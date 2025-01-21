import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http:HttpClient = inject(HttpClient);
  jwt:JwtHelperService = inject(JwtHelperService);

  url:string = "http://localhost:3000/"

  constructor() { }

  signIn(data:{}){
    return this.http.post(this.url + 'login', data);
  }

  signUp(data:{}){
    return this.http.post(this.url + 'register', data);
  }

  isAuthenticated(){
    const token = localStorage.getItem('token');
    return !this.jwt.isTokenExpired(token);
  }
}
