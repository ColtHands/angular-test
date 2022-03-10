import { Component, OnInit, Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppStore } from './app.store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AppStore]
})
export class AppComponent implements OnInit {
  chuckApi = this.appStore.chuckApi;

  constructor(private appStore: AppStore) {
  }

  ngOnInit() {
    console.log('this.appStore.chuchApi3', this.appStore.chuckApi)
    this.getThreeRandomCategories()
  }

  getThreeRandomCategories() {
    console.log('getThreeRandomCategories')
  }

  getRandomNumber(min: number, max: number):number {
    return Math.random() * (max - min) + min
  }
}
