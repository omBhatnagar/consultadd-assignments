import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  public sorting: string;

  sortingChange: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {
    this.sorting = '';
  }

  change(newSorting: string) {
    this.sorting = newSorting;
    this.sortingChange.next(this.sorting);
  }

  getPeople(url: string) {
    return this.http.get(url);
  }
}
