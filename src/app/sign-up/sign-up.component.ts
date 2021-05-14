import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { VerifyService } from '../services/verify.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usernameErr = {
    notification: "Please enter username",
    result: true
  };

  passwordErr = {
    notification: "Please enter password",
    result: true
  }

  constructor(
    private as : AuthService,
    private vs: VerifyService
  ) { }

  ngOnInit(): void {
  }

  signup(username: string, password: string, event?: any) {
    event.preventDefault();
    let verifyUsername;
    let verifyPassword;

    verifyUsername = this.vs.verifyUsername(username);
    if (verifyUsername != 'Username is valid') {
      this.usernameErr = {
        notification: verifyUsername,
        result: false
      };
      return false;
    } 
    
    else {
      verifyPassword = this.vs.verifyPassword(password);
      if (verifyPassword != 'Password is valid') {
        this.passwordErr = {
          notification: verifyPassword,
          result: false
        };
        return false;
      } 
      
      else {
          let user = {
            username: username, 
            password: password
          }
        // await this.as.signup(user)
        return true;
      }
    }
  }
}
