import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../user';
import { UserCardComponent } from '../user-card/user-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit{
  userData: any[] = []
  results = 10

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit() {
    this.http.get<IUser>('https://randomuser.me/api/?results=10&seed=nuvalence').subscribe(Response => {
      this.userData = Response['results'];
      console.log(this.userData)
    });
    }

    fetchUsers() {
      this.http
      .get<IUser>('https://randomuser.me/api/?results=10&seed=nuvalence')
        .subscribe((data) => {
          console.log(data.results)
          this.userData = this.userData.concat(data.results);
        });
    }

    loadMoreUsers() {
      this.results += 10; // Increase the number of results to fetch
      this.fetchUsers();
    }

    navigateToDetailsPage(userId: string) {
      this.router.navigate(['/details', userId]);
    }

  }
