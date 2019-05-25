import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service'

import { User } from '../user'

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  user:User = {_id:'', username:'', email:'', password:'', wallet:''};

  constructor(private accountService:AccountService, private router:Router) {

    if (!this.isLoggedIn()) {
      router.navigate(['login']);
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

}
