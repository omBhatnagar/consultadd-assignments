import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPeopleComponent } from './display-people/display-people.component';
import { SortButtonComponent } from './sort-button/sort-button.component';

@NgModule({
  declarations: [AppComponent, DisplayPeopleComponent, SortButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
