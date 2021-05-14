import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private rs: RestService
  ) { }
  
  httpHeader = this.rs.httpHeader;
  options : {} = {
    headers: this.httpHeader
  }

  endPoint = this.rs.endPoint;

  usernameExist() {
    return this.http.get(`${this.endPoint}/usernameExists`, this.options).toPromise();
  }

  signup(user: any) {
    return this.http.post(`${this.endPoint}/signup`, user, this.options).toPromise();
  }

  login(user: any) {
    return this.http.post(`${this.endPoint}/login`, user, this.options)
  }
}
