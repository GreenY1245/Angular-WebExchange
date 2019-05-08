import { Component, OnInit } from '@angular/core';
import keypair from 'keypair';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const pair = keypair();
    console.log(pair)
  }

}
