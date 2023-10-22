import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../user';
import { UserCardComponent } from '../user-card/user-card.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit{
  userData: any[] = []
  filteredUsers: IUser[] = [];
  results = 10

  constructor(private http: HttpClient, private router: Router, private searchService: SearchService){}

  ngOnInit() {
    this.http.get<IUser>('https://randomuser.me/api/?results=10&seed=nuvalence').subscribe(Response => {
      this.userData = Response['results'];
      console.log(this.userData)
    });

    this.searchService.getSearchQuery().subscribe((query) => {
      console.log("filter")
      console.log(this.filterUsers(query))
      this.filteredUsers = this.filterUsers(query);
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
      this.results += 10;
      this.fetchUsers();
    }

    filterUsers(query: string): IUser[] {
      console.log(query)
      if (!query) {
        return this.userData; // If the query is empty, return all users
      }

      // Convert the query to lowercase for case-insensitive search
      const lowercaseQuery = query.toLowerCase();

      return this.userData.filter((user) => {
        // Convert the user's name to lowercase for case-insensitive search
        const lowercaseName = user.name.toLowerCase();

        // Check if the user's name contains the search query
        return lowercaseName.includes(lowercaseQuery);
      });
    }
  }
