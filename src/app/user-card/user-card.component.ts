import { Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() userData: any; // Input property to receive data

  constructor(private router: Router) {}

  fetchUsers() {
    // this.router.navigate('/details/ID');
  }

  ngOnInit() {

  }
}
