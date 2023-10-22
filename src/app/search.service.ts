import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>('');

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  getSearchQuery() {
    return this.searchQuerySubject.asObservable();
  }
}
