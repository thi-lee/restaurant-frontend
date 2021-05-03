import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rs: RestService) { }

  ngOnInit(): void {
  }

  navTabs = [
    { name: "home", link: "/" },
    { name: "menu", link: "/menu" },
    { name: "feedback", link: "/feedback" },
    { name: "contact", link: "/contact" }
  ];

  selectedTab: any;

  select(item: any) {
    this.selectedTab = item;
  }

  // onsearch(event: any, search: any) {
  //   this.rs.searchData.then((resolve) => { console.log(resolve)});
  // }
}
