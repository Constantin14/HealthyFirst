import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login-page/user.interface';
import { userAccount } from '../user.global-model';
import { LogoutPageService } from './logout-page.service';

@Component({
  selector: 'app-logout-page',
  imports: [],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.css'
})
export class LogoutPageComponent {
  constructor(private logoutService: LogoutPageService, private router: Router){}

  user!: User;

  logoutUser(){
    this.logoutService.logoutUser().subscribe((res) => {
      userAccount.isAuth = false;
      userAccount.username = '';
      this.router.navigate(['login-submit']);
    }, (err) => {
      userAccount.isAuth = false;
      userAccount.username = '';
      this.router.navigate(['login-submit']);
    });

  }

  checkIfSignedIn() {
    return userAccount.isAuth;
  }

}
