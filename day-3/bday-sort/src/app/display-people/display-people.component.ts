import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

import { sortPeople } from 'src/util/sort';

@Component({
  selector: 'app-display-people',
  templateUrl: './display-people.component.html',
  styleUrls: ['./display-people.component.css'],
})
export class DisplayPeopleComponent implements OnInit {
  public people: any;
  private _sortingSubscription: any;
  private _peopleSubscription: any;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this._peopleSubscription = this.peopleService
      .getPeople('../../assets/data.json')
      .subscribe((response) => (this.people = response));

    this._sortingSubscription = this.peopleService.sortingChange.subscribe(
      (value) => (this.people = sortPeople(this.people, value))
    );
  }

  ngOnDestroy() {
    this._peopleSubscription.unsubscribe();
    this._sortingSubscription.unsubscribe();
  }
}
