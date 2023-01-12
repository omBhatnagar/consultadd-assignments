import { Component } from '@angular/core';
import { FetchJsonPlaceholderService } from '../fetch-json-placeholder.service';

@Component({
  selector: 'app-fetch-json-placeholder',
  templateUrl: './fetch-json-placeholder.component.html',
  styleUrls: ['./fetch-json-placeholder.component.css'],
})
export class FetchJsonPlaceholderComponent {
  public json: any;
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private service: FetchJsonPlaceholderService) {}

  fetchClick() {
    this.service
      .getJson(this.url)
      .subscribe((response) => (this.json = response));
  }
}
