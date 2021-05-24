import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {

  constructor(
    private rs : RestService
  ) { }

  ngOnInit(): void {
  }

  onsubmit(event: any, name: string, description: string, price: string) {
    event.preventDefault();
    let dish = {
      name: name,
      description: description,
      price: price
    }
    const ret = this.rs.sendData(dish).then((resolve) => {location.href = '/menu'})
  }
}
