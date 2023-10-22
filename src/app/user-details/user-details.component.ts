import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userId: string = '';

  constructor(private route: ActivatedRoute) {}

    ngOnInit() {
    // Subscribe to route parameters to get the user ID
    this.route.params.subscribe((params) => {
      this.userId = params['userId']; // 'id' should match the route parameter name
      // Now, you can use this.userId in your component
    });
    console.log("test")
    console.log(this.userId)
  }

    // ngOnInit() {
    //   this.route.params.subscribe((params) => {
    //     const userId = params['userId'];
    //     console.log("test")
    //     // Use the userId to fetch and display user details
    //   });
    // };
}
