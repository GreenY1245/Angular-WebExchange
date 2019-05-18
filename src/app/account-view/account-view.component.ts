import { Component, OnInit } from '@angular/core';
import keypair from 'keypair';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  constructor(router:Router) {

    if (!this.isLoggedIn()) {
      router.navigate(['account/login']);
    }
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

}
