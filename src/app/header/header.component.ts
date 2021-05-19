import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

  navTabs = [
    { name: "sign up", link: "/signup"},
    { name: "log in", link: "/login"},
    { name: "menu", link: "/menu" }
  ];

  selectedTab: any;

  select(item: any) {
    this.selectedTab = item;
  }
}
