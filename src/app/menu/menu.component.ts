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
    this.getCount();
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
    await this.loadData()
  }

  async ondelete(event: any, deleteId: any) {
    event.preventDefault();
    await this.rs.removeData(deleteId);
    await this.loadData();
  }

  onToggle(event: any, modal: any) {
    event.preventDefault();
    modal.style.display = "block";
  }

  onDismiss(event: any, modal: any) {
    event.preventDefault();
    modal.style.display = "none";
  }

  onUpload() {

  }

  res?: any[] = [];
  getCount() {
    this.rs.getCount().then(resolve => this.res = resolve as any[]);
  }

  async startSearch(event: any, searchTerm: string) {
    this.loadData();
    await this.rs.searchData(searchTerm)
    .then(resolve => {
      this.menu = resolve as any[] 
    })
  }

  headers = ["name", "image", "description", "price", "action", "upload image"];
}
