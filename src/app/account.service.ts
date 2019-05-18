import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  public static userHost = 'http://localhost:3000/';

  constructor(private http:HttpClient) {}


  login(user:User): Observable<User> {

    const headers = new HttpHeaders();

    return this.http.post<User>(AccountService.userHost + '/users/login', user, { headers, withCredentials: true }).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      })
    )
  }

  register(user:User): Observable<User> {

    const headers = new HttpHeaders();

    return this.http.post<User>(AccountService.userHost + 'users/', user, { headers, withCredentials: true }).pipe(
      map(user => {
        if (user) {
          return user;
        }
      })
    )
  }

  logout() {

    localStorage.removeItem('user');
  }
  
}
