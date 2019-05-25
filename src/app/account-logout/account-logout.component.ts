import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-account-logout',
  templateUrl: './account-logout.component.html',
  styleUrls: ['./account-logout.component.css']
})
export class AccountLogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.logout();
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('user');
  }

}
