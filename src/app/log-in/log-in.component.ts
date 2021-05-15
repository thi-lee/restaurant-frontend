import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private as: AuthService,
  ) { }

  ngOnInit(): void {
  }

  async login(event: any, username: string, password: any) {
    event.preventDefault();
    let user = {
      username: username,
      password: password
    }
    await this.as.login(user);
    await console.log('log in success')
  }

}
