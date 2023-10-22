import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _url: string = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser>(this._url)
  }
}
