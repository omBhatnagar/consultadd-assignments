import { Component, ViewChild } from '@angular/core';
import { FetchJsonPlaceholderComponent } from '../fetch-json-placeholder/fetch-json-placeholder.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  public calcValue: any;
  public userCurrency: string = '';
  public finalCurrency: string = '';
  public finalValue: number = 0;
  public currencies = ['USD', 'INR', 'EUR', 'JPY', 'GBP'];
  public rates: any = {
    USD: {
      INR: 81.11,
      EUR: 0.92,
      JPY: 129.35,
      GBP: 0.82,
    },
    INR: {
      GBP: 0.01,
      EUR: 0.011,
      JPY: 1.59,
    },
    EUR: {
      JPY: 140.29,
      GBP: 0.89,
    },
    JPY: {
      GBP: 0.0063,
    },
  };

  @ViewChild(FetchJsonPlaceholderComponent, { static: true })
  child!: FetchJsonPlaceholderComponent;

  fetchClick() {
    this.child.fetchClick();
  }

  changeCurrency() {
    if (this.userCurrency === 'GBP') {
      let rate = this.rates[this.finalCurrency][this.userCurrency];
      return (this.finalValue = parseFloat(this.calcValue) / rate);
    }
    if (
      Object.keys(this.rates[this.userCurrency]).indexOf(this.finalCurrency) ==
      -1
    ) {
      let rate = this.rates[this.finalCurrency][this.userCurrency];
      return (this.finalValue = parseFloat(this.calcValue) / rate);
    }
    let rate = this.rates[this.userCurrency][this.finalCurrency];
    return (this.finalValue = parseFloat(this.calcValue) * rate);
  }
}
