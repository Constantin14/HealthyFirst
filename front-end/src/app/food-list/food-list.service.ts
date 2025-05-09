import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor(private httpClient:HttpClient) { }

  getFoodList():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/foodList/all", {withCredentials: true});
  }

  getFoodByType(foodType:string):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/foodList/all/${foodType}`, {withCredentials: true});
  }

  getFoodByName(foodName:string):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/foodList/search/${foodName}`, {withCredentials: true});
  }
}
