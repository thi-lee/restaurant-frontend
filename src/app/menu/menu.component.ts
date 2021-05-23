import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor( 
    private rs : RestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {  }

  menu : any[] = [];

  ngOnInit(): void {
    const cookie = document.cookie.split("=")[1];
    this.loadData();
    this.getCount();
  }

  loadData() {
    let paramPage = this.activatedRoute.snapshot.params.page;
    this.rs.getData(paramPage)
    .then(
      (resolve) => { this.menu = resolve as any[]; },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }

  toInsertForm() {
    location.href = "/insert-form";
  }

  async changepage() {
    await this.loadData()
  }

  confirmDelete() {
    return confirm("Are you sure you want to delete this item?");
  }

  ondelete(event: any, deleteId: any) {
    event.preventDefault();
    if (this.confirmDelete()) {
      this.rs.removeData(deleteId)
      .then(() => {
        this.getCount();
        this.loadData();
      });
    }
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
