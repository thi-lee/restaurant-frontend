import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor( 
    private rs : RestService,
    private activatedRoute: ActivatedRoute
  ) {  }

  menu : any[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(toPrevious?: any) {
    let paramPage = this.activatedRoute.snapshot.params.page;
    this.rs.getData(paramPage)
    .then((resolve) => { this.menu = resolve as any[]; })
  }

  toInsertForm() {
    location.href = "/insert-form";
  }

  async changepage() {
    console.log('hello')
    await this.loadData()
  }

  async ondelete(event: any, deleteId: any) {
    event.preventDefault();
    await this.rs.removeData(deleteId);
    await this.loadData();
  }

  headers = ["name", "image", "description", "price", "action", "upload image"];
}
