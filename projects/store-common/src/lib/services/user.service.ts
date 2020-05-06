import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private clinet: HttpClient) {}

  getUsers() {
    return this.clinet.get('https://reqres.in/api/users?page=2');
  }
}
