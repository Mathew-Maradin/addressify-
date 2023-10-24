import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchword: string = '';

  constructor(private router: Router) {}

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>(); //emit user inputted search

  onSeachTextChanged() { //Function to emit user search
    this.searchTextChanged.emit(this.searchword)
  }

  isRootDirectory(): boolean { //Check if use is in root directory
    return this.router.url === '/';
  }

}
