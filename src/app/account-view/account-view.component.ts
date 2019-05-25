import { Component, OnInit } from '@angular/core';
import keypair from 'keypair';
import { Router } from '@angular/router';
import { AccountService } from '../account.service'

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  constructor(private accountService:AccountService, private router:Router) {

    if (!this.isLoggedIn()) {
      router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

}
