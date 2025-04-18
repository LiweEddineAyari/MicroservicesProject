import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/bloc-list', title: 'bloc List',  icon:'content_paste', class: '' },
  { path: '/foyer-list', title: 'foyer List',  icon:'content_paste', class: '' },
  { path: '/universite-list', title: 'universite List',  icon:'content_paste', class: '' },
  { path: '/reservation-list', title: 'reservation List',  icon:'content_paste', class: '' },
  { path: '/chambre-list', title: 'chambre List',  icon:'content_paste', class: '' },
  { path: '/etudiant-list', title: 'etudiant List',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
