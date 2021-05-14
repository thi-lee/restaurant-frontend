import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor() { }

  verifyPassword(password: string) {
    let noti;
    if (password == '') {
      noti = 'Password cannot be empty';
    } else if (password.length < 6) {
      noti = 'Password is too short';
    } else if (password.length > 100) {
      noti = 'Password is too long';
    } else {
      noti = 'Password is valid';
    }
    return noti;
  }

  verifyUsername(username: string) {
    let noti;
    let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
    if (username == '') {
      noti = 'Username cannot be empty';
    } else if (username.length < 6) {
      noti = 'Username is too short';
    } else if (username.length > 100) {
      noti = 'Username is too long';
    } else if (username.match(specialChars)) {
      noti = 'Username cannot contain special characters and/or numbers'
    } else {
      noti = 'Username is valid';
    }
    return noti;
  }
}
