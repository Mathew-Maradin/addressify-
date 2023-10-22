import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private users: IUser[] = [];

  addUser(user: IUser) {
    this.users.push(user);
  }

  getUserById(id: string): IUser {
    return this.users.find((user) => user.login.uuid === id);
  }

  // Add other methods to manipulate and access user data as needed
}
