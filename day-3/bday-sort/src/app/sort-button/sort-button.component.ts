import { Component } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css'],
})
export class SortButtonComponent {
  constructor(private peopleService: PeopleService) {}
  onRadioChange($event: any) {
    this.peopleService.change($event.target.value);
  }
}
