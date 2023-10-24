import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<IUser>('https://randomuser.me/api/?results=10&seed=nuvalence')
  }
}
