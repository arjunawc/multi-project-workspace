import { Component, OnInit } from '@angular/core';
import { UserService } from 'store-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
