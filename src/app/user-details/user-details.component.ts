import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const userId = params['userId'];
      console.log("test")
      // Use the userId to fetch and display user details
    });
  }

}
