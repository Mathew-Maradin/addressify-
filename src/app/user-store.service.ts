import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private users: IUser[] = [];

  addUser(newUsers: IUser[]) {
    this.users = this.users.concat(newUsers);
  }

  getAllUsers() {
    return this.users;
  }
}
