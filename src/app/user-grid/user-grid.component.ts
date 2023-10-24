import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserStoreService } from '../user-store.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../user';
import { UserCardComponent } from '../user-card/user-card.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit{
  userData: any[] = []
  filteredUsers: any[] = [];
  unFilteredUsers: any[] = [];
  searchText: string = "";
  val: any

  constructor(private http: HttpClient, private router: Router, private userStoreService: UserStoreService, private apiService: ApiService){}

  ngOnInit() { //get initial users
    this.apiService.getData().subscribe(Response => {
      this.userStoreService.addUser(Response['results'])
      this.userData = this.userStoreService.getAllUsers();
      this.unFilteredUsers = this.userStoreService.getAllUsers(); //Assinging to variables
    });

    this.userData = this.userStoreService.getAllUsers();
    }

    loadMoreUsers() {//Load more users when requested
      this.apiService.getData()
        .subscribe((data) => {
          this.userStoreService.addUser(data.results)
          this.userData = this.userStoreService.getAllUsers();
          this.unFilteredUsers = this.userStoreService.getAllUsers();
        });
    }

    filterUsers(query: string): IUser[] { //Filter users based on first name
      if (!query) {
        this.userData = this.unFilteredUsers
        return this.userData;
      }

      const lowercaseQuery = query.toLowerCase();

      const filteredUsers: IUser[] = this.unFilteredUsers.filter((user) => { //map through users and check first name
        const lowercaseName = user.name.first.toLowerCase();
        return lowercaseName.includes(lowercaseQuery);
      });

      this.userData = filteredUsers
      return filteredUsers;
    }

    onSearchTextEnter(searchValue: any){ //get search bar data and filter
      this.searchText = searchValue;
      this.filterUsers(searchValue)
    }
}


