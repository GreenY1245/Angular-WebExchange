import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  public static userHost = 'http://localhost:9999/';

  constructor(private http:HttpClient) {}


  login(user:User): Observable<User> {

    const headers = new HttpHeaders();

    return this.http.post<User>(AccountService.userHost + 'users/login', user, { headers, withCredentials: true }).pipe(
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

  registerAsWorker() {
    
    const headers = new HttpHeaders();

    const current = {
      ip: "127.0.0.1",
      port: "4200"
    }

    return this.http.post<User>(AccountService.userHost + 'nodes/', current, { headers, withCredentials: true }).pipe(
      map(nodes => {
        if (nodes) {
          localStorage.setItem('nodes', JSON.stringify(nodes));
        }
        return nodes;
      })
    )
  }

  getUsers(): Observable<User[]> {

    const headers = new HttpHeaders();

    return this.http.get<User[]>(AccountService.userHost + 'users/').pipe(
      map(users => {
        if (users) {
          return users;
        }
      })
    )
  }

  getUser(_id:string): Observable<User> {

    return this.http.get<User>(AccountService.userHost + 'users/' + _id).pipe(
      map(user => {
        if (user) {
          return user;
        }
      })
    )
  }

  getWalletBlock(wallet:string): Observable<any> {

    return this.http.get<any>("http://127.0.0.1:3000/blockchain/wallet/" + wallet).pipe(
      map(wallet => {
        if (wallet) {
          return wallet;
        }
      })
    )

  }

  getExchangeData(): Observable<any> {

    const currentDate = new Date().toISOString().substring(1, 10);

    return null;
  }
  
}
