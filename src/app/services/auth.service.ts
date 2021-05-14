import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestService } from '../rest.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private rs: RestService
  ) { }
  
  // httpHeader = this.rs.httpHeader;
  // options : {} = {
  //   headers: this.httpHeader
  // }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    })
  }

  options : {} = {
    headers: this.httpHeader
  }

  endPoint = this.rs.endPoint;

  signup(user: any) {
    return this.http.post(`${this.endPoint}/signup`, user, this.options).toPromise();
  }

  login(user: any) {
    return this.http.post(`${this.endPoint}/login`, user, this.options)
  }
}
