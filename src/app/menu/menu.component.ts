import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
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
    await this.getCount();
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

  pages : string[] = [];
  getCount() {
    let resObj: any;
    let total: any;
    this.rs.getCount().then(resolve => resObj = resolve)
    .then(() => {total = Number(resObj[0]["total"])})
    .then(() => this.pagination(total))
  }

  pagination(total: number) {
    this.pages = [];
    let recordPerPage = 7;
    let noOfPage = Math.ceil(total * (1 / recordPerPage));
    for (let i = 1; i <= noOfPage; i++) {
      this.pages.push(i.toString())
    }
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
