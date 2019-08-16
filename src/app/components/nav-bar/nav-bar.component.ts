import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app.route';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public pageList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.pageList = routes;
  }

}
