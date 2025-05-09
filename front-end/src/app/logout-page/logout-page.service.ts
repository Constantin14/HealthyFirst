import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../login-page/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LogoutPageService {

  constructor(private httpClient: HttpClient) { }

  logoutUser():Observable<User>{
    return this.httpClient.get<User>("http://localhost:8080/user/logout", {withCredentials: true});
  }
}
