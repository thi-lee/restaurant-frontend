import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestService } from '../rest.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor( 
    private rs: RestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  menu : any[] = [];
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.rs.getData()
    .then((resolve) => {
      this.menu = resolve as any
    })
    .then(() => {
      this.getId();
    });
  }

  searchedId = this.activatedRoute.snapshot.params.editId;
  editName? : string;
  editDescription?: string;
  editPrice?: string;

  getId() {
    const ret = this.menu.find(dish => dish.id == this.searchedId)
    this.editName = ret.name;
    this.editDescription = ret.description;
    this.editPrice = ret.price;
  }

  name? : string;
  description?: string;
  price?: string;

  changeName(name: string) {
    return this.name = name;
  }
  
  changeDescription(description?: string) {
    return this.description = description;
  }

  changePrice(price?: string) {
    return this.price = price;
  }

  async onUpdate(event: any) {
    event.preventDefault();
    const update = {name: this.name, description: this.description, price: this.price};
    await this.rs.editData(this.searchedId, update);
    await this.router.navigate(['/menu']);
  }

}
