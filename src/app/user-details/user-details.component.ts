import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from '../user-store.service';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userId: string = '';
  userData: any[] = []
  specificUser: any = {}

  constructor(private http: HttpClient, private route: ActivatedRoute, private userStoreService: UserStoreService, private apiService: ApiService) {}

  ngOnInit() { // On load fetching users
    this.apiService.getData().subscribe(Response => {
      this.userStoreService.addUser(Response['results'])
      this.userData = Response['results'];

      this.route.params.subscribe((params) => { //Getting the user id from route
        this.userId = params['userId'];
      });

      this.userData = this.userStoreService.getAllUsers();

      for (let i = 0; i < this.userData.length; i++) { //Finding the specific user based on URL
        if (this.userData[i].login.uuid == this.userId){
          this.specificUser = this.userData[i]
        }
      }
    });


  }
}
