import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { MenuComponent } from "./menu/menu.component";
import { userAccount } from './user.global-model';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoutPageComponent, MenuComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'HealthyFirst';
  hideMenu = false;

  constructor(private route: Router) {
    
  }
  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe({
      next: () => {
        this.hideMenu = (this.route.url === '/login-submit' || this.route.url === '/login-page' || this.route.url === '/submit-page');
      }
    })
  }


}
