import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from '../_services/rest.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private rs: RestService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  options = this.rs.options;

  endPoint = this.rs.endPoint;

  signup(user: any) {
    return this.http.post(`${this.endPoint}/signup`, user).toPromise();
  }

  login(user: any) {
    return this.http.post(`${this.endPoint}/login`, user).toPromise();
  }

  loggedIn() {
    return !!this.cookieService.get('jwt');
  }

  getToken() {
    return this.cookieService.get('jwt');
  }

  logOut() {
    this.cookieService.delete('jwt');
    this.router.navigate(['/login'])
  }
}
