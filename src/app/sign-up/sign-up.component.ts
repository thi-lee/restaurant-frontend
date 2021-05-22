import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { VerifyService } from '../_services/verify.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usernameErr = { notification: "Please enter username", result: true };
  passwordErr = { notification: "Please enter password", result: true };

  constructor(
    private as : AuthService,
    private vs: VerifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isActive: boolean = false;

  changeType() {
    this.isActive = !this.isActive;
  }

  async signup(username: string, password: string, event?: any) {
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
        const responseFromServer = await this.as.signup(user);
        if ( Object.values(responseFromServer)[0] == '006') {
          this.usernameErr = { notification: Object.values(responseFromServer)[1], result: false };
        } else {
          this.router.navigate(['/login']);
        }
      }
    }
  }
}
