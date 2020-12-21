import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navBar = {
    open: false
  }
  constructor() { }

  ngOnInit() {
  }

  hamIconClick (x) {
    this.navBar.open = !this.navBar.open
  }
}
