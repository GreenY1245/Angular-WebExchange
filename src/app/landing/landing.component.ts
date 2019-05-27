import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  users:User[]

  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {

    this.accountService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
