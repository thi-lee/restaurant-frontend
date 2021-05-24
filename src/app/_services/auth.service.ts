import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from '../_services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private rs: RestService,
    private router: Router
  ) { }

  options = this.rs.options;

  endPoint = this.rs.endPoint;

  signup(user: any) {
    return this.http.post(`${this.endPoint}/signup`, user).toPromise();
  }

  login(user: any) {
    return this.http.post(`${this.endPoint}/login`, user).toPromise();
  }

  saveToken() {
    
  }

  loggedIn() {
    return !!localStorage.getItem("idToken");
  }

  getToken() {
    return localStorage.getItem("idToken")
  }

  logOut() {
    localStorage.removeItem("idToken");
    this.router.navigate(['/login'])
  }
}
