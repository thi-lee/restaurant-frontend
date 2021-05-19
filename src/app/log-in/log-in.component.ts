import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { VerifyService } from '../services/verify.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  usernameErr = { notification: "Please enter username", result: true };
  passwordErr = { notification: "Please enter password", result: true };

  constructor(
    private as: AuthService,
    private vs: VerifyService
  ) { }

  ngOnInit(): void {
  }

  // setCookie(token: string, expires: {}) {
  //   this.cookie.set('jwt', token, expires);
  // }

  async login(username: string, password: string, event?: any) {
    event.preventDefault();
    let verifyUsername;
    let verifyPassword;
    this.usernameErr = { notification: "Please enter username", result: true };
    this.passwordErr = { notification: "Please enter password", result: true };

    verifyUsername = this.vs.verifyUsername(username);
    if (verifyUsername != 'Username is valid') {
      this.usernameErr = { notification: verifyUsername, result: false };
    } 
    
    else {
      verifyPassword = this.vs.verifyPassword(password);
      if (verifyPassword != 'Password is valid') {
        this.passwordErr = { notification: verifyPassword, result: false };
      } 
      
      else {
        let user = { username: username, password: password }
        let responseFromServer = await this.as.login(user);
        console.log(responseFromServer)
        if ( Object.values(responseFromServer)[0] == '021') {
          this.usernameErr = { notification: Object.values(responseFromServer)[1], result: false };
        }
      }
    }
  }
}
