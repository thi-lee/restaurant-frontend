import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { VerifyService } from '../services/verify.service';

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
    private vs: VerifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

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
        await this.as.login(user)
        .then(() => console.log('log in success'))
      }
    }
  }
}
