import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  @Output() searchQueryChange = new EventEmitter<string>();

  onInputChange() {
    const query = this.searchQuery;
    // this.searchService.setSearchQuery(query); // Set the search query using the service
  }

  isRootDirectory(): boolean {
    return this.router.url === '/';
  }

}
