import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AJK-webExchange';

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }
}
