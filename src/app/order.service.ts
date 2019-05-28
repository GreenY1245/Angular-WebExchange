import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order } from './order';
import { NonNullAssert } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public static apiUrl = 'http://localhost:9999/';

  constructor(private http:HttpClient) {
    
  }

  getOrders() : Observable<Order[]> {
    const headers = new HttpHeaders();

    return this.http.get<Order[]>(OrderService.apiUrl + 'orders/').pipe(
      map(users => {
        if (users) {
          return users;
        } else {
          return [];
        }
      })
    );
  }
}
