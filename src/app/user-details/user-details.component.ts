import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from '../user-store.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userId: string = '';
  userData: any[] = []
  specificUser: any = {}

  constructor(private route: ActivatedRoute, private userStoreService: UserStoreService) {}

  ngOnInit() {
    console.log("load")
    this.route.params.subscribe((params) => {
      this.userId = params['userId'];
    });
    this.userData = this.userStoreService.getAllUsers();

    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].login.uuid == this.userId){
        this.specificUser = this.userData[i]
      }
    }
  }
}
