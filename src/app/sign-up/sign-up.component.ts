import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private as : AuthService) { }

  ngOnInit(): void {
  }

  async signup(event: any, username: string, password: string) {
    event.preventDefault();
    let user = {
      username: username, 
      password: password
    }
    await this.as.signup(user)
    await console.log(user)
  }

}
