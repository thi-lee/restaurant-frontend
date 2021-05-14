import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor() { }

  verifyPassword(password: string) {
    let notification;
    let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let number = /[0-9]/;

    if (password == '') {
      notification = 'Password cannot be empty';
    } else if (password.length < 6) {
      notification = 'Password is too short';
    } else if (password.length > 100) {
      notification = 'Password is too long';
    } else if (!password.match(specialChars)) {
      notification = 'Password has to have at least one special character';
    } else if (!password.match(lowercase)) {
      notification = 'Password has to have at least one lowercase letter';
    } else if (!password.match(uppercase)) {
      notification = 'Password has to have at least one uppercase letter';
    } else if (!password.match(number)) {
      notification = 'Password has to have at least one number';
    } else {
      notification = 'Password is valid';
    }

    return notification;
  }

  verifyUsername(username: string) {
    let notification;
    let specialChars = /[!@#$%^&*()_+=\[\]{};':"\\|,<>\/?]/;
    let lowercase = /[a-z]/;

    if (username == '') {
      notification = 'Username cannot be empty';
    } else if (username.length < 6) {
      notification = 'Username is too short';
    } else if (username.length > 100) {
      notification = 'Username is too long';
    } else if (username.match(specialChars)) {
      notification = 'Username cannot contain special characters'
    } else if (!username.match(lowercase)) {
      notification = 'Username has to contain lowercase letter'
    } else {
      notification = 'Username is valid';
    }
    return notification;
  }
}
